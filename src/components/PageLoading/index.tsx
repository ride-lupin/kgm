"use client";

import Lottie from "react-lottie-player";

import loadingAnimation from "@assets/lottie/loadingLottie.json";

import useIsMobile from "@hooks/useIsMobile";

import { containerRecipe } from "./style.css";

const PageLoading = () => {
  const { isMobile } = useIsMobile();

  const containerStyle = containerRecipe({ isMobile });

  return (
    <div className={containerStyle}>
      <Lottie
        loop
        play
        animationData={loadingAnimation}
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default PageLoading;
