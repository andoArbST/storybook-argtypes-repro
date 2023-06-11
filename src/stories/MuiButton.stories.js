import { Button } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/MuiButton",
  component: Button,
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: "primary",
    children: "Button",
  },
};
export const Secondary = {
  args: {
    color: "secondary",
    children: "Button",
  },
};

export const Large = {
  args: {
    color: "primary",
    size: "large",
    children: "Button",
  },
};

export const Small = {
  args: {
    color: "primary",
    size: "small",
    children: "Button",
  },
};
