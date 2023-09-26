import useTranslation from "../../../../hooks/useTranslation";
import { Button } from "primereact/button";                         
import {
  Content,
  TopInfo,
  RoleInfo,
  MockUp,
  ProjectFooter,
  MockUpContainer,
  Presentation,
  IconsContainer,
  Icon,
} from "./styles";

interface iProject {
  role: string;
  color: string;
  img: string;
  type: "mobile" | "desktop";
  title: string;
  description: string;
  source: string;
  deploy: string;
}

const Project = ({
  role,
  img,
  type,
  title,
  description,
  source,
  deploy,
}: iProject) => {
  const {t} = useTranslation();
  return (
    <Content >
      <TopInfo>
        <RoleInfo>{role}</RoleInfo>
      </TopInfo>
      <MockUpContainer>
        <MockUp src={img} type={type} alt={t("projectImage")} />
      </MockUpContainer>
      <ProjectFooter>
        <Presentation>
          <span>{title}</span>
          <strong>{description}</strong>
        </Presentation>
        <IconsContainer>
          <Icon
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            title="Source"
            className="fab fa-github-square fa-2x"
          />
          <Icon
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
            title="Deploy"
            className="fas fa-satellite-dish fa-2x"
          />
        </IconsContainer>
      

      </ProjectFooter>
      <Button label="Info" severity="secondary" rounded />   
       </Content>

  );
};
export default Project;
