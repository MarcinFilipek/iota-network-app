import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Loader } from "./Loader";

const Template: ComponentStory<typeof Loader> = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <Loader />
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;
