import { Fragment, useEffect, useState } from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import breakPointObserver from "./components/shared/breakPointObserver";
import AllRoutes from "./container/AllRoutes/AllRoutes";
import NavBar from "./components/NavBar/NavBar";
import MediaQueryIndication from "./components/MediaQueryIndication/MediaQueryIndication";

const breakPoints = {
  mobile: "(max-width:600px)",
  tablet: "(min-width:600px) and (max-width:768px)",
  laptop: "(min-width:769px) and (max-width:1024px)",
  desktop: "(min-width:1024px)"
};

export default function App() {
  const [breakPoint, isBreakPoint] = useState();
  useEffect(() => {
    breakPointObserver(breakPoints, isBreakPoint);
  }, [breakPoint]);
  console.log(breakPoint);
  return (
    <Fragment>
      <BrowserRouter>
        <MediaQueryIndication breakPoint={breakPoint} />
        <NavBar breakPoint={breakPoint} />
        <AllRoutes />
      </BrowserRouter>
    </Fragment>
  );
}
