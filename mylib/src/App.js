import React, { useState } from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import Typography from "./components/Typography/Typography";
import Heading from "./components/Heading/Heading";
import Tooltip from "./components/Tooltip/Tooltip";
import Accordion from "./components/Accordion/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Heading level={1}>Main Heading</Heading>
      <Typography textSize="md">
        This is some example text. Adjust the text size according to your needs.
      </Typography>
      <Input label="Your Name" placeholder="Enter your name" onChange={() => {}} />
      <Button variant="primary" size="lg">Primary Button</Button>
      <Button variant="bordered" size="md" onClick={() => alert("Clicked")}>Bordered Button</Button>

      <Tooltip text="This is a tooltip" position="top">
        <button>Hover over me</button>
      </Tooltip>

      <Accordion title="Section 1" defaultOpen>
        This is the content of the first section.
      </Accordion>
    </div>
  );
}

export default App;
