import { html } from 'lit';
import { Button} from './Button';
import './card.css';

export interface CardProps {
  heading: string;
  text: string;
}


export const Card = ({heading, text}: CardProps) => html`
<div class="card">
<h2>${heading}</h2>
<p>${text}</p>
${Button({buttonShape: 'standard', label: 'Link button'})} 
</div>
`;
