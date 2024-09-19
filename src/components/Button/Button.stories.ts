import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';
import { Size } from './propTypes';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const XSmall: Story = {
  args: {
    size: Size.XSmall,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: Size.Small,
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: Size.Medium,
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: Size.Large,
    label: 'Button',
  },
};

export const XLarge: Story = {
  args: {
    size: Size.XL,
    label: 'Button',
  },
};
