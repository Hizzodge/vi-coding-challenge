import { html } from 'lit';
import { Button, ButtonProps} from './Button';
import './card.css';

export interface CardProps {
  heading: string;
  text: string;
  buttonProps?: ButtonProps;
}


export const Card = ({heading, text, buttonProps}: CardProps) => html`
<div class="card">
<h2>${heading}</h2>
<p>${text}</p>
${buttonProps && Button(buttonProps)}
</div>
`;
