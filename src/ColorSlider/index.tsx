/** @jsx jsx */
import { CustomPicker } from 'react-color';
import { Hue } from 'react-color/lib/components/common';
import { css, jsx } from '@emotion/core';

const ColorSlider = CustomPicker(({ hsl, onChange }) => {
  return (
    <div
      css={css`
        position: relative;
        height: 5px;
        width: 100%;        

        & .hue-horizontal {
          border-radius: 5px;
          padding: 0 !important;
          margin: 0px -2px 0 3px !important;
        }

        & .hue-horizontal > div {
          background: #fff;
          width: 57px !important;
          height: 22px !important;
          border-radius: 12px !important;
          margin-top: -10px;
          margin-left: -28px;
        }
      `}
    >
      <Hue
        hsl={hsl}
        onChange={onChange}
        pointer={() => null} // custom pointer not working on mobile devices
      />
    </div>
  );
});

export default ColorSlider;
