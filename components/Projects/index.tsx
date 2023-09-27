import React from 'react';
import useTranslation from "../../hooks/useTranslation";
import Project, { iProject } from "./components/Project";
import Footer from "./components/Footer";
import { Content, ProjectsContainerSection, ProjectsContainer, ProjectsSection, ProjectsContainerTitle } from "./styles";
import TechnologiesAnsFrams from "../technologiesAndFrams";



const Projects = () => {
  const { locale, t } = useTranslation();

  const projectsTemplate: iProject[] = [
   
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title001"),
      description: t("description001"),
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title001"),
      description: t("description001"),
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: t("title001"),
      description: t("description001"),
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
  ];

  return (
    <Content>
      <TechnologiesAnsFrams />
      <ProjectsContainerSection>
        <ProjectsContainerTitle>{t("titleProjects")}</ProjectsContainerTitle>
      <ProjectsSection>
        
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

  {/* <Project
        role="Front-end"
        color="gray"
        img="/img/mockupLouddi.png"
        type="desktop"
        title={t("title001")}
        description={t("description001")}
        source=""
        deploy="https://louddi-git-main-douglassldev.vercel.app/"
      />

      <Project
        role="Front-end"
      
        color="gray"
        img="/img/mockupLouddi.png"
        type="desktop"
        title={t("title001")}
        description={t("description001")}
        source=""
        deploy="https://louddi-git-main-douglassldev.vercel.app/"
      />

       <Project
        role="Front-end"
        color="gray"
        img="/img/mockupLouddi.png"
        type="desktop"
        title={t("title001")}
        description={t("description001")}
        source=""
        deploy="https://louddi-git-main-douglassldev.vercel.app/"
      />

      <Project
        role="Front-end"
        color="gray"
        img="/img/mockupLouddi.png"
        type="desktop"
        title={t("title001")}
        description={t("description001")}
        source=""
        deploy="https://louddi-git-main-douglassldev.vercel.app/"
      /> */}
