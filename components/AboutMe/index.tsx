import {useCallback} from "react";
import {useRouter} from "next/router";

import useTranslation from "../../hooks/useTranslation";
import {locales} from "../../translations/config";
import {
  Content,
  TranslateContainer,
  TitleName,
  ImagePersonal,
  Qualities,
  Quality,
  Description,
  IconsContainer,
  Icon,
  ButtonContainer,
  ContactMe,
} from "./styles";

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
      <ImagePersonal src='https://avatars.githubusercontent.com/u/87835597?v=4'  />
      <TitleName>Douglas S. Leite</TitleName>
      <Qualities>
        <Quality>{t("quality1")}</Quality>
        <Quality>{t("quality2")}</Quality>
        <Quality>{t("quality3")}</Quality>
        <Quality>{t("quality4")}</Quality>
      </Qualities>
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
      <ButtonContainer>
        <ContactMe
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!">
          {t("contactButton")}
        </ContactMe>
      </ButtonContainer>
      
    </Content>
  );
};
export default AboutMe;
