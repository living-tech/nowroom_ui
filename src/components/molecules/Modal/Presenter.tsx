import { useWindowWidth } from "@react-hook/window-size";
import { ReactNode, useCallback, useEffect, useRef, useState, VFC } from "react";
import { CSSTransition } from "react-transition-group";

import { useBreakPoints } from "../../../utils";
import { SpinnerPurple as Spinner } from "../../atoms/Spinner/Purple";
import { TextWhite } from "../../atoms/Text/White";
import { IconButtonWhite } from "../IconButton/White";
import { LabelTextWhite } from "../LabelText/White";
import styles from "./Modal.module.scss";

export type CloseButtonPosition = "top" | "bottom";

export type Props = {
  children: ReactNode;
  closeButtonPosition?: CloseButtonPosition;
  escLabel?: string;
  isVisible: boolean;
  loading?: boolean;
  maxWidth?: number;
  onRequestClose?: () => void;
  paddingHorizontal?: boolean;
  renderFixedBottom?: () => JSX.Element;
};

export const Presenter: VFC<Props> = ({
  children,
  closeButtonPosition = "top",
  escLabel = "を押して閉じる",
  isVisible,
  loading,
  maxWidth = 400,
  onRequestClose,
  paddingHorizontal = true,
  renderFixedBottom,
  ...props
}) => {
  const { isDesktop, isMobile } = useBreakPoints();
  const windowWidth = useWindowWidth();

  const [visible, setVisible] = useState<boolean>(false);
  const [fixedBottomHeight, setFixedBottomHeight] = useState<number>(0);

  const fixedBottomRef = useRef<HTMLDivElement>(null);

  let paddingHorizontalClass = "";
  if (paddingHorizontal) {
    paddingHorizontalClass = "px-4 md:px-8";
  }

  let modalSizeClass = "w-full rounded";
  if (windowWidth <= maxWidth) {
    modalSizeClass = "w-full h-full md:h-auto";
  }

  const handleKeydown = useCallback((event: KeyboardEvent) => {
    if (!isDesktop) {
      return true;
    }

    if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
      event.preventDefault();
      setVisible(false);
      onRequestClose && onRequestClose();
      return false;
    }

    return true;
  }, []);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeydown);
      // backfaceFixed(true);
    } else {
      window.removeEventListener("keydown", handleKeydown);
      // backfaceFixed(false);
    }
    if (!fixedBottomRef?.current) {
      return;
    }
    setFixedBottomHeight(fixedBottomRef.current.clientHeight);
  }, [visible]);

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
          {!isMobile && (
            <div className="flex items-center">
              <LabelTextWhite>ESC</LabelTextWhite>
              <TextWhite className="ml-1" size={"sm"} weight={"bold"}>
                {escLabel}
              </TextWhite>
            </div>
          )}
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
          className={`transition-all ease-out duration-200 fixed z-50 top-1/2 left-1/2 ${modalSizeClass}`}
          style={{ maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)", maxWidth }}
        >
          <div
            className={`transition-all ease-out duration-200 py-10 md:py-8 bg-white md:rounded-lg cursor-auto shadow-xl overflow-y-auto ${modalSizeClass} ${paddingHorizontalClass}`}
            style={{
              maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)",
              maxWidth,
              paddingBottom: fixedBottomHeight + (isMobile ? 40 : 32) + (closeButtonPosition === "bottom" ? 62 : 0),
            }}
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
                className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gray-100 border-t border-gray-200 md:px-8 md:py-4 md:rounded-b-lg"
              >
                {renderFixedBottom()}
              </div>
            )}
            <IconButtonWhite
              className="right-4 md:-right-5 md:-top-5"
              iconName={"FiX"}
              onClick={() => {
                setVisible(false);
                onRequestClose && onRequestClose();
              }}
              radius={true}
              shadow={false}
              style={
                isMobile
                  ? {
                      bottom: closeButtonPosition === "bottom" ? fixedBottomHeight + 16 : undefined,
                      position: "absolute",
                      top: closeButtonPosition === "top" ? 16 : undefined,
                    }
                  : { position: "absolute" }
              }
            />
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
