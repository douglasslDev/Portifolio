import useTranslation from "../../hooks/useTranslation";

import Project, { iProject } from "./components/Project";
import Footer from "./components/Footer";
import { Carousel } from "primereact/carousel";
import {Content,CarouselContainer} from "./styles";
import Skills from "../Skills";

interface CarouselItem {
  project: iProject; // 
}

const Projects = () => {
  const {locale, t} = useTranslation();

  const projectsTemplate: iProject[] = [
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
    {
      role: 'Front-end',
      img: '/img/mockupLouddi.png',
      type: 'desktop',
      title: 'Projeto 1',
      description: 'Descrição do Projeto 1',
      source: 'https://louddi-git-main-douglassldev.vercel.app/',
      deploy: 'https://deploy.projeto1.com',
      color: 'blue',
    },
  ];

  const responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];


  const items: CarouselItem[] = projectsTemplate.map((project) => ({
    project,
  }));

  const itemTemplate = ({ project }: CarouselItem) => {
    return (
   
        <Project {...project} />
      
    );
  };

  return (
    <Content>
      <Skills/>
      <CarouselContainer>
      <Carousel
          value={items}
          itemTemplate={itemTemplate}
          numVisible={3}
          numScroll={1} 
           responsiveOptions={responsiveOptions}
          pt={{
            indicatorButton: { className: 'border-round-lg' }
        }}
      />
      </CarouselContainer>
     
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
