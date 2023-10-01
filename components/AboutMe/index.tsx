import {useCallback} from "react";
import {useRouter} from "next/router";
import useTranslation from "../../hooks/useTranslation";
import {locales} from "../../translations/config";
import {
  Content,
  TranslateContainer,
  TitleName,
  ImagePersonal,
  AboutMeContainer,
  DataAboutMe,
  Description,
  IconsContainer,
  Icon,
  ContactMe,
} from "./styles";
import LottieAnimation from "../LottieAnimation/AnimationDeveloper";

const AboutMe = () => {
  const {t} = useTranslation();
  const router = useRouter();

  const handleLocaleChange = useCallback(
    (locale: string) => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${locale}`));
      const htmlEl = document.getElementsByTagName("html");
      htmlEl[0].setAttribute("lang", locale);
    },
    [router],
  );

  return (
    <Content>
      <TranslateContainer>
        <span onClick={() => handleLocaleChange("pt")}>PT</span>
        <span> | </span>
        <span onClick={() => handleLocaleChange("en")}>EN</span>
      </TranslateContainer>
      <AboutMeContainer>
      <DataAboutMe>
      <ImagePersonal src='https://avatars.githubusercontent.com/u/87835597?v=4' width={120} height={120}  alt="Imagem Pessoal" />
      <TitleName>Douglas S. Leite</TitleName>
      <Description>{t("description")}</Description>
      <IconsContainer>
        <Icon
          href="https://github.com/douglasslDev"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="fab fa-github-square fa-2x"
        />
        <Icon
          href="https://www.linkedin.com/in/devdouglassantos/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="fab fa-linkedin fa-2x"
        />
        <Icon
          href="https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="fab fa-whatsapp-square fa-2x"
        />
        <Icon
          href="mailto:main@douglas.crc@outlook.com"
          title="E-mail"
          className="fas fa-envelope-square fa-2x"
        />
      </IconsContainer> 
      <ContactMe label={t("contactButton")} severity="secondary" onClick={()=>window.open('https://wa.me/5521966199134?text=Fala%20dev!')} />   
      </DataAboutMe>
      <LottieAnimation />
      </AboutMeContainer>
    </Content>
  );
};
export default AboutMe;
