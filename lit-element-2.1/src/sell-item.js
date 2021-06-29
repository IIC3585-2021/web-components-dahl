import { LitElement, css, html } from 'lit-element';

export default class SellItem extends LitElement {

  static get styles() {
    return css`
      h1 {
        color:red;
      }
      .col{
          display: inline-block;
      }
    `
  }

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
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.new_price}</p>
                <p class="card-text">Normal: ${this.old_price}</p>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
      </div>
    `;
  }
}
