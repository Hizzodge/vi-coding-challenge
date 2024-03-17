import type { Meta, StoryObj } from '@storybook/web-components';
import { fn } from '@storybook/test';
import type { ButtonProps } from './Button';
import { Button } from './Button';
import { html } from 'lit';

const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: { type: 'string' },
    buttonShape: {
      control: { type: 'select' },
      options: ['standard', 'icon'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Standard: Story = {
  args: {
    label: 'Link button',
    buttonShape: 'standard'
  },
};

export const Icon: Story = {
  args: {
    buttonShape: 'icon',
    label: html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
    `,
  },
};