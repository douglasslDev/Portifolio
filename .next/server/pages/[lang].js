(()=>{var e={};e.id=484,e.ids=[484,660],e.modules={4828:(e,t,i)=>{"use strict";i.r(t),i.d(t,{config:()=>el,default:()=>ea,getServerSideProps:()=>eo,getStaticPaths:()=>es,getStaticProps:()=>en,reportWebVitals:()=>ec,routeModule:()=>ex,unstable_getServerProps:()=>em,unstable_getServerSideProps:()=>eg,unstable_getStaticParams:()=>eu,unstable_getStaticPaths:()=>ep,unstable_getStaticProps:()=>ed});var r={};i.r(r),i.d(r,{default:()=>ei});var a=i(7093),n=i(5244),s=i(1323),o=i(4482),l=i(4589),c=i(997),d=i(968),p=i.n(d),u=i(6689),m=i.n(u),g=i(1163),x=i(2330);let h=m().createContext({locale:"en",setLocale:()=>null}),f=({lang:e,children:t})=>{let[i,r]=m().useState(e),{query:a}=(0,g.useRouter)();return m().useEffect(()=>{i!==localStorage.getItem("locale")&&localStorage.setItem("locale",i)},[i]),m().useEffect(()=>{"string"==typeof a.lang&&(0,x.b)(a.lang)&&i!==a.lang&&r(a.lang)},[a.lang,i]),c.jsx(h.Provider,{value:{locale:i,setLocale:r},children:t})},y={en:{jobRole:"Developer",metaDescription:"Douglas Santos is a Front-End Developer, that loves JavaScript and related libraries/frameworks like ReactJS and React Native.",quality1:"DEVELOPER.",quality2:"RELIABLE.",quality3:"FAST.",quality4:"SMART.",description:"Front-End Developer. Currently working as Front-End Lead at Loocal with React & React-Native w/ Redux/Redux-Saga. Follow my work below.",contactButton:"Contact me",projectImage:"Project Image",title001:"LOUDDI Ministry website",description001:"LOUDDI Ministry Landing Page.",title002:"Challenge - Employees Management",description002:"A simple management system built with TypeScript and ReactJS.",title003:"Challenge - API to Employees Management System",description003:"A simple API coded to employees management system, built in TypeScript, Express and MongoDB.",title004:"Notflix - Netflix clone",description004:"A simple Netflix clone made for study purposes, built in TypeScript and ReactJS.",title005:"Challenge - Reddit API",description005:"In this challenge was used the ReactJS SubReddit API, built in TypeScript an ReactJS.",title006:"Challenge - Loocal",description006:"Built in TypeScript and ReactJS."},pt:{jobRole:"Desenvolvedor",metaDescription:"Douglas Santos \xe9 um Desenvolvedor Front-End, que ama JavaScript e bibliotecas/frameworks correlatos, tais como ReactJS e React Native.",contactButton:"Contate-me",projectImage:"Imagem do Projeto",quality1:"DESENVOLVEDOR.",quality2:"CONFI\xc1VEL.",quality3:"R\xc1PIDO.",quality4:"INTELIGENTE.",description:"Desenvolvedor Front-End. Atualmente trabalhando como Freelancer  de Front-Ent com React & React-Native. Siga meu trabalho nas redes abaixo.",title001:"Site Minist\xe9rio LOUDDI",description001:" Landing Page do minist\xe9rio LOUDDI.",title002:"Desafio - Gerenciamento de Funcion\xe1rios",description002:"Um sistema simples de gerenciamento de funcion\xe1rios feito em TypeScript e ReactJS.",title003:"Desafio - API para o Sistema de Gerenciamento de Funcion\xe1rios",description003:"Uma API simples codada para o sistema de gerenciamento de funcion\xe1rios, feita em TypeScript, Express e MongoDB."}};var j=i(9466);function b(){let{locale:e}=(0,u.useContext)(h);return{t:function(t){return y[e][t]||console.warn(`Translation '${t}' for locale '${e}' not found.`),y[e][t]||y[j.al][t]||""},locale:e}}let v=require("next/error");var S=i.n(v);let k=require("next/dist/shared/lib/utils");var w=i(7518),P=i.n(w);let q=require("primereact/image"),D=P().section`
  padding: 5% 10%;
  height: 100vh;
 
  @media (min-width: 990px) {
    padding: 20% 18%;
    position: sticky;
    top: 0;
  }
`,E=P().div`
  position: absolute;
  top: 3%;
  right: 5%;
  transition: 0.3s;

  > span {
    font-size: 22px;
  }

  > span:nth-child(2) {
    color: darkgray;
  }

  > span:first-child,
  span:last-child {
    cursor: pointer;
    font-size: 18px;
  }

  > span:first-child:hover,
  span:last-child:hover {
    opacity: 0.5;
  }
`,R=P().h1`
  font-size: 35px;
  font-family: 'serif';
`,I=P()(q.Image)`
border-radius:80px`,L=P().div`
  margin-top: 10%;
  margin-bottom: 10%;
  > strong:not(:last-child) {
    margin-bottom: 20px;
  }

  @media (min-width: 990px) {
    margin-top: 10%;
  }
`;P().div`

`;let N=P().strong`
  font-size: 15px;
  display: block;
  font-family:serif;
  color: #555;
`,F=P().p`
  margin-top: 5%;
  
`,A=P().div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  height: 50px;
`,C=P().a`
  color: #56baec;
  opacity: 0.5;

  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`,_=P().div`
  margin-top: 10%;
`,T=P().a`
  font-size: 17px;
  font-weight: 500;
  padding: 15px 24px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  background: #007bfc;
  opacity: 0.7;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`,B=()=>{let{t:e}=b(),t=(0,g.useRouter)(),i=(0,u.useCallback)(e=>{let i=RegExp(`^/(${j.k1.join("|")})`);t.push(t.pathname,t.asPath.replace(i,`/${e}`));let r=document.getElementsByTagName("html");r[0].setAttribute("lang",e)},[t]);return(0,c.jsxs)(D,{children:[(0,c.jsxs)(E,{children:[c.jsx("span",{onClick:()=>i("pt"),children:"PT"}),c.jsx("span",{children:" | "}),c.jsx("span",{onClick:()=>i("en"),children:"EN"})]}),c.jsx(I,{src:"https://avatars.githubusercontent.com/u/87835597?v=4"}),c.jsx(R,{children:"Douglas S. Leite"}),(0,c.jsxs)(L,{children:[c.jsx(N,{children:e("quality1")}),c.jsx(N,{children:e("quality2")}),c.jsx(N,{children:e("quality3")}),c.jsx(N,{children:e("quality4")})]}),c.jsx(F,{children:e("description")}),(0,c.jsxs)(A,{children:[c.jsx(C,{href:"https://github.com/douglasslDev",target:"_blank",rel:"noopener noreferrer",title:"Github",className:"fab fa-github-square fa-2x"}),c.jsx(C,{href:"https://www.linkedin.com/in/devdouglassantos/",target:"_blank",rel:"noopener noreferrer",title:"Linkedin",className:"fab fa-linkedin fa-2x"}),c.jsx(C,{href:"https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!",target:"_blank",rel:"noopener noreferrer",title:"WhatsApp",className:"fab fa-whatsapp-square fa-2x"}),c.jsx(C,{href:"mailto:main@douglas.crc@outlook.com",title:"E-mail",className:"fas fa-envelope-square fa-2x"})]}),c.jsx(_,{children:c.jsx(T,{target:"_blank",rel:"noopener noreferrer",href:"https://api.whatsapp.com/send?phone=5521966199134&text=Fala%20dev!",children:e("contactButton")})})]})},J=require("primereact/button"),M=P().div`
  background: #0194be;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:20px;
`,O=P().div`
  color: white;
  display: flex;
  justify-content: space-between;
`,z=P().strong``,U=P().div`
  max-width: 100%;
  max-height: 70%;
  display: flex;
  justify-content: center;
`,V=P().img`
  justify-content: center;
  max-width: ${({type:e})=>"desktop"===e?"60%":" 40%"};
  object-fit: contain;
`,$=P().div`
  display: flex;
  flex-direction: column;
  > div:first-child {
    margin-bottom: 15px;
  }
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    > div:first-child {
      margin-bottom: 0;
    }
  }
`,G=P().div`
  color: white;
  text-align: center;
  > span {
    display: block;
  }
`,W=P().div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
  @media (min-width: 990px) {
    align-items: center;
    justify-content: unset;
  }
`,X=P().a`
  color: white;
  opacity: 0.5;

  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`,H=({role:e,img:t,type:i,title:r,description:a,source:n,deploy:s})=>{let{t:o}=b();return(0,c.jsxs)(M,{children:[c.jsx(O,{children:c.jsx(z,{children:e})}),c.jsx(U,{children:c.jsx(V,{src:t,type:i,alt:o("projectImage")})}),(0,c.jsxs)($,{children:[(0,c.jsxs)(G,{children:[c.jsx("span",{children:r}),c.jsx("strong",{children:a})]}),(0,c.jsxs)(W,{children:[c.jsx(X,{href:n,target:"_blank",rel:"noopener noreferrer",title:"Source",className:"fab fa-github-square fa-2x"}),c.jsx(X,{href:s,target:"_blank",rel:"noopener noreferrer",title:"Deploy",className:"fas fa-satellite-dish fa-2x"})]})]}),c.jsx(J.Button,{label:"Info",severity:"secondary",rounded:!0})]})},K=P().footer`
  display: block;
  > div {
    height: 80px;
    display: flex;
    background: darkgray;
    justify-content: center;
    align-items: center;
    color: white;
  }
`,Q=()=>c.jsx(K,{children:c.jsx("div",{children:"\xa9 2023 Douglas Santos Leite."})}),Y=P().section`
display: flex;
flex-direction: column;
`,Z=P().section`
display: flex;
flex-direction: row;

`,ee=()=>{let{locale:e,t}=b();return(0,c.jsxs)(Y,{children:[(0,c.jsxs)(Z,{children:[c.jsx(H,{role:"Front-end",color:"gray",img:"/img/mockupLouddi.png",type:"desktop",title:t("title001"),description:t("description001"),source:"",deploy:"https://louddi-git-main-douglassldev.vercel.app/"}),c.jsx(H,{role:"Front-end",color:"gray",img:"/img/mockupLouddi.png",type:"desktop",title:t("title001"),description:t("description001"),source:"",deploy:"https://louddi-git-main-douglassldev.vercel.app/"}),c.jsx(H,{role:"Front-end",color:"gray",img:"/img/mockupLouddi.png",type:"desktop",title:t("title001"),description:t("description001"),source:"",deploy:"https://louddi-git-main-douglassldev.vercel.app/"}),c.jsx(H,{role:"Front-end",color:"gray",img:"/img/mockupLouddi.png",type:"desktop",title:t("title001"),description:t("description001"),source:"",deploy:"https://louddi-git-main-douglassldev.vercel.app/"})]}),c.jsx(Q,{})]})},et=P().main`
  display: flex;
  flex-direction: column;

  @media (min-width: 990px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
  }
`,ei=(e=>{let t=({locale:t,...i})=>t?(0,c.jsxs)(f,{lang:t,children:[u.Children,c.jsx(e,{...i})]}):c.jsx(S(),{statusCode:404});return t.getInitialProps=async t=>{let i={};return(e.getInitialProps&&(i=await e.getInitialProps(t)),"string"==typeof t.query.lang&&(0,x.b)(t.query.lang))?{...i,locale:t.query.lang}:{...i,locale:void 0}},t.displayName=`withLang(${(0,k.getDisplayName)(e)})`,t})(()=>{let{locale:e,t}=b();return(0,u.useEffect)(()=>{let t=document.getElementsByTagName("html");t[0].setAttribute("lang",e)},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(p(),{children:[(0,c.jsxs)("title",{children:["Douglas Santos - ",t("jobRole")]}),c.jsx("meta",{name:"description",content:t("metaDescription")})]}),(0,c.jsxs)(et,{children:[c.jsx(B,{}),c.jsx(ee,{})]})]})}),er=a.PagesRouteModule,ea=(0,s.l)(r,"default"),en=(0,s.l)(r,"getStaticProps"),es=(0,s.l)(r,"getStaticPaths"),eo=(0,s.l)(r,"getServerSideProps"),el=(0,s.l)(r,"config"),ec=(0,s.l)(r,"reportWebVitals"),ed=(0,s.l)(r,"unstable_getStaticProps"),ep=(0,s.l)(r,"unstable_getStaticPaths"),eu=(0,s.l)(r,"unstable_getStaticParams"),em=(0,s.l)(r,"unstable_getServerProps"),eg=(0,s.l)(r,"unstable_getServerSideProps"),ex=new er({definition:{kind:n.x.PAGES,page:"/[lang]",pathname:"/[lang]",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:r})},1163:(e,t,i)=>{e.exports=i(8355)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{"use strict";e.exports=require("next/head")},2250:e=>{"use strict";e.exports=require("primereact/api")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[859,762,697,482,617],()=>i(4828));module.exports=r})();