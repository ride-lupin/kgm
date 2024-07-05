import React, { useState } from "react";

import Button from "@components/Button";
import Flex from "@components/Layout/Flex";
import Typo from "@components/Typo";

import ReactModal from "./ReactModal";
import { AlertProps } from "../types";

const Alert = ({
  isOpen = false,
  onOk,
  onClose,
  title,
  desc,
  okText = "확인",
  cancelText = "닫기",
  okButtonColor = "primary",
  showCancel = true,
}: AlertProps) => {
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    if (!onOk) {
      onClose();
      return;
    }

    setLoading(true);
    try {
      await onOk();
    } catch (error: any) {
      console.error("Error occurred:", error);
    } finally {
      setLoading(false);
      onClose();
    }
  };

  const handleClose = () => !loading && onClose();

  return (
    <ReactModal isOpen={isOpen} onClose={handleClose} size="xs">
      <div style={{ padding: "2.4rem" }}>
        <Flex vertical gap={8} style={{ paddingBottom: "3.2rem" }}>
          <Typo variants="h3" fontWeight="bold">
            {title}
          </Typo>
          {desc && (
            <Typo
              variants="b6"
              color="gray700"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {desc}
            </Typo>
          )}
        </Flex>
        <Flex gap={8} justify="flex-end">
          {showCancel && (
            <Button variants="lightSolid" color="gray" onClick={handleClose}>
              {cancelText}
            </Button>
          )}
          <Button onClick={handleOk} color={okButtonColor} loading={loading}>
            {okText}
          </Button>
        </Flex>
      </div>
    </ReactModal>
  );
};

export default Alert;
