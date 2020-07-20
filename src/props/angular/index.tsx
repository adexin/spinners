import useScript from 'hooks/useScript';

export const name = 'Angular';

export const colors = {
  bg: '#f2f5f8',
  secondaryBg: '#e0e6ec',
  secondaryBgVariant: '#e9edf1',
  logoText: '#333',
  text: '#2b2b2b',
  primary: '#dd0031',
  slider: {
    track: '#8d949a',
  },
  spinners: {
    bg: '#dde3ea',
    grid: '#f3f5f6',
    gridHover: '#f4f5f5',
    border: '#fff',
    secondary: 'rgba(24, 24, 24, 0.1)',
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
  slider: {
    legend: {
      opacity: '0.5',
    },
  },
}

export const spinners = [
  'sa-spinner-circular',
  'sa-spinner-circular-fixed',
  'sa-spinner-circular-split',
  'sa-spinner-round',
  'sa-spinner-round-outlined',
  'sa-spinner-round-filled',
  'sa-spinner-dotted',
  'sa-spinner-infinity',
  'sa-spinner-diamond',
].reduce((acc, name) => ({ ...acc, [name]: name }), {});

export const hrefs = {
  github: 'https://github.com/adexin/spinners-angular'
};

export const Scripts = () => {
  [
    'https://unpkg.com/spinners-angular@0.0.2/elements/runtime-es5.js',
    'https://unpkg.com/spinners-angular@0.0.2/elements/polyfills-es5.js',
    'https://unpkg.com/spinners-angular@0.0.2/elements/spinners-es5.js'
  ].map(useScript);

  return null;
}

export const usageCode = (spinner: string, size: number, thickness: number, speed: number, color: string, secondaryColor?: string) => (
  `<${spinner} [size]="${size}" [thickness]="${thickness}" [speed]="${speed}" color="${color}"${secondaryColor ? ` secondaryColor="${secondaryColor}"` : ''} ></${spinner}>`
);
