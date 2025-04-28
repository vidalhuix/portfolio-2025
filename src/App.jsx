import { Work } from "./components/Work";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import { Projects } from "./components/Projects";
import { Presentation } from "./components/Presentation";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { UnderContact } from "./components/UnderContact";
import { References } from "./components/References";

export const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <Presentation />
      <Skills />
      <Projects />
      <Work />
      <References />
      <Contact />
      <UnderContact />
    </>
  );
};
