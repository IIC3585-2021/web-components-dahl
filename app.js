const template = document.createElement('template');
template.innerHTML = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<style>
h1{
    color:red;
}
.col{
    display: inline-block;
}
</style>
<div class="col">
<div class="card" style="width: 18rem;">
    <img class="card-img-top" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"><slot name="new_price" /></p>
        <p class="card-text"><slot name="old_price" /></p>
        <i class="bi bi-star-fill"></i>
    </div>
</div>
</div>`

class SellItem extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {       // Se invoca cuando se llame al componente
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h5').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('img');
        
    }

    // DisconnectedCallback: ej para cuando se quite al child 
    // attributeChangedCallback (nombre, viejoValor, nuevoValor)
    // static get observedAttributes(){ return ['xx']}
 }

window.customElements.define('sell-item', SellItem)