"use client";

import Link from "next/link";

import useIsMobile from "@hooks/useIsMobile";

import paths from "@constants/paths";

import { Arrow } from "@assets/icons";

import Typo from "@components/Typo";

import { buttonRecipe, iconStyle } from "./style.css";

const FloatingButton = () => {
  const { isMobile } = useIsMobile();
  const buttonStyle = buttonRecipe({ isMobile });

  return (
    <Link href={paths.reservation} className={buttonStyle}>
      <Typo variants="h7" fontWeight="bold">
        시승 예약하기
      </Typo>
      <div className={iconStyle}>
        <Arrow />
      </div>
    </Link>
  );
};

export default FloatingButton;
