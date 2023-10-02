import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import Project, { iProject } from "./components/Project";
import Footer from "./components/Footer";
import Lottie from 'react-lottie'
import {
  Content, 
  ProjectsContainerSection, 
  ProjectsContainer, 
  ProjectsSection, 
  ProjectsContainerTitle, 
  TitleTecAndFrams, 
  TechnologiesAnsFramsSection,
  LineHorizontal,
} 

from "./styles";

import Carousel from '../Slider';
import data1 from '../Slider/data1';
const Projects = () => {
  const { locale, t } = useTranslation();

  const projectsTemplate: iProject[] = [
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title001"),
      description: t("description001"),
      source: 'https://github.com/douglasslDev/louddi',
      deploy: 'https://portifolio-eight-blue.vercel.app/pt',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title002"),
      description: t("description002"),
      source: 'https://github.com/douglasslDev/Portifolio',
      deploy: 'https://portifolio-eight-blue.vercel.app/pt',
      color: 'blue',
    },
    
  ];

  return (
    <Content id="TecAndFrams">
            <LineHorizontal/>

      <TitleTecAndFrams className="animate__animated animate__backInUp">
      {t("TitleTechnologiesAndFrams")}
</TitleTecAndFrams>
<TechnologiesAnsFramsSection sx={{ flexWrap: 'wrap' }}>
<Carousel data={data1} activeSlide={4}/>
</TechnologiesAnsFramsSection>  
<LineHorizontal/>

      <ProjectsContainerSection>
        <ProjectsContainerTitle className="animate__animated animate__backInUp">
          {t("titleProjects")}
        </ProjectsContainerTitle>
      <ProjectsSection sx={{ flexWrap: 'wrap' }}> 
{ projectsTemplate.map((project, index) => (
      <ProjectsContainer key={index}>
        <Project {...project} />
      </ProjectsContainer>
    ))}
      </ProjectsSection>
      </ProjectsContainerSection>
    </Content>
  );
};

export default Projects;

