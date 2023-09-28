import React from 'react';
import useTranslation from "../../hooks/useTranslation";
import Project, { iProject } from "./components/Project";
import Footer from "./components/Footer";
import TechnologiesAnsFrams from "../technologiesAndFrams";
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
  TechnologiesAnsFramsContainer,
  TechnologiesAnsFramsSection,
} 

from "./styles";

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

  const Data = [
    {
      label:'React',
      icon: faReact,
    },
    {
      label:'React Native',
      icon: faReact,
    },
    {
      label:'Css3',
      icon: faCss3,
    },
    {
      label:'Github',
      icon: faGithub,
    },
    {
      label:'HTML 5',
      icon: faHtml5,
    },
    {
      label:'JavaScript',
      icon: faSquareJs,
    },
    {
      label:'Node.Js',
      icon: faNodeJs,
    },
  ]

  return (
    <Content>
      <TitleTecAndFrams className="animate__animated animate__backInUp">
      {t("TitleTechnologiesAndFrams")}
</TitleTecAndFrams>

<TechnologiesAnsFramsSection sx={{ flexWrap: 'wrap' }}>
  
{Data.map((item, index)=>(
  <TechnologiesAnsFramsContainer key={index}> 
  <TechnologiesAnsFrams label={item.label} icon={item.icon} />
  </TechnologiesAnsFramsContainer>
))}

</TechnologiesAnsFramsSection>
      

      <ProjectsContainerSection>
        <ProjectsContainerTitle className="animate__animated animate__backInUp">
          {t("titleProjects")}
        </ProjectsContainerTitle>
      <ProjectsSection sx={{ flexWrap: 'wrap' }}> 
          {projectsTemplate.map((project, index) => (
            <ProjectsContainer key={index}>
              <Project {...project} />
            </ProjectsContainer>
          ))}
                </ProjectsSection>
      </ProjectsContainerSection>
      <Footer />
    </Content>
  );
};

export default Projects;

