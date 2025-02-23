import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import * as DocBlock from "@storybook/blocks";
import { Typography } from "./Typography";
import { ImportBlock } from "../../utils/ImportBlock/ImportBlock";
import { Sizes, Weight } from "./types";

export default {
  component: Typography,
  title: "Foundations/Typography",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <DocBlock.Title />
          <Page />
          <DocBlock.Primary />
          <DocBlock.Controls />
          <DocBlock.Stories />
        </>
      ),
    },
  },
  argTypes: {
    weight: {
      control: "radio",
      options: Object.values(Weight),
    },
    textColor: {
      control: 'color',
      description: 'Valid CSS color value (hex, rgb, hsl, named color, or CSS variable)',
    },
    size: {
      options: [48, 36, 32, 28, 24, 20, 18, 16, 14, 12, 10],
    },
  },
} as Meta;

type Story = StoryObj<typeof Typography>;

const Page = (): React.ReactElement => {
  return (
    <div>
      <DocBlock.Unstyled>
        <div style={{ maxWidth: '800px' }}>
          <Typography size={Sizes.h2} textColor="var(--color-text-primary)" weight={Weight.bold} style={{ marginBottom: '1rem' }}>
            Typography System
          </Typography>
          <Typography size={Sizes.b1} textColor="var(--color-text-primary)" weight={Weight.regular} style={{ marginBottom: '1.5rem' }}>
            Typography is the art and technique of arranging text to make written language legible, readable, and visually appealing.
          </Typography>
          <Typography size={Sizes.b2} textColor="var(--color-text-secondary)" weight={Weight.regular} style={{ marginBottom: '1rem' }}>
            Our typography system establishes a clear visual hierarchy through carefully defined font sizes, weights, and styles.
            This systematic approach ensures consistent readability, accessibility, and brand identity across all our digital products.
          </Typography>
          <Typography size={Sizes.b3} textColor="var(--color-text-secondary)" weight={Weight.regular}>
            The system is fully responsive, automatically adjusting to provide optimal reading experience across desktop, tablet, and mobile devices.
          </Typography>
        </div>
      </DocBlock.Unstyled>
      <DocBlock.Unstyled>
        <ImportBlock
          imports={[
            'import { Button, Heading } from "leisu-ui-system";',
            'import type { TypographyProps } from "leisu-ui-system";',
          ]}
        />
      </DocBlock.Unstyled>
    </div>
  );
};

export const Text: Story = {
  args: {
    weight: Weight.regular,
    textColor: "var(--color-text-primary)",
    size: 16,
    underline: false,
    capitalize: false,
    lineThrough: false,
    children: "Leisu Typography",
  },
};

export const CustomColors = () => {
  return (
    <div>
      <Typography size={24} textColor="var(--color-success)" weight={Weight.bold}>
        CSS Variable Color
      </Typography>
      <Typography size={24} textColor="rgb(255, 99, 71)" weight={Weight.bold}>
        RGB Color
      </Typography>
      <Typography size={24} textColor="hsl(145, 63%, 42%)" weight={Weight.bold}>
        HSL Color
      </Typography>
      <Typography size={24} textColor="rgba(0, 128, 0, 0.8)" weight={Weight.bold}>
        RGBA Color
      </Typography>
    </div>
  );
};

export const ResponsiveTypography = () => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <Typography size={Sizes.h1} textColor="var(--color-text-primary)" weight={Weight.bold}>
        Visual Hierarchy
      </Typography>
      <Typography size={Sizes.h3} textColor="var(--color-text-secondary)" weight={Weight.regular} style={{ marginBottom: '2rem' }}>
        Our type system automatically adjusts for different screen sizes while maintaining readability
      </Typography>

      <div style={{ marginBottom: '3rem' }}>
        <Typography size={Sizes.h2} textColor="var(--color-text-primary)" weight={Weight.bold}>
          Headings
        </Typography>
        <Typography size={Sizes.h1} textColor="var(--color-text-primary)" weight={Weight.bold}>
          H1 - Primary Headlines
        </Typography>
        <Typography size={Sizes.h2} textColor="var(--color-text-primary)" weight={Weight.bold}>
          H2 - Section Headers
        </Typography>
        <Typography size={Sizes.h3} textColor="var(--color-text-primary)" weight={Weight.bold}>
          H3 - Subsection Titles
        </Typography>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <Typography size={Sizes.h2} textColor="var(--color-text-primary)" weight={Weight.bold}>
          Body Text
        </Typography>
        <Typography size={Sizes.b1} textColor="var(--color-text-primary)" weight={Weight.regular}>
          B1 - Lead paragraphs and important content that needs slightly larger text for emphasis.
        </Typography>
        <Typography size={Sizes.b2} textColor="var(--color-text-primary)" weight={Weight.regular}>
          B2 - Default body text size, optimized for comfortable reading in longer form content.
        </Typography>
        <Typography size={Sizes.b3} textColor="var(--color-text-primary)" weight={Weight.regular}>
          B3 - Supporting text, captions, and UI elements that need to be slightly more compact.
        </Typography>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px' }}>
        <Typography size={Sizes.h4} textColor="var(--color-text-primary)" weight={Weight.bold}>
          Responsive Behavior
        </Typography>
        <Typography size={Sizes.b2} textColor="var(--color-text-secondary)" weight={Weight.regular}>
          Resize your browser window to see how typography adapts:
        </Typography>
        <Typography size={Sizes.b3} textColor="var(--color-text-secondary)" weight={Weight.regular}>
          • Desktop ({'>'}1024px): Full-size typography for optimal reading on large screens
        </Typography>
        <Typography size={Sizes.b3} textColor="var(--color-text-secondary)" weight={Weight.regular}>
          • Tablet (768px - 1024px): Slightly reduced sizes for comfortable tablet viewing
        </Typography>
        <Typography size={Sizes.b3} textColor="var(--color-text-secondary)" weight={Weight.regular}>
          • Mobile ({'<'}768px): Optimized sizes for mobile devices
        </Typography>
      </div>
    </div>
  );
};

