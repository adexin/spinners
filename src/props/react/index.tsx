import {
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerDiamond,
  SpinnerDotted,
  SpinnerInfinity,
  SpinnerRound,
  SpinnerRoundFilled,
  SpinnerRoundOutlined,
} from 'spinners-react';

export const name = 'React';

export const colors = {
  bg: '#383838',
  secondaryBg: '#282828',
  secondaryBgVariant: '#282828',
  logoText: '#fff',
  text: '#fff',
  primary: '#36ad47',
  slider: {
    track: '#181818',
  },
  spinners: {
    bg: '#252525',
    grid: '#383838',
    gridHover: '#383838',
    border: '#9d9d9d',
    secondary: 'rgba(0, 0, 0, 0.44)',
  },
}

export const styles = {
  tabs: [
    `color: #61dafb;`,
    `
      color: ${colors.bg};
      .angular0 { fill: #686868; }
    `,
  ],
  slider: {
    legend: {
      opacity: '0.25',
    },
  },
}

export const spinners = {
  SpinnerCircular,
  SpinnerCircularFixed,
  SpinnerCircularSplit,
  SpinnerRound,
  SpinnerRoundOutlined,
  SpinnerRoundFilled,
  SpinnerDotted,
  SpinnerInfinity,
  SpinnerDiamond,
};

export const hrefs = {
  github: 'https://github.com/adexin/spinners-react'
};

export const Scripts = () => null;

export const usageCode = (spinner: string, size: number, thickness: number, speed: number, color: string, secondaryColor?: string) => (
  `<${spinner} size={${size}} thickness={${thickness}} speed={${speed}} color="${color}"${secondaryColor ? ` secondaryColor="${secondaryColor}"` : ''} />`
);
