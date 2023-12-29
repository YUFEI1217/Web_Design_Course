import Panel from "./Panel";
import { useState } from 'react';

function Accordion() {

    // const [isActive, setIsActive] = useState(false);

    return (
        <>
          <Panel title="About" isActive={true}>
            From heartwarming stories and adorable photos to informative articles on feline care and behavior, our website is a one-stop destination for cat lovers. Whether you're seeking tips on caring for your own feline friend, exploring the various breeds, or simply indulging in the joy of cute cat content, our site is here to brighten your day with all things cat-related.
          </Panel>
          <Panel title="Introduction" isActive={true}>
            Step into the enchanting realm of our cat-centric website, where every whisker tells a story and every pawprint leaves an indelible mark on your heart. Our passion for felines knows no bounds, and this website is our way of sharing that love with fellow cat enthusiasts. Navigate through a treasure trove of content that spans from heartwarming tales of rescued kitties finding forever homes to expert insights on grooming, nutrition, and behavior.
          </Panel>
          <Panel title="Welcome" isActive={true}>
            Join our community of passionate cat aficionados and embark on a journey through the enchanting world of these lovable companions. Let the purr-fect adventure begin!
          </Panel>
        </>
      );
}

export default Accordion;