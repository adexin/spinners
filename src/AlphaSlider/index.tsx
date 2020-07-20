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
        left: 3px;

        & > div > div {
          border-radius: 5px;
        }

        & > div > div:nth-of-type(3){
          margin: 0 1px 0 0 !important;
        }
      `}
    >
      <Alpha
        rgb={rgb}
        hsl={hsl}
        onChange={onChange}
        pointer={pointer}
      />
    </div>
  );
});

export default AlphaSlider;
