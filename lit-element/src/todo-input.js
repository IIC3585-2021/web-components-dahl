import { LitElement, css, html } from 'lit-element';

export default class TodoInput extends LitElement {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    static get styles() {
        return css`
            form {
                position: relative;
                font-size: 24px;
                border-bottom: 1px solid #ededed;
            }
            input[type=text] {
                padding: 16px 16px 16px 60px;
                border: none;
                background: rgba(0, 0, 0, 0.003);
                position: relative;
                margin: 0;
                width: 100%;
                font-size: 24px;
                font-family: inherit;
                font-weight: inherit;
                line-height: 1.4em;
                border: 0;
                outline: none;
                color: inherit;
                padding: 6px;
                border: 1px solid #CCC;
                box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
                box-sizing: border-box;
            }
        `
      }

    onSubmit(e) {
        const $input = this.shadowRoot.querySelector('input');
        e.preventDefault();
        if (!$input.value) return;
        this.dispatchEvent(new CustomEvent('submit', { detail: $input.value }));
        $input.value = '';
    }

    render() {
        return html`
        <form id="new-todo-form" @submit="${this.onSubmit}">
            <input type="text" placeholder="Añade un nuevo item" />
        </form>
      `;
    }
}
