import { LitElement, html } from 'lit-element';

export default class TodoInput extends LitElement {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        const $input = this.shadowRoot.querySelector('input');
        e.preventDefault();
        if (!$input.value) return;
        this.dispatchEvent(new CustomEvent('submit', { detail: $input.value }));
        $input.value = '';
    }

    render(props) {
        return html`
        <form @submit="${this.onSubmit}">
            <input type="text" placeholder="What needs to be done?" />
        </form>
      `;
    }
}
