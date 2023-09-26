import useTranslation from "../../hooks/useTranslation";

import Project from "./components/Project";
import Footer from "./components/Footer";

import {Content, ProjectContainer} from "./styles";

const Projects = () => {
  const {locale, t} = useTranslation();
  return (
    <Content>
      <ProjectContainer>
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
     </ProjectContainer>
      <Footer />
    </Content>
  );
};
export default Projects;
