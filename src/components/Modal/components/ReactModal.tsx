import { PropsWithChildren } from "react";
import Modal from "react-modal";

import usePreventScroll from "@hooks/usePreventScroll";

import { ReactModalProps } from "../types";

const widthBySize = {
  xs: "42rem",
  sm: "48rem",
  md: "64rem",
  lg: "84rem",
  xl: "120rem",
};

const ReactModal = ({
  isOpen = false,
  onClose,
  size,
  children,
}: PropsWithChildren<ReactModalProps>) => {
  usePreventScroll({ isOpen });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnEsc={false}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(34, 39, 41, 0.40)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        },
        content: {
          position: "relative",
          maxHeight: "calc(100vh - 40px)",
          borderRadius: 20,
          border: "none",
          padding: 0,
          width: widthBySize[size],
          inset: 0,
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default ReactModal;
