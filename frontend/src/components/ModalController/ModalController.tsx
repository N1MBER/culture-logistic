import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconClose } from '@consta/uikit/IconClose';
import { useFlag } from '@consta/uikit/useFlag';
import { Tooltip } from '@consta/uikit/Tooltip';
import { RootState } from '../../store/reducers';
import { BaseModal } from '../../common/BaseModal/BaseModal';
import { cn } from '../../__private__/utils/bem';
import {
  clearModalStack,
  removeModalData,
} from '../../store/reducers/settingsReducer';

import './ModalController.scss';
import { ModalData } from '../../types/setings';

const cnModalController = cn('ModalController');

export const ModalController: React.FC = () => {
  const [isTooltipVisible, { on, off }] = useFlag(false);
  const [activeModal, setActiveModal] = useState<ModalData | undefined>();

  const { modalStack } = useSelector((store: RootState) => store.settings);

  const dispatch = useDispatch();

  const anchorRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setActiveModal(
      modalStack.length > 0 ? modalStack[modalStack.length - 1] : undefined
    );
  }, [modalStack.length]);

  return (
    <>
      {activeModal ? (
        <div className={cnModalController()}>
          {modalStack.length > 1 && (
            <>
              <button
                className={cnModalController('Button')}
                type="button"
                ref={anchorRef}
                onMouseEnter={on}
                onMouseLeave={off}
                onClick={() => dispatch(clearModalStack())}
              >
                <IconClose size="s" />
              </button>
              {isTooltipVisible && (
                <Tooltip
                  direction="leftCenter"
                  className={cnModalController('Tooltip')}
                  size="m"
                  anchorRef={anchorRef}
                >
                  Закрыть все окна
                </Tooltip>
              )}
            </>
          )}
          <BaseModal
            isOpen
            setIsOpen={() => dispatch(removeModalData(activeModal.key))}
            {...activeModal}
          />
        </div>
      ) : undefined}
    </>
  );
};
