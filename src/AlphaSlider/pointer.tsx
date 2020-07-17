/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const pointer = () => {
  return (
    <div
    css={css`{
          background: #fff;
          width: 57px !important;
          height: 22px !important;
          border-radius: 12px !important;
          margin-top: -10px;
          margin-left: -28px;
        }
      `}
    />
  )
}

export default pointer
