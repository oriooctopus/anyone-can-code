import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Button: {
      baseStyle: {
        svg: {
          display: 'unset',
        },
        _focus: { boxShadow: 'none' },
      },
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fonts: {
    body: 'Roboto',
    heading: 'Roboto',
  },
  styles: {
    global: {
      body: {
        overflow: 'hidden',
      },
    },
  },
});
