import { ReactNode, useCallback, useEffect, useState, VFC } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";

import { TextWhite } from "../../atoms/Text/White";
import { IconButtonWhite } from "../IconButton/White";
import { LabelTextWhite } from "../LabelText/White";
import styles from "./Modal.module.scss";

export type Props = {
  children: ReactNode;
  isVisible: boolean;
  maxWidth?: number;
  onRequestClose?: () => void;
};

export const Presenter: VFC<Props> = ({ children, isVisible, maxWidth = 400, onRequestClose, ...props }) => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
  }, [visible]);

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
      event.preventDefault();
      setVisible(false);
      onRequestClose && onRequestClose();
      return false;
    }

    return true;
  }, []);

  return (
    <>
      <CSSTransition
        unmountOnExit
        classNames={{
          enter: styles.ModalEnter,
          enterActive: styles.ModalEnterActive,
          exit: styles.ModalExit,
          exitActive: styles.ModalExitActive,
        }}
        in={visible}
        timeout={400}
      >
        <div
          className="bg-overlay fixed top-0 left-0 z-10 w-full h-full p-4 cursor-pointer"
          onClick={() => {
            setVisible(false);
            onRequestClose && onRequestClose();
          }}
          {...props}
        >
          <div className="flex items-center">
            <LabelTextWhite>ESC</LabelTextWhite>
            <TextWhite className="ml-1" size={"sm"} weight={"bold"}>
              {t("を押して閉じる")}
            </TextWhite>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        unmountOnExit
        classNames={{
          appear: styles.ModalInnerAppear,
          enter: styles.ModalInnerEnter,
          enterActive: styles.ModalInnerEnterActive,
          enterDone: styles.ModalInnerEnterDone,
          exit: styles.ModalInnerExit,
          exitActive: styles.ModalInnerExitActive,
        }}
        in={visible}
        timeout={{ enter: 400, exit: 400 }}
      >
        <div
          className={`fixed top-1/2 left-1/2 z-20 w-full p-8 bg-white rounded-lg cursor-auto shadow-xl`}
          style={{ maxWidth }}
        >
          <div>{children}</div>
          <IconButtonWhite
            className="-right-5 -top-5 absolute"
            iconName={"FiX"}
            onClick={() => {
              setVisible(false);
              onRequestClose && onRequestClose();
            }}
            radius={true}
          />
        </div>
      </CSSTransition>
    </>
  );
};
