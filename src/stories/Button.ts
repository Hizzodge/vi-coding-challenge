import { TemplateResult, html } from 'lit';
import './button.css';

export interface ButtonProps {
  buttonShape: 'standard' | 'icon';
  label: string | TemplateResult;
  onClick?: () => void;
}

export const Button = ({ buttonShape, label, onClick }: ButtonProps) => {
  return html`
    <button
      type="button"
      class=${['button',`button--${buttonShape || 'standard'}`].join(' ')}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
