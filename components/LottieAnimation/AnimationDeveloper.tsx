import React from 'react';
import AnimationDeveloper from '../../public/AnimationDeveloper.json'; // Substitua pelo caminho correto para o seu arquivo JSON
import Lottie from "react-lottie";
import { Content,LottieContainer } from './styles';
const LottieAnimation = () => {

const defaultOptions={
    loop: true,
    autoplay:true,
    animationData:AnimationDeveloper,
}

  return (
    <Content>
      <LottieContainer options={defaultOptions}    />
    </Content>
  );
};

export default LottieAnimation;