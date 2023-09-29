import useTranslation from "../../../../hooks/useTranslation";
import { Button } from "primereact/button";     
import Modal from '@mui/material/Modal';
import { useState } from "react";
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
} from "./styles";

export interface iProject {
  role: string;
  color: string;
  img: string;
  type: "mobile" | "desktop";
  title: string;
  description: string;
  source: string;
  deploy: string;
}

const style = {
    display:'flex',
    flexDirection:'Column',
    textAlign:'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: 16,
};

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Content   >
      
      <TopInfo>
        <RoleInfo>{role}</RoleInfo>
      </TopInfo>
      <MockUpContainer>
        <MockUp src={img}  width={80} height={160} alt={t("projectImage")} />
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
      <Button label="Info" severity="secondary" rounded onClick={handleOpen} />   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {description}
          </Typography>
        </ModalContainer>
      </Modal>
    
  
       </Content>

  );
};
export default Project;
