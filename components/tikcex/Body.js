import MeetFeatureTikcex from "./components/meet-feature-tikcex/MeetFeatureTikcex";
import FutureProducts from "./components/future-products/FutureProducts";
import VisionsMissions from "./components/visions-and-missions/VisionsMissions";

import CurrentFeatureList from "./components/current-features/CurrentFeatureList";
import Tokenomics from "./components/tokenomics/Tokenomics";
import WhyChooseUs from "./components/why-choose-us/WhyChooseUs";
import TeamList from "./components/teams/TeamList";
import WhitePaper from "./components/white-paper/WhitePaper";
import ContactUsForm from "./components/contact-us/ContactUsForm";
import Hero from "./components/hero/Hero";
import Roadmap from "./components/roadmap/Roadmap";
import Contract from "./components/contract/Contract";

const MyComponent = () => {

  return (
    <div className="relative">
      <Hero />
      <Contract />
      <MeetFeatureTikcex />
      <FutureProducts />
      <VisionsMissions />
      <CurrentFeatureList />
      <Tokenomics />
      <Roadmap />
      <WhyChooseUs />
      <TeamList />
      <WhitePaper />
      <ContactUsForm />
    </div>
  );
};

MyComponent.displayName = "MyComponent";
export default MyComponent;
