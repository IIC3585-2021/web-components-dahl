import { LitElement, html } from 'lit-element';

export class SellItem extends LitElement {

  static get styles() {
    return [css`
      h1 {
        color: blue;
      }
    `];
  }

  static get properties() {
    return {
      name: {type: String},
      img: {type: String},
      new_price: {type: String},
      old_price: {type: String}
    }
  }

  render() {
    return html`
      <div class='item'>
				<img src=${this.img} />
				<h1>${this.name}</h1>
				<h2>${this.new_price}</h2>
				<h3>Normal: ${this.old_price}</h3>			
      </div>
    `;
  }
}
customElements.define('sell-item', SellItem);
