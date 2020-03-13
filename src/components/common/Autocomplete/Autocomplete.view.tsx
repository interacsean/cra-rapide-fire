// todo:
//  - !!! Scroll to first selected item
//  - Space and Enter to 'tab' to next element
//  - aria compatibility
//  - ghost input for autocomplete behind element - what if first match has different first characters?

import React, { ReactElement, useEffect } from 'react';
import * as R from 'ramda';

import { Nullable } from '../../../types/util/Nullable';
import clx from '../../../utils/Html/clx';
import orUndef from '../../../utils/Data/orUndef/orUndef';
import Input from '../Input';

import { AutocompleteProps } from './Autocomplete.props';
import css from './Autocomplete.scss';
import useDependentCallback from '../../../utils/Hooks/useDependentCallback';

const FORCE_SHOW_DROPDOWN = false;

function renderRowDefault<T>(item: T, isMatch: boolean, isSelected: boolean, value: string, getItemValue: (i: T) => string) {
  const itemValue = getItemValue(item);
  if (typeof itemValue !== 'string') throw new Error('getItemValue returned non-string in default renderRow for Autocomplete');

  return (
    <div key={itemValue} className={clx([
      css.row,
      orUndef(isMatch && css['--match']),
      orUndef(isSelected && css['--highlighted'])
    ])}>
      {itemValue}
    </div>
  );
}

function isItemMatch<T>(item: T, value: string, getItemValue?: (item: T) => string) {
  if (typeof item !== 'string' && getItemValue === undefined) return false;
  const itemVal = typeof item === 'string'
    ? item
    // @ts-ignore (checked that getItemValue is not undefined above )
    : getItemValue(item);
  return itemVal.toLowerCase().includes(value.toLowerCase());
}

// function defSortItems<T>(a: T, b: T, value: string) {
//   // @ts-ignore requires getItemValue to return a string
//   const valB = usedGetItemValue(b);
//   // @ts-ignore requires getItemValue to return a string
//   const valA = usedGetItemValue(a);
//   return score(valB, value) - score(valA, value)
//     || (valB < valA ? 1
//       : valB > valA ? -1
//       : 0
//     )
// }

// returns the handler, needed to pass in the generic
function getKeyDownHandler<T>() {
  return ([
      selectionRef,
      inputRef,
      disableSelectBySpace,
      setHasFocus,
      onChange,
      onSelect,
      setSelectedItemNRef,
      getItemValue,
    ]: [
      React.MutableRefObject<{ selectedItem: T | null; matches: T[] }>,
      React.MutableRefObject<HTMLInputElement>,
      boolean | undefined,
      React.Dispatch<React.SetStateAction<boolean>>,
      AutocompleteProps<T>['onChange'],
      AutocompleteProps<T>['onSelect'],
      (item: Nullable<T>) => void,
      (item: T) => string,
    ],
    [e]: [KeyboardEvent],
  ) => {
    if (['ArrowDown', 'ArrowUp'].includes(e.code)) {
      e.preventDefault();
      const {
        matches: _m,
        selectedItem: _si,
      } = selectionRef.current;
      const selectedItemIdx = _m.findIndex(item => item === _si);
      if (e.code === 'ArrowDown') {
        if (selectedItemIdx === _m.length - 1) return false;
        setSelectedItemNRef(_m[selectedItemIdx + 1]);
      }
      if (e.code === 'ArrowUp') {
        if (selectedItemIdx === 0) return false;
        setSelectedItemNRef(_m[selectedItemIdx - 1]);
      }
    }
    else if (
      ['Tab', 'Enter'].concat(!disableSelectBySpace ? ['Space'] : []).includes(e.code)
    ) {
      if (selectionRef.current.selectedItem === null) return false;
      onChange(getItemValue(selectionRef.current.selectedItem));
      onSelect(getItemValue(selectionRef.current.selectedItem));
      if (['Enter', 'Space'].includes(e.code)) {
        // todo: browser security prevents simulating 'Tab' for next element, must solve by someEl.focus()
        // inputRef.current.dispatchEvent(new KeyboardEvent('keypress',{'code':'Tab'}));
        e.preventDefault(); // ??
      }
      inputRef.current.blur();
    }
    return false;
  }
};

function AutocompleteView<T>(props: AutocompleteProps<T>): ReactElement<'div'> {
  // @ts-ignore (expect inputRef to be almost immediately set from child input)
  const inputRef = React.useRef(null as HTMLInputElement);
  const selectionRef = React.useRef({
    matches: [] as T[],
    selectedItem: null as Nullable<T>,
  });
  const [ selectedItem, setSelectedItem ] = React.useState(null as Nullable<T>);
  const setSelectedItemNRef = React.useCallback(
    (item: Nullable<T>) => {
      setSelectedItem(item);
      selectionRef.current.selectedItem = item;
    },
    [setSelectedItem, selectionRef],
  );

  const [ hasFocus, setHasFocus ] = React.useState(false);

  const filteredItems = React.useMemo(
    () => !props.filterItems
      ? props.items
      : props.items.filter(props.filterItems),
    [props.items, props.filterItems],
  );
  const sortedItems = React.useMemo(
    () => !props.sortItems
      ? filteredItems
      : filteredItems.sort(props.sortItems),
    [filteredItems, props.sortItems]
  );

  const renderRow = props.renderRow || renderRowDefault;
  const getItemValue = props.getItemValue || R.identity as (i: T) => string;
  const useIsItemMatched = props.isItemMatch || isItemMatch;

  const matches = React.useMemo(
    () => sortedItems.filter((item: T) => useIsItemMatched(item, props.value, getItemValue)),
    [isItemMatch, props.value, useIsItemMatched, getItemValue],
  );

  // * When matches update, auto-select the first item, and update ref value
  useEffect(
    () => {
      if (matches.length) {
        setSelectedItemNRef(matches[0]);
      } else {
        setSelectedItemNRef(null)
      }
      selectionRef.current.matches = matches;
    },
    [matches, selectionRef, setSelectedItemNRef],
  );

  const onKeyDown = useDependentCallback(
    getKeyDownHandler<T>(),
    [selectionRef, inputRef, props.disableSelectBySpace, setHasFocus, props.onChange, props.onSelect, setSelectedItemNRef, getItemValue],
  );

  const onFocus = React.useCallback(
    () => {
      setHasFocus(true);
      inputRef.current.select();
      inputRef.current.addEventListener('keydown', onKeyDown, false)
    },
    [inputRef, setHasFocus, onKeyDown],
  );

  const callSelectOnBlur = props.allowFreeEntry;
  const onBlur = React.useCallback(
    () => {
      setTimeout(() => {
        // toconsider: could use inputRef current value instead of depending on props.value
        if (callSelectOnBlur) {
          props.onSelect(props.value)
        }
        setHasFocus(false);
        inputRef.current.removeEventListener('keydown', onKeyDown, false)
      }, 1)
    },
    [props.value, setHasFocus, inputRef, onKeyDown, callSelectOnBlur, props.onSelect],
  );
  const onItemHover = React.useCallback(
    (item: T) => {
      setSelectedItemNRef(item)
    },
    [selectionRef],
  );

  const inputProps = {
    placeholder: props.placeholder,
    value: props.value,
    onChange: props.onChange,
  };

  return (
    <div className={clx([props.className, css.autocomplete].flat())} onBlur={onBlur}>
      <Input
        className={[css.input, props.inputClassName]}
        {...{
          inputRef,
          onFocus,
        }}
        {...inputProps}
      />
      {
        !hasFocus && !FORCE_SHOW_DROPDOWN ? null : (
          <div className={clx([css.dropdown, css['--default-dropdown']])}>
            {
              sortedItems.map(
                (item: T, i: number) => (
                  <div
                    key={i}
                    onMouseDown={() => {
                      props.onChange(getItemValue(item));
                      if (!callSelectOnBlur) props.onSelect(getItemValue(item));
                    }}
                    onMouseOver={() => onItemHover(item)}
                  >
                    {
                      renderRow(
                        item,
                        useIsItemMatched(item, props.value, getItemValue),
                        selectedItem === item,
                        props.value,
                        getItemValue,
                      )
                    }
                  </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default AutocompleteView;
