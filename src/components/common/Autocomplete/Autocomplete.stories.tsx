import React from 'react';
import Autocomplete from './Autocomplete.view';
import StoryView from '../Story';

const ITEMS = [
  'apples',
  'oranges',
  'pears',
];

const AutocompleteStory = () => {
  const [value, setValue] = React.useState('apples');
  const setValueFromTarget = (setValue);

  return (
    <div className={'grid theme--light'}>
      <StoryView title={"Basic"} className={"_4"}>
        <Autocomplete
          items={ITEMS}
          value={value}
          onChange={setValueFromTarget}
          onSelect={console.log}
        />
      </StoryView>
    </div>
  );
};

export default AutocompleteStory;
