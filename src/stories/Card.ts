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
      width: fit-content;
      height: 100%;
      font-family: 'Playfair Display', serif;
      color: #101d21;
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      background-color: gainsboro;
      padding: 20px;
  
      h2 {
        font-size: 20px;
        margin: 0;
      }
  
      p {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
        margin-bottom: 40px
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
        padding: 10px 20px;
        border-radius: 10px;
      }
    
  
      @media only screen and (min-width: 768px) {
        text-align: start;
        align-items: flex-start;
  
        h2 {
          font-size: 24px;
          line-height: 30px;
        }
  
        p {
         font-size: 16px;
         letter-spacing: -1px;
        line-height: 18px;
        }

        button {
          border-radius: 0;
        }
  
      }
      @media only screen and (min-width: 768px) and (max-width: 1024px) {
       justify-content: center;
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

