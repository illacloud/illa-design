import * as React from "react";
import { Trigger } from "../src";
import { Button } from "@illa-design/button";
import { mount } from "@cypress/react";

it("Trigger renders with different color scheme", () => {
  mount(
    <div>
      <Trigger
        data-testid="test-trigger-custom"
        content="Trigger Success"
        colorScheme="#123456"
      >
        <Button>Hello Trigger Custom</Button>
      </Trigger>
      <Trigger
        data-testid="test-trigger-prepare"
        content="Trigger Success"
        colorScheme="blue"
      >
        <Button>Hello Trigger Prepare</Button>
      </Trigger>
    </div>
  );
});
