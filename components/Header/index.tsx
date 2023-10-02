import {Content,HeaderContainer,NavList, NavItem, Links,  TranslateContainer} from "./styles";
import {useCallback} from "react";
import {useRouter} from "next/router";
import useTranslation from "../../hooks/useTranslation";
import {locales} from "../../translations/config"
const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

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

return( 
  
  <Content>
  <NavList>
          <NavItem>
            <Links href="#AboutMe" onClick={handleScroll}>HOME</Links>
          </NavItem>
          <NavItem>
            <Links href="#TecAndFrams" onClick={handleScroll}>
             TÉCNOLOGIAS E FRAMEWORKS
            </Links>
          </NavItem>   
          <NavItem>
            <Links href="#Projects" onClick={handleScroll}>
              PROJETOS
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
