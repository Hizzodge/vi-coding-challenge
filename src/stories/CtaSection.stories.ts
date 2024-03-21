import { Meta, StoryObj } from '@storybook/web-components'
import './CtaSection'
import { CtaSection } from './CtaSection';

const meta = {
  title: 'Component/CtaSection', 
  tags: ['autodocs'],
  render: () => new CtaSection(),
} as Meta<CtaSection>;

export default meta;

type Story = StoryObj<CtaSection>;

export const Default: Story = {
  args: {}
}