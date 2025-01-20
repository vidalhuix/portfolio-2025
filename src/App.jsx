import { Work } from "./components/Work";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </>
  );
};

