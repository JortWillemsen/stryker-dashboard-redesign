import {html } from 'lit';
import { BaseElement } from '../base';
// import { property } from 'lit/decorators.js';
import { RepositoryListItem } from './repository-list-item';

customElements.define('list-item', RepositoryListItem);
export class RepositoryList extends BaseElement{

    render(){
        return html`
        WOW
        <li class="text-white text-8xl flex border-b-2 border-neutral-700 w-4/5 max-w-xl p-3 hover:brightness-105 hover:bg-neutral-700/20 transition-colors px-4 justify-between content-center hover:rounded">
        NO   
        <list-item name="The List"></list-item>
        </li>
        `;
    }
}