import { LitElement, html } from 'lit-element';

export class SellItem extends LitElement {

  static get properties() {
    return {
      name: {
        type: String,
        attrName: 'name'
      },
      img: {
        type: String,
        attrName: 'img'
      },
      new_price: {
        type: String,
        attrName: 'new_price'
      },
      old_price: {
        type: String,
        attrName: 'old_price'
      }
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

//customElements.define('sell-item', SellItem);
