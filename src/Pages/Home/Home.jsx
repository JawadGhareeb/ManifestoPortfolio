import { Fragment } from "react";
import { Landing } from "../../Components/Landing/Landing";
import { Gallery } from "../../Components/Gallery/Gallery";
import { Work } from "../../Components/Work/Work";
import { Services } from "../../Components/Services/Services";
import { Infinite } from "../../Components/Infinite/Infinite";
import { NewsShort } from "../../Components/NewsShort/NewsShort";
import { Section } from "../../Components/Section/Section";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <Fragment>
      <Landing />
      <Gallery />
      <Work />
      <Services />
      <Infinite />
      <NewsShort />
      <Section />
      <Footer />
    </Fragment>
  );
};
