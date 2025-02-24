import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { Size, State, Variant, Width } from './propTypes';

// Example icons
const PlusIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(Variant),
    },
    size: {
      control: 'select',
      options: Object.values(Size),
    },
    state: {
      control: 'select',
      options: Object.values(State),
    },
    width: {
      control: 'select',
      options: Object.values(Width),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// Basic Button variations
export const Primary: Story = {
  args: {
    variant: Variant.Primary,
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: Variant.Secondary,
    label: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: Variant.Ghost,
    label: 'Ghost Button',
  },
};

// Size variations
export const Small: Story = {
  args: {
    size: Size.Small,
    label: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: Size.Medium,
    label: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: Size.Large,
    label: 'Large Button',
  },
};

// State variations
export const Hover: Story = {
  args: {
    label: 'Hover State',
    state: State.Hover,
  },
};

export const Focus: Story = {
  args: {
    label: 'Focus State',
    state: State.Focus,
  },
};

export const Active: Story = {
  args: {
    label: 'Active State',
    state: State.Active,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    state: State.Disabled,
  },
};

// State variations with different variants
export const PrimaryStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant={Variant.Primary} label="Default" />
      <Button variant={Variant.Primary} state={State.Hover} label="Hover" />
      <Button variant={Variant.Primary} state={State.Focus} label="Focus" />
      <Button variant={Variant.Primary} state={State.Active} label="Active" />
      <Button variant={Variant.Primary} state={State.Disabled} label="Disabled" />
    </div>
  ),
};

export const SecondaryStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant={Variant.Secondary} label="Default" />
      <Button variant={Variant.Secondary} state={State.Hover} label="Hover" />
      <Button variant={Variant.Secondary} state={State.Focus} label="Focus" />
      <Button variant={Variant.Secondary} state={State.Active} label="Active" />
      <Button variant={Variant.Secondary} state={State.Disabled} label="Disabled" />
    </div>
  ),
};

export const GhostStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant={Variant.Ghost} label="Default" />
      <Button variant={Variant.Ghost} state={State.Hover} label="Hover" />
      <Button variant={Variant.Ghost} state={State.Focus} label="Focus" />
      <Button variant={Variant.Ghost} state={State.Active} label="Active" />
      <Button variant={Variant.Ghost} state={State.Disabled} label="Disabled" />
    </div>
  ),
};

// Width variations
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    width: Width.Full,
  },
};

// Icon variations
export const WithLeadingIcon: Story = {
  args: {
    label: 'Add Item',
    leadingIcon: <PlusIcon />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: 'Next',
    trailingIcon: <ArrowRightIcon />,
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: <PlusIcon />,
    'aria-label': 'Add',
  },
};

// Complex examples
export const ComplexPrimary: Story = {
  args: {
    variant: Variant.Primary,
    size: Size.Large,
    label: 'Create Project',
    leadingIcon: <PlusIcon />,
    width: Width.Full,
  },
};

export const ComplexSecondary: Story = {
  args: {
    variant: Variant.Secondary,
    size: Size.Medium,
    label: 'Next Step',
    trailingIcon: <ArrowRightIcon />,
  },
};

export const WithOnClick: Story = {
  args: {
    variant: Variant.Primary,
    label: 'Click Me',
    onClick: action('button-click'),
  },
};
