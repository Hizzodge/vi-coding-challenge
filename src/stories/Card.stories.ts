import { html } from 'lit';
import { StoryFn } from '@storybook/web-components';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: 'card-component',
  argTypes: {
    heading: { control: 'text' },
    texts: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
};

const Template: StoryFn = (args) => html`
  <card-component .heading=${args.heading} .texts=${args.texts} .buttonLabel=${args.buttonLabel}></card-component>
`;
// const Template = ({ heading, texts, buttonLabel }: { heading: string, texts: string, buttonLabel: string }) => html`
//   <card-component
//     heading=${heading}
//     texts=${texts}
//     buttonLabel=${buttonLabel}
//   ></card-component>
// `;

export const Default = Template.bind({});
Default.args = {
  heading: 'A wonderful serenity has taken possession',
  texts: 'A wonderful serenity has taken possession of my entire soul, like these sweet mo',
  buttonLabel: 'Link button',
};

