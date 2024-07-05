import { ReactNode } from "react";

type ReactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  size: ModalSizeType;
};

type ModalSizeType = "xs" | "sm" | "md" | "lg" | "xl";

type ModalBasicType = {
  title: string;
  content: React.ReactNode;
};

type ModalFooterType = {
  onOk?: (() => void) | (() => Promise<void>);
  okText?: string;
  cancelText?: string;
  leftFooterContent?: ReactNode;
};

type AlertProps = {
  title: string;
  desc?: string;
  okButtonColor?: "primary" | "red";
  showCancel?: boolean;
} & Pick<ReactModalProps, "isOpen" | "onClose"> &
  ModalFooterType;

export type {
  ReactModalProps,
  ModalSizeType,
  ModalBasicType,
  ModalFooterType,
  AlertProps,
};
