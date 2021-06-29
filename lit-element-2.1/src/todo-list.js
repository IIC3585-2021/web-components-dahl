import { LitElement, html } from 'lit-element';

export default class TodoList extends LitElement {
    constructor() {
        super();
        this.list = [
            { text: 'Primera', checked: false },
            { text: 'Segunda', checked: false },
            { text: 'Tercera', checked: true }
        ];
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.toggleItem = this.toggleItem.bind(this);
    }

    addItem(e, text) {
        this.list = [...this.list, { text, checked: false, }];
        this.requestUpdate('list');
    }

    removeItem(e, index) {
        this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
        this.requestUpdate('list');
    }

    toggleItem(e, index) {
        const list = [...this.list];
        const item = list[index];
        list[index] = Object.assign({}, item, { checked: !item.checked });
        this.list = list;
        this.requestUpdate('list');
    }

    render() {
        return html`
            <style>
                h1 {
                    font-size: 100px;
                    font-weight: 100;
                    text-align: center;
                    color: #ffff;
                }

                section {
                    background: #f5f5f5;
                    margin: 30px 0 40px 0;
                    position: relative;
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
                }

                #list-container {
                    margin: 0 0 0 0;
                    padding-top: 0;
                    list-style: none;
                    border-top: 1px solid #e6e6e6;
                }

                h3 {
                    font-size: 40px;
                    font-weight: 100;
                    text-align: left;
                    margin: 30px 0;
                    color: #ffff;
                }
            </style>

            <h1>Todos Lit Element</h1>
            <section>
                <todo-input @submit="${(e) => this.addItem(e, e.detail)}"></todo-input>
                ${this.list.map((item, index) => html`
                    <todo-item
                        .text=${item.text}
                        .checked=${item.checked}
                        .index=${index}
                        @remove="${(e) => this.removeItem(e, e.detail)}"
                        @toggle="${(e) => this.toggleItem(e, e.detail)}"
                    ></todo-item>`)}
                <ul id="list-container"></ul>
            </section>`;
    }
}
