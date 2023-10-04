import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import {
    faChevronRight,
    faChevronLeft
  } from "@fortawesome/free-solid-svg-icons";
  
import {
    Content,
    CarouselContainerSection,
    CardContainer,
    CardReflection,
    Buttons,
    TitleContainer,
    DescriptionContainer,
    ButtonFontAwesomeIcon
  } 
  from "./styles";
import { Height } from "@mui/icons-material";
import { Button } from "primereact/button";

  interface CarouselProps {
    data: {
      id: number;
      icon: IconDefinition;
      bgColor: string;
      title: string; 
      desc: string; 
    }[];
    activeSlide: number;
  }
  
  interface SliderContentProps {
    icon: IconDefinition;
      title: string;
      desc: string;
      }

const Carousel: React.FC<CarouselProps> = (props) => {
  const [activeSlide, setActiveSlide] = useState(props.activeSlide) 

  const next = () =>{
    if(activeSlide < props.data.length - 1) 
    setActiveSlide(activeSlide + 1)
  };

  const prev = () => activeSlide > 0 && setActiveSlide(activeSlide - 1);


  const getStyles = (index:number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <CarouselContainerSection>  
     <Content >
     
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
          
            <CardContainer  
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}30`,
                ...getStyles(i)
                 
              }}
            >           
            
              <SliderContent {...item} />
             
            </CardContainer>
            <CardReflection
              
              style={{
                background: `linear-gradient(to bottom,#0003, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </Content>
      <Buttons >
       
        <ButtonFontAwesomeIcon
className="btn btn-white btn-				 animate"    
      style={{cursor:'pointer', marginRight:35,}}
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="3x"
        />
        <ButtonFontAwesomeIcon
          className="btn"
          onClick={next}
          style={{cursor:'pointer',}}
          icon={faChevronRight}
          color="#fff"
          size="3x"
        />
      </Buttons>
    </CarouselContainerSection>
  );
};

const SliderContent = (props:SliderContentProps) => {
    return (
    <CardContainer>
 <FontAwesomeIcon icon={props.icon} style={{fontSize: '80px', color:'white' }} /> 
     <TitleContainer>{props.title}</TitleContainer>
      <DescriptionContainer>{props.desc}</DescriptionContainer>
    </CardContainer>
  );
};

export default Carousel

