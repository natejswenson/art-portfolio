import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}

export const theme = {
  colors: {
    primary: '#2D3047',
    secondary: '#93B7BE',
    accent: '#E0A458',
    background: '#FFFFFF',
    text: '#2D3047',
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Playfair Display', serif",
  },
}; 