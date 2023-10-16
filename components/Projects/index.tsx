import React from 'react';
import useTranslation from '../../hooks/useTranslation';
import Project, { iProject } from "./components/Project";
import Footer from "./components/Footer";
import Lottie from 'react-lottie';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import {faSquareJs} from '@fortawesome/free-brands-svg-icons';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons';
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
      descriptionProject: t("descriptionProject001"),
      technologiesTitle: t("technologiesTitle"),
      seeMore:t("seeMore"),
      source: 'https://github.com/douglasslDev/louddi',
      deploy: 'https://portifolio-eight-blue.vercel.app/pt',
      color: 'blue',
      skill1:faReact,
      skill2:faNodeJs,
      skill3:faHtml5,
      skill4:faSquareJs,
      skill5:faNodeJs,
      skill6:faCss3,
      skill7:faGithub,

      
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title002"),
      descriptionProject: t("descriptionProject002"),
      technologiesTitle: t("technologiesTitle"),
      seeMore:t("seeMore"),
      source: 'https://github.com/douglasslDev/Portifolio',
      deploy: 'https://portifolio-eight-blue.vercel.app/pt',
      color: 'blue',
      skill1:faReact,
      skill2:faNodeJs,
      skill3:faHtml5,
      skill4:faSquareJs,
      skill5:faNodeJs,
      skill6:faCss3,
      skill7:faGithub,
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

