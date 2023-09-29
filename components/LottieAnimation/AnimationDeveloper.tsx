import React from 'react';
import AnimationDeveloper from '../../public/AnimationDeveloper.json'; // Substitua pelo caminho correto para o seu arquivo JSON
import Lottie from "react-lottie";

const LottieAnimation = () => {

const defaultOptions={
    loop: true,
    autoplay:true,
    animationData:AnimationDeveloper,
}

  return (
    <div>
      <Lottie options={defaultOptions}   />
    </div>
  );
};

export default LottieAnimation;