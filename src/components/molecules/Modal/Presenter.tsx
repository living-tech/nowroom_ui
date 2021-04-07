import { ReactNode, useCallback, useEffect, useRef, useState, VFC } from "react";
import { CSSTransition } from "react-transition-group";

import { SpinnerPurple as Spinner } from "../../atoms/Spinner/Purple";
import { TextWhite } from "../../atoms/Text/White";
import { IconButtonWhite } from "../IconButton/White";
import { LabelTextWhite } from "../LabelText/White";
import styles from "./Modal.module.scss";

export type Props = {
  children: ReactNode;
  escLabel?: string;
  isVisible: boolean;
  loading?: boolean;
  maxWidth?: number;
  onRequestClose?: () => void;
  renderFixedBottom?: () => JSX.Element;
};

export const Presenter: VFC<Props> = ({
  children,
  escLabel = "を押して閉じる",
  isVisible,
  loading,
  maxWidth = 400,
  onRequestClose,
  renderFixedBottom,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [fixedBottomHeight, setFixedBottomHeight] = useState<number>(0);

  const fixedBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeydown);
    } else {
      window.removeEventListener("keydown", handleKeydown);
    }
    if (!fixedBottomRef?.current) {
      return;
    }
    setFixedBottomHeight(fixedBottomRef.current.clientHeight);
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
          className="fixed top-0 left-0 z-40 w-full h-full p-4 cursor-pointer bg-overlay"
          onClick={() => {
            setVisible(false);
            onRequestClose && onRequestClose();
          }}
          {...props}
        >
          <div className="flex items-center">
            <LabelTextWhite>ESC</LabelTextWhite>
            <TextWhite className="ml-1" size={"sm"} weight={"bold"}>
              {escLabel}
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
        <div className="fixed z-50 w-full top-1/2 left-1/2" style={{ maxHeight: "calc(100vh - 128px)", maxWidth }}>
          <div
            className={`p-8 bg-white rounded-lg cursor-auto shadow-xl overflow-y-auto`}
            style={{ maxHeight: "calc(100vh - 128px)", maxWidth, paddingBottom: fixedBottomHeight + 32 }}
          >
            {loading ? (
              <span className="absolute flex top-1/2 transform -translate-y-1/2">
                <Spinner />
              </span>
            ) : (
              <div>{children}</div>
            )}
            {renderFixedBottom && (
              <div
                ref={fixedBottomRef}
                className="absolute bottom-0 left-0 w-full px-8 py-4 bg-gray-100 border-t border-gray-200 rounded-b-lg"
              >
                {renderFixedBottom()}
              </div>
            )}
            <IconButtonWhite
              className="absolute -right-5 -top-5"
              iconName={"FiX"}
              onClick={() => {
                setVisible(false);
                onRequestClose && onRequestClose();
              }}
              radius={true}
            />
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
