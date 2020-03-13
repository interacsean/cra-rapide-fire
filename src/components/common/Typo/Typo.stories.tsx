import React from 'react';
import Box from '../Box';
import T from './index';

import css from './Typo-stories.scss';

const TypographyStory = () => {
  return (
    <div>
      <p className={['h4', css.set].join(' ')}>.h1 (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T h1>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T h1>Hello and welcome</T>
        </Box>
      </Box>
      <p className={['h4', css.set].join(' ')}>.h2 (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T h2>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T h2>Hello and welcome</T>
        </Box>
      </Box>
      <p className={['h4', css.set].join(' ')}>.h3 (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T h3>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T h3>Hello and welcome</T>
        </Box>
      </Box>
      <p className={['h4', css.set].join(' ')}>.h4 (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T h4>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T h4>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.h5 (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T h5>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T h5>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content-feature (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content-feature>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content-feature>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content-detail (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content-detail>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content-detail>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content-form-text (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content-form-text>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content-form-text>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content-field-label (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content-field-label>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content-field-label>Hello and welcome</T>
        </Box>
      </Box>

      <p className={['h4', css.set].join(' ')}>.content-caption (with default colors)</p>
      <Box className="flex-ctnr --space-around">
        <Box className={["flex-1 theme--dark", css['dark-card']]}>
          <T content-caption>Hello and welcome</T>
        </Box>
        <Box className="flex-1 theme--light ">
          <T content-caption>Hello and welcome</T>
        </Box>
      </Box>
    </div>
  );
};

export default TypographyStory;
