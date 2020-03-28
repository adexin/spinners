import useScript from 'hooks/useScript';

import {
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerInfinity,
  SpinnerDotted,
  SpinnerRound,
  SpinnerRoundOutlined,
  SpinnerRoundFilled,
  SpinnerRomb,
} from 'spinners-react';

export const name = 'Angular';

export const colors = {
  bg: '#f2f5f8',
  secondaryBg: '#e0e6ec',
  secondaryBgVariant: '#e9edf1',
  text: '#333',
  primary: '#dd0031',
  slider: {
    track: '#8d949a',
  },
  spinners: {
    bg: '#dde3ea',
    grid: '#f3f5f6',
    border: '#fff',
  },
}

export const styles = {
  tabs: [
    `color: #434343;`,
    `
      color: ${colors.bg};
      .angular0 { fill: ${colors.primary}; }
    `,
  ],
}

// export const spinners = {
//   'sa-spinner-circular': 'sa-spinner-circular',
//   'sa-spinner-circular-fixed': 'sa-spinner-circular-fixed',
//   'sa-spinner-circular-split': 'sa-spinner-circular-split',
//   'sa-spinner-round': 'sa-spinner-round',
//   'sa-spinner-round-outlined': 'sa-spinner-round-outlined',
//   'sa-spinner-round-filled': 'sa-spinner-round-filled',
//   'sa-spinner-dotted': 'sa-spinner-dotted',
//   'sa-spinner-infinity': 'sa-spinner-infinity',
//   'sa-spinner-romb': 'sa-spinner-romb',
// };

export const spinners = {
  'sa-spinner-circular': SpinnerCircular,
  'sa-spinner-circular-fixed': SpinnerCircularFixed,
  'sa-spinner-circular-split': SpinnerCircularSplit,
  'sa-spinner-round': SpinnerRound,
  'sa-spinner-round-outlined': SpinnerRoundOutlined,
  'sa-spinner-round-filled': SpinnerRoundFilled,
  'sa-spinner-dotted': SpinnerDotted,
  'sa-spinner-infinity': SpinnerInfinity,
  'sa-spinner-diamond': SpinnerRomb,
};

export const Scripts = () => {
  [
    // 'https://unpkg.com/spinners-angular/elements/runtime-es5.js',
    // 'https://unpkg.com/spinners-angular/elements/polyfills-es5.js',
    // 'https://unpkg.com/spinners-angular/elements/main-es5.js',
    'http://localhost:4000/assets/runtime-es5.js',
    'http://localhost:4000/assets/polyfills-es5.js',
    'http://localhost:4000/assets/main-es5.js',
  ].map(useScript);

  return null;
}

