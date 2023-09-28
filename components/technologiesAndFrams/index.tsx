
  import useTranslation from "../../hooks/useTranslation";
  import 'animate.css';
  import CardContent from '@mui/material/CardContent';
  import Typography from '@mui/material/Typography';
  import {Content, CardContainer} from "./styles";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { IconProp } from '@fortawesome/fontawesome-svg-core';


  interface SkillCardProps {
    icon: IconProp; 
    label: string;
  }

  const TechnologiesAndFrams: React.FC<SkillCardProps> = ({ icon, label }) => {
    const { locale, t } = useTranslation();

    return(
      <Content  >
      <CardContainer style={{alignItems:'center', display:'flex', justifyContent:'center', flexDirection:'column', }} >
      <Typography variant="h6" gutterBottom >
          {label}
        </Typography>
        <FontAwesomeIcon icon={icon}  style={{ fontSize: '80px',  }}/>
       
      </CardContainer>
    </Content>

  )};
  export default TechnologiesAndFrams;


  {/* <Content>
<TitleContainer className="animate__animated animate__backInUp">
{t("TitleTechnologiesAndFrams")}
  
  </TitleContainer> 

 </Content> */}