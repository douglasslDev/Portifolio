
import useTranslation from "../../hooks/useTranslation";
import 'animate.css';

import {Content, TitleContainer} from "./styles";

const TechnologiesAndFrams = () => {
  const { locale, t } = useTranslation();

  return(
  
  <Content>
<TitleContainer className="animate__animated animate__backInUp">
{t("TitleTechnologiesAndFrams")}
  
  </TitleContainer> 

 </Content>
)};
export default TechnologiesAndFrams;