export const NumberSizes = () => {
  return (
    <div>
      <Typography size={48} textColor="var(--color-success)" weight={Weight.regular}>
        48px - Heading 1
      </Typography>
      <Typography size={36} textColor="var(--color-text-dark)" weight={Weight.bold}>
        36px - Heading 2
      </Typography>
      <Typography size={24} textColor="var(--color-text-secondary)" weight={Weight.extraBold}>
        24px - Heading 5
      </Typography>
      <Typography size={18} textColor="var(--color-text-primary)" weight={Weight.regular}>
        18px - Body 1
      </Typography>
      <Typography size={14} textColor="var(--color-text-secondary)" weight={Weight.regular}>
        14px - Body 3
      </Typography>
    </div>
  );
};

export const LegacySizes = () => {
  return (
    <div>
      <Typography size={Sizes.h1} textColor="var(--color-success)" weight={Weight.regular}>
        Sizes.h1 - Heading 1
      </Typography>
      <Typography size={Sizes.h2} textColor="var(--color-text-dark)" weight={Weight.bold}>
        Sizes.h2 - Heading 2
      </Typography>
      <Typography size={Sizes.h5} textColor="var(--color-text-secondary)" weight={Weight.extraBold}>
        Sizes.h5 - Heading 5
      </Typography>
      <Typography size={Sizes.b1} textColor="var(--color-text-primary)" weight={Weight.regular}>
        Sizes.b1 - Body 1
      </Typography>
      <Typography size={Sizes.b3} textColor="var(--color-text-secondary)" weight={Weight.regular}>
        Sizes.b3 - Body 3
      </Typography>
    </div>
  );
};

export const Variants = () => {
  return (
    <div>
      <Typography size={14} textColor="var(--color-success)" weight={Weight.regular}>
        Sample text - regular
      </Typography>
      <Typography size={16} textColor="var(--color-text-dark)" weight={Weight.bold}>
        Sample text - bold
      </Typography>
      <Typography size={18} textColor="var(--color-text-secondary)" weight={Weight.extraBold}>
        Sample text - extra bold
      </Typography>
    </div>
  );
};

export const Capitalize = () => (
  <Typography capitalize size={16} textColor="var(--color-text-secondary)">
    Capitalize
  </Typography>
);

export const Underline = () => (
  <Typography underline size={16} textColor="var(--color-text-secondary)">
    Underline
  </Typography>
);

export const Ellipsis = () => (
  <Typography ellipsis size={16} textColor="var(--color-text-secondary)">
    A UI component library is a collection of reusable interface elements that help maintain consistency and efficiency in application development. 
    It provides pre-built, customizable components that follow design system guidelines and best practices. 
    This modular approach accelerates development while ensuring a cohesive user experience across all products.
  </Typography>
);

export const LineThrough = () => (
  <Typography lineThrough size={16} textColor="var(--color-text-secondary)">
    Line Through
  </Typography>
);

CustomColors.storyName = "Color Examples";
NumberSizes.storyName = "Number Sizes";
LegacySizes.storyName = "Legacy Sizes (b1, b2, etc.)";
Variants.storyName = "Variants";
Capitalize.storyName = "Capitalize";
Underline.storyName = "Underline";
Ellipsis.storyName = "Ellipsis";
LineThrough.storyName = "LineThrough";
ResponsiveTypography.storyName = "Responsive Typography Demo";
