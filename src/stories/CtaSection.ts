import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './Card'
import image from '../stories/assets/Image.png'

@customElement('cta-section')
export class CtaSection extends LitElement {
  static styles = css`
  .cta {
    width: 100%;
  }
  .cta h1 {
    font-family: 'Playfair Display', serif;
    color: #101d21;
    display: flex;
    margin-left: 30px;
    margin-top: 10px;
    position: relative;
  }

  .cta h1::before {
    content: "";
    position: absolute;
    top: 0;
    left: -10px;
    width: 4px;
    height: 100%;
    background-color: red;
  }

  .cta .cta--card-row {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    border-radius: 10px;
  }

  .cta--card-row .image {
    width: 100%;
    display: block; 
  }
  .cta .contact {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;
    background-color: #304d6d;
    border-radius: 10px;
    color: white;
  } 
  .cta .contact::before {
    content: "";
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #304d6d transparent;
  }
  
  .cta .contact::after {
    content: "";
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #304d6d transparent;
  }
  .cta .contact button {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: flex-start;
    background-color: #304d6d;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    .cta {
      max-width: 1400px;
      margin: auto;
    }
    .cta h1 {
      justify-content: start;
      margin-left: 200px;
      font-size: 36px;
      margin-top: auto;
    }
    .cta .cta--card-row {
        max-height: 500px;
        display: flex;
        flex-direction: row;
        border-radius: 0;
    }
    .cta .cta--card-row card-component {
      width: 50%;
      height: auto; 
      padding: 150px 100px 150px 180px;
      background-color: gainsboro;
    }
    .cta .cta--card-row .image {
      width: 50%;
      height: auto; 
      max-width: 100%; 
      display: block; 
      object-fit: cover;
    }
    .cta .contact {
      height: 250px;
      display: flex;
      align-items: flex-start;
      margin-top: 20px;
      padding: 10px;
      padding-left: 200px;
      padding-right: 30px;
      border-radius: 0;
    } 
    .cta .contact::before {
      left: 200px;
    }
    .cta .contact::after {
      left: 200px;
    }
    .cta .contact h2 {
      font-size: 24px;
      line-height: 30px;
    }
    .cta .contact button {
      margin: 20px 0;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .cta {
      width: 100%;
    }
    .cta .cta--card-row {
      flex-direction: row-reverse;
      border-radius: 0;
      // box-sizing: border-box;
    }
    .cta .cta--card-row card-component {
      justify-content: center;
      width: 50%;
      height: auto; 
      padding: 40px;
      background-color: gainsboro;
    }
    .cta .contact {
      height: 150px;
      margin-top: 20px;
      padding-left: 30px;
    } 
    .cta .contact::before {
      left: 55%;
    }
    .cta .contact::after {
      left: 55%;
    }
  }
  `;

  
  private isDivOpen = false;

  handleOpenContact() {
    this.isDivOpen = true;
    this.requestUpdate();
  }
  
  handleCloseContact() {
    this.isDivOpen = false;
    this.requestUpdate();
  }
  

  render() {
    return html`
      <section class='cta'>
      <div class="header">
        <h1>Cta - Main conversion</h1>
      </div>
        <div class='cta--card-row'>
          <card-component class="test"
            heading="A wonderful serenity has taken possession" 
            texts="A wonderful serenity has taken possession of my entire soul, like these sweet mo"
            buttonLabel="Link button"
            @card-button-click="${this.handleOpenContact}"
          ></card-component> 
          <img class="image" src=${image} />
        </div>
        ${this.isDivOpen
          ? html`<div class="contact">
          <h2>Contact Us</h2>
          <button
            type="button"
            @click="${this.handleCloseContact}"
            >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
            <path fill="none" stroke="white" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          </div>`
          : ''}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cta-section': CtaSection;  
  }
}
