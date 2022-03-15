import React from 'react';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { IconClose } from '@consta/uikit/IconClose';
import { cn } from '../../__private__/utils/bem';
import './BaseModal.scss';

type BaseModalProps = {
  isOpen?: boolean;
  setIsOpen?: (status: boolean) => void;
  title?: string;
  hasOverlay?: boolean;
  childern?: React.ReactNode;
};

const cnBaseModal = cn('BaseModal');

export const BaseModal = (props: BaseModalProps) => {
  const {
    title,
    isOpen = false,
    setIsOpen,
    hasOverlay = true,
    childern,
  } = props;

  return (
    <Modal
      className={cnBaseModal()}
      isOpen={isOpen}
      hasOverlay={hasOverlay}
      onClickOutside={() => setIsOpen?.(false)}
      onEsc={() => setIsOpen?.(false)}
    >
      {title && <Text size="2xl">{title}</Text>}
      <button
        type="button"
        className={cnBaseModal('Button')}
        onClick={() => setIsOpen?.(false)}
      >
        <IconClose size="s" />
      </button>
      <div className={cnBaseModal('Container')}>{childern}</div>
    </Modal>
  );
};
