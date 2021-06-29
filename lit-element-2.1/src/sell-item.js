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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <div class="col">
        <div class="card" style="width: 18rem;">
            <img src="${this.img}" class="card-img-top" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.new_price}</p>
                <p class="card-text">Normal: <del>${this.old_price}</del></p>
                <i class="bi bi-star-fill"></i>
            </div>
        </div>
      </div>
    `;
  }
}
