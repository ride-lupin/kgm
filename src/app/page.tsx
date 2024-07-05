"use client";

import { useState } from "react";

import CheckListBox from "@components/CheckListBox";

export default function Home() {
  const [state, setState] = useState("");

  return (
    <>
      <CheckListBox
        label="무신사는 왜 PC 버전 서비스를 종료했을까?"
        value="musinsa1"
        isChecked={state === "musinsa1"}
        onChange={setState}
      />
      <CheckListBox
        label="무신사는 왜 PC 버전 서비스를 종료했을까?"
        value="musinsa2"
        isChecked={state === "musinsa2"}
        onChange={setState}
      />
    </>
  );
}
