import type { Meta, StoryObj } from '@storybook/web-components';
import type { CardProps } from './Card';
import { Card } from './Card';



const meta = {
  title: 'Example/Card',
  tags: ['autodocs'],
  render: (args: CardProps) => Card(args),
  argTypes: {
    heading: { type: 'string' },
    text: { type: 'string' },
  },
  args: {
    }
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

export const CardStory: Story = {
  args: {
    heading: 'A wonderful serenity has taken possession',
    text: 'A wonderful serenity has taken possession of my entire soul, like these sweet mo',
  }
};

