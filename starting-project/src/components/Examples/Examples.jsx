import { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import TabButton from "../TabButton/TabButton.jsx";
import Section from "../Section.jsx";
import Tabs from "../Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("components");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  } else {
    {
      tabContent;
    }
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
   
    </Section>
  );
}
