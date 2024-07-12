import IntroMIDI from "../components/portfolio/IntroMIDI";
import IdeacionMIDI from "../components/portfolio/IdeacionMIDI";
import GroupLogo from "../components/portfolio/GroupLogo";
import MejoresIdeasMIDI from "../components/portfolio/MejoresIdeasMIDI";

const Portfolio = ({ refs }) => {
  return (
    <div className="flex flex-col px-6 py-6">
      <div ref={refs.somos}>
        <GroupLogo />
      </div>
      <div ref={refs.intro}>
        <IntroMIDI />
      </div>
      <div ref={refs.ideacion}>
        <IdeacionMIDI />
      </div>
      <div ref={refs.mejoresideas}>
        <MejoresIdeasMIDI />
      </div>
    </div>
  );
};

export default Portfolio;
