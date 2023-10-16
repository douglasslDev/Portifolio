import useTranslation from "../../../../hooks/useTranslation";
import { Button } from "primereact/button";     
import Modal from '@mui/material/Modal';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Typography } from "@mui/material";
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
  ModalContainer,
  MontalContent,
  ModalContainerTitle,
  ModalContainerDescription,
  ModalCard,

} from "./styles";

export interface iProject {
  role: string;
  color: string;
  img: string;
  type: "mobile" | "desktop";
  title: string;
  source: string;
  deploy: string;
  descriptionProject: string;
  technologiesTitle: string;
  seeMore: string;
  skill1?: IconDefinition;
  skill2?: IconDefinition;
  skill3?: IconDefinition;
  skill4?: IconDefinition;
  skill5?: IconDefinition;
  skill6?: IconDefinition;
  skill7?: IconDefinition;

}
const style = {
    display:'flex',
    flexDirection:'Column',
    textAlign:'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const Project = ({
  role,
  img,
  type,
  title,
  source,
  deploy,
  descriptionProject,
  technologiesTitle,
  seeMore,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7

}: iProject) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Content  id="Projects"  >
      <TopInfo>
        <RoleInfo>{role}</RoleInfo>
      </TopInfo>
      <MockUpContainer>
        <MockUp src={img}  width={80} height={160} alt={t("projectImage")} />
      </MockUpContainer>
      <ProjectFooter>
        <Presentation>
          <span>{title}</span>

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
      <Button label="Info" severity="secondary" rounded onClick={handleOpen} />   



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer sx={style}>
          <MontalContent>
          <ModalContainerTitle id="modal-modal-title" variant="h6">
            {title}
          </ModalContainerTitle>
      <ModalCard>
      <ModalContainerDescription id="modal-modal-title" variant="h6" style={{marginBottom:20}}>
          {descriptionProject}
          </ModalContainerDescription>
      <ModalContainerTitle id="modal-modal-title" variant="h6">
          {technologiesTitle}
          </ModalContainerTitle>
        
          <IconsContainer>
<FontAwesomeIcon icon={skill1 as IconProp} style={{fontSize: '50px', color:'#5ED4F3', marginRight: '8px'}} /> 
<FontAwesomeIcon icon={skill2 as IconProp} style={{fontSize: '50px', color:'#F7C327', marginRight: '8px' }} /> 
<FontAwesomeIcon icon={skill3 as IconProp} style={{fontSize: '50px', color:'#E7642E' , marginRight: '8px'}} /> 
<FontAwesomeIcon icon={skill4 as IconProp} style={{fontSize: '50px', color:'#E8D44D' , marginRight: '8px'}} /> 
<FontAwesomeIcon icon={skill5 as IconProp} style={{fontSize: '50px', color:'#8BBF3D' , marginRight: '8px'}} /> 
<FontAwesomeIcon icon={skill6 as IconProp} style={{fontSize: '50px', color:'#2862E9', marginRight: '8px' }} /> 
<FontAwesomeIcon icon={skill7 as IconProp} style={{fontSize: '50px', color:'#000' }} /> 

  </IconsContainer>
      <ModalContainerTitle id="modal-modal-title" variant="h6">
          {seeMore}         
      </ModalContainerTitle>
      <IconsContainer>
          <Icon
            href={source}
            target="_blank"
            style={{color:'black'}}
            rel="noopener noreferrer"
            title="Source"
            className="fab fa-github-square fa-2x"
          />
          <Icon
            href={deploy}
            target="_blank"
            style={{color:'black'}}
            rel="noopener noreferrer"
            title="Deploy"
            className="fas fa-satellite-dish fa-2x"
          />
        </IconsContainer>
        
        </ModalCard>
          </MontalContent>

        </ModalContainer>
      </Modal>
    
       </Content>

  );
};
export default Project;
