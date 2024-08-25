import IntroMIDI from "../components/portfolio/IntroMIDI";
import IdeacionMIDI from "../components/portfolio/IdeacionMIDI";
import GroupLogo from "../components/portfolio/GroupLogo";
import MejoresIdeasMIDI from "../components/portfolio/MejoresIdeasMIDI";
import PrototipoMIDI from "../components/portfolio/PrototipoMIDI";
import TecnologiasMIDI from "../components/portfolio/TecnologiasMIDI";
import CronogramaMIDI from "../components/portfolio/CronogramaMIDI";
import MejorIdeaMIDI from "../components/portfolio/MejorIdeaMIDI";
import Desarrollo1MIDI from "../components/portfolio/Desarrollo1MIDI";
import Desarrollo2MIDI from "../components/portfolio/Desarrollo2MIDI";
import PlaytestingMIDI from "../components/portfolio/PlaytestingMIDI";
import HomepageMIDI from "../components/portfolio/HomepageMIDI";

const Portfolio = ({ refs }) => {
  return (
    <div className="flex flex-col px-6 py-6">
      <div ref={refs.somos}>
        <GroupLogo />
      </div>
      <div ref={refs.intro}>
        <IntroMIDI />
      </div>
      <div ref={refs.cronograma}>
        <CronogramaMIDI />
      </div>
      <div ref={refs.ideacion}>
        <IdeacionMIDI />
      </div>
      <div ref={refs.mejoresideas}>
        <MejoresIdeasMIDI />
      </div>
      <div ref={refs.prototipo}>
        <PrototipoMIDI />
      </div>
      <div ref={refs.mejoridea}>
        <MejorIdeaMIDI />
      </div>
      <div ref={refs.tecnologias}>
        <TecnologiasMIDI />
      </div>
      <div ref={refs.desarrollo1}>
        <Desarrollo1MIDI />
      </div>
      <div ref={refs.desarrollo2}>
        <Desarrollo2MIDI />
      </div>
      <div ref={refs.playtesting}>
        <PlaytestingMIDI />
      </div>
      <div ref={refs.homepage}>
        <HomepageMIDI />
      </div>
    </div>
  );
};

export default Portfolio;
