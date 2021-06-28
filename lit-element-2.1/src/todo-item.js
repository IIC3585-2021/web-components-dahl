import { LitElement, html } from 'lit-element';

export default class TodoItem extends LitElement {

    static get properties() {
        return {
            text: {
                type: String,
                attrName: 'text'
            },
            checked: {
                type: Boolean,
                attrName: 'checked'
            },
            index: {
                type: Number,
                attrName: 'index'
            },
        };
    }

    constructor() {
        super();
        this.onRemove = this.onRemove.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    onRemove() {
        this.dispatchEvent(new CustomEvent('remove', { detail: this.index }));
    }

    onToggle() {
        this.dispatchEvent(new CustomEvent('toggle', { detail: this.index }));
    }

    render() {
        return html`
            <li>
                <input type="checkbox" .checked=${this.checked} @click="${this.onToggle}">
                <label>${this.text}</label>
                <button @click="${this.onRemove}">x</button>
            </li>
      `;
    }
}
