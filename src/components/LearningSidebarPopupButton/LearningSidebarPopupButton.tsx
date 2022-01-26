import { Box, Tooltip, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { cloneElement, useRef } from 'react';

interface ILearningSidebarPopupButtonProps {
  children: JSX.Element;
  popupContent: React.ReactNode;
  popoverWidth?: number | string;
  buttonTooltip: string;
}

export const LearningSidebarPopupButton = ({
  children,
  popupContent,
  popoverWidth,
  buttonTooltip,
}: ILearningSidebarPopupButtonProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const ref = useRef(null);
  useOutsideClick({
    ref,
    handler: onClose,
  });

  return (
    <Box ref={ref} position="relative" width="100%">
      {isOpen && (
        <Box
          bgColor="white"
          color="black"
          boxShadow="-7px 13px 18px 0px rgb(0 0 0 / 45%)"
          position="absolute"
          transform="translateX(calc(-100% - 5px))"
          bottom={0}
          backgroundColor="white"
          borderRadius="20px"
          width={popoverWidth || '250px'}
        >
          {popupContent}
        </Box>
      )}
      <Tooltip label={buttonTooltip}>
        {cloneElement(children, {
          onClick: onToggle,
        })}
      </Tooltip>
    </Box>
  );
};
