import Head from "next/head";

import useTranslation from "../../hooks/useTranslation";

import withLocale from "../../hocs/withLocale";

import AboutMe from "../../components/AboutMe/";
import Projects from "../../components/Projects";

import {Main} from "../../styles/home";
import {useEffect} from "react";
import Footer from "../../components/Projects/components/Footer";
import Header from "../../components/Header";

const Home = () => {
  const {locale, t} = useTranslation();

  useEffect(() => {
    const htmlEl = document.getElementsByTagName("html");
    htmlEl[0].setAttribute("lang", locale);
  }, []);
  return (
    <Main >
      <Head>
        <title>Douglas Santos - {t("jobRole")}</title>
        <meta name="description" content={t("metaDescription")}></meta>
      </Head>
      
      <Header/>
        <AboutMe />
        <Projects />
        <Footer/>
      </Main>
 
  );
};
export default withLocale(Home);
