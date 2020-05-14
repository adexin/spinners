/** @jsx jsx */
import { CustomPicker } from 'react-color';
import { Alpha } from 'react-color/lib/components/common';
import { css, jsx } from '@emotion/core';
import { pointer } from './pointer';

const AlphaSlider = CustomPicker(({ rgb, hsl, onChange }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 5px;
        width: 100%;
        & > div > div:nth-of-type(3){
          margin: 0px -3px 0 3px !important;
        }
        `}
    >
      <Alpha
        rgb={ rgb }
        hsl={ hsl }
        onChange={ onChange }
        pointer={ pointer }
      />
    </div>
  );
});

export default AlphaSlider;
