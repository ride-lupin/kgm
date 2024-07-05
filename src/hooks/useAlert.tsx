import { useOverlay } from "@toss/use-overlay";

import { Alert, AlertProps } from "@components/Modal";

type AlertParams = Pick<
  AlertProps,
  | "title"
  | "desc"
  | "cancelText"
  | "okText"
  | "okButtonColor"
  | "onOk"
  | "showCancel"
>;

const useAlert = () => {
  const overlay = useOverlay();

  const openAsyncAlert = ({ onOk, ...rest }: AlertParams) => {
    return new Promise<boolean>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <Alert
          {...rest}
          isOpen={isOpen}
          onClose={() => {
            resolve(false);
            close();
          }}
          onOk={async () => {
            resolve(false);
            onOk?.();
          }}
        />
      ));
    });
  };

  const openAlert = ({ ...rest }: AlertParams) => {
    overlay.open(({ isOpen, close }) => (
      <Alert isOpen={isOpen} onClose={close} {...rest} />
    ));
  };

  return {
    openAsyncAlert,
    openAlert,
  };
};

export default useAlert;
