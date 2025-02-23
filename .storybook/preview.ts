import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          [
            "Typography",
            "Colors",
            ["All Colors", "Text", "Radius", "Background", "Icon"],
            "Shadow",
            "Spacing",
            "Radius",
            "Size",
          ],
          "Components",
          [
            "Button",
            "Input",
            "Select",
            "Checkbox",
            "Radio",
          ],
        ],
      },
    },
  },
};

export default preview;
