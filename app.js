class SellItem extends HTMLElement {

    

    connectedCallback() {       // Se invoca cuando se llame al componente
        const name = this.getAttribute('name')
        const img = this.getAttribute('img')
        const new_price = this.getAttribute('new_price')
        const old_price = this.getAttribute('old_price')
        this.innerHTML = `
        <style>
        h1 {
            color: blue;
        }</style>
        <div class='item'>
            <img src=${img} />
            <h1>${name}</h1>
            <h2>${new_price}</h2>
            <h3>Normal: ${old_price}</h3>
            
            </div>`
    }

    // DisconnectedCallback: ej para cuando se quite al child 
    // attributeChangedCallback (nombre, viejoValor, nuevoValor)
    // static get observedAttributes(){ return ['xx']}
 }

window.customElements.define('sell-item', SellItem)