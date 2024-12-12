import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
import { Children } from 'react';
import React from 'react';
function App() {

  return (
    <div>
      <div>


        <div>
          <Button variant="bordered" size="sm">Confirm</Button>
          <Button variant="bordered" size="md">Confirm</Button>
          <Button variant="bordered" size="lg">Confirm</Button>
        </div>
        <div>
          <Button size="sm">Cancel</Button>
          <Button size="md">Cancel</Button>
          <Button size="lg">Cancel</Button>
        </div>


        <div>

          <Input
            placeholder="inputdanger"
            danger={true}
            label="Danger label">
          </Input>

          <Input
            placeholder="Notdanger"
            label="Notdanger label">
          </Input>

          <Input
            placeholder="disabled input"
            disabled={true}

            label="Disabled label">
          </Input>

        </div>

        <div>
          <Typography textSize="sm">SM. Our mission is to redefine the model of learning and re-engineer
            its process by providing innovative administrative and instructional
            technologies. Click here for our beliefs. If you are a school
            administrator and would like to use ecourse.org for your classes,
            please create school profiles. Instructors and students may signup
            independent user account. For questions, contact us.</Typography>
            <Typography textSize="md">MD. Our mission is to redefine the model of learning and re-engineer
            its process by providing innovative administrative and instructional
            technologies. Click here for our beliefs. If you are a school
            administrator and would like to use ecourse.org for your classes,
            please create school profiles. Instructors and students may signup
            independent user account. For questions, contact us.</Typography>
            <Typography textSize="lg">LG. Our mission is to redefine the model of learning and re-engineer
            its process by providing innovative administrative and instructional
            technologies. Click here for our beliefs. If you are a school
            administrator and would like to use ecourse.org for your classes,
            please create school profiles. Instructors and students may signup
            independent user account. For questions, contact us.</Typography>

        </div>
        <div>
          <Heading level='1'>
            Level 1
          </Heading>
          <Heading level='2'>
            Level 2
          </Heading>
          <Heading level='3'>
            Level 3
          </Heading>
          <Heading level='4'>
            Level 4
          </Heading>
          <Heading level='5'>
            Level 5
          </Heading>
          <Heading level='6'>
            Level 6
          </Heading>
        </div>
      </div>
      <div>
      <Tooltip text="This is a tooltip" position="top">
         Hover me
      </Tooltip>
      <Tooltip text="This is a tooltip" position="bottom">
      Hover me
      </Tooltip>
      <Tooltip text="This is a tooltip" position="left">
      Hover me
      </Tooltip>
      <Tooltip text="This is a tooltip" position="right">
      Hover me
      </Tooltip>

      </div>
      <div>
            <Accordion title="Accordion 1" defaultOpen>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion>
            <Accordion title="Accordion 2">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Accordion>
            <Accordion title="Accordion 3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Accordion>
        </div>
    </div>

  );
}

export default App;