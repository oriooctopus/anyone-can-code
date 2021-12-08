import { createIcon } from '@chakra-ui/react';

const Icon = createIcon({
  displayName: 'MenuIcon',
  path: (
    <svg viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1.5V0H0V1.5H10ZM10 4.5V3H0V4.5H10ZM10 7.5V6H0V7.5H10Z"
        fill="#E5E5E5"
      />
    </svg>
  ),
});

export default Icon;
