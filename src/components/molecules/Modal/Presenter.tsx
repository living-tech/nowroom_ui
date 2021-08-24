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
  disabledClose?: boolean;
  escLabel?: string;
  isVisible: boolean;
  loading?: boolean;
  maxWidth?: number;
  onRequestClose?: () => void;
  paddingHorizontal?: boolean;
  paddingVertical?: boolean;
  renderFixedBottom?: () => JSX.Element;
  zIndex?: number;
};

export const Presenter: VFC<Props> = ({
  children,
  closeButtonPosition = "top",
  disabledClose = false,
  escLabel = "を押して閉じる",
  isVisible,
  loading,
  maxWidth = 400,
  onRequestClose,
  paddingHorizontal = true,
  paddingVertical = true,
  renderFixedBottom,
  zIndex = 50,
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

  let paddingVerticalClass = "";
  if (paddingVertical) {
    paddingVerticalClass = "py-10 md:py-8";
  }

  let modalSizeClass = "w-full rounded";
  if (windowWidth <= maxWidth) {
    modalSizeClass = "w-full h-full md:h-auto";
  }

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (!isDesktop) {
        return true;
      }

      if (event.key == "Escape" || event.key == "Esc" || event.keyCode == 27) {
        event.preventDefault();
        if (disabledClose) {
          return false;
        }
        setVisible(false);
        onRequestClose && onRequestClose();
        return false;
      }
      return true;
    },
    [disabledClose]
  );

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
  }, [visible, fixedBottomRef]);

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
          className={`fixed top-0 left-0 w-full h-full p-4 bg-overlay ${disabledClose ? "" : "cursor-pointer"}`}
          onClick={() => {
            if (disabledClose) {
              return;
            }
            setVisible(false);
            onRequestClose && onRequestClose();
          }}
          style={{ zIndex }}
          {...props}
        >
          {!isMobile && !disabledClose && (
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
          className={`fixed top-1/2 left-1/2 ${modalSizeClass}`}
          style={{
            maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)",
            maxWidth,
            minHeight: loading ? 200 : undefined,
            zIndex: zIndex + 1,
          }}
        >
          <div
            className={`transition-all ease-out duration-200 bg-white md:rounded-lg cursor-auto shadow-xl overflow-y-auto ${modalSizeClass} ${paddingHorizontalClass} ${paddingVerticalClass}`}
            style={{
              maxHeight: isMobile && windowWidth <= maxWidth ? undefined : "calc(100vh - 128px)",
              maxWidth,
              minHeight: loading ? 200 : undefined,
              paddingBottom: paddingVertical
                ? fixedBottomHeight + (isMobile ? 40 : 32) + (closeButtonPosition === "bottom" ? 62 : 0)
                : 0,
            }}
          >
            {loading ? (
              <span className="absolute flex top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <Spinner />
              </span>
            ) : (
              <div>{children}</div>
            )}
            {renderFixedBottom && !loading && (
              <div
                ref={fixedBottomRef}
                className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gray-100 border-t border-gray-200 md:px-8 md:py-4 md:rounded-b-lg"
              >
                {renderFixedBottom()}
              </div>
            )}
            {!disabledClose && (
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
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
