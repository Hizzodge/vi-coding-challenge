import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('card-component')
export class Card extends LitElement {
  @property({type: 'string'})
    heading: string = '';
  @property({type: 'string'})
    texts: string = '';
  @ property({type: 'string'})
    buttonLabel: string = '';
  handleClick() {
    const event = new CustomEvent('card-button-click', {
      bubbles: true,
      composed: true,
      detail: {
      },
    });
    this.dispatchEvent(event);
  }
  static styles = css`
    .card {
      font-family: 'Playfair Display', serif;
      color: #101d21;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 30px 24px;
      align-items: center;
      background-color: gainsboro;
  
      h2 {
        font-size: 20px;
        margin-bottom: 0;
      }
  
      p {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
      }
  
      button {
        width: fit-content;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 12px;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        border: 0;
        cursor: pointer;
        line-height: 14px;
        color: white;
        background-color: #101d21;
        padding: 10px 20px
      }
    
  
      @media only screen and (min-width: 768px) {
        text-align: start;
        align-items: flex-start;
  
        h2 {
          font-size: 24px;
        }
  
        p {
         font-size: 16px;
        }
  
      }
    }
  `;

  
  render() {
    return html`
      <div class="card">
        <h2>${this.heading}</h2>
        <p>${this.texts}</p>
        <button
          type="button" @click="${this.handleClick}"
          >
          ${this.buttonLabel}
        </button>
      </div>
    `;
  }
}

