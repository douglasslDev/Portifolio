import {Content,NavList, NavItem, Links,  TranslateContainer} from "./styles";
import {useCallback} from "react";
import {useRouter} from "next/router";
import useTranslation from "../../hooks/useTranslation";
import {locales} from "../../translations/config"
const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const router = useRouter();
  const {t} = useTranslation();
  const handleLocaleChange = useCallback(
    (locale: string) => {
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(router.pathname, router.asPath.replace(regex, `/${locale}`));
      const htmlEl = document.getElementsByTagName("html");
      htmlEl[0].setAttribute("lang", locale);
    },
    [router],
  );

return( 
  
  <Content>
  <NavList>
          <NavItem>
            <Links href="#AboutMe" onClick={handleScroll}>{t("headerHome")}</Links>
          </NavItem>
          <NavItem>
            <Links href="#TecAndFrams" onClick={handleScroll}>
            {t("headerTecAndFrams")}
                        </Links>
          </NavItem>   
          <NavItem>
            <Links href="#Projects" onClick={handleScroll}>
            {t("homeProjects")}
            </Links>
          </NavItem>
        </NavList>   
        <TranslateContainer>
        <span onClick={() => handleLocaleChange("pt")}>PT</span>
        <span> | </span>
        <span onClick={() => handleLocaleChange("en")}>EN</span>
      </TranslateContainer>
    
  </Content>
);
}
export default Header;
