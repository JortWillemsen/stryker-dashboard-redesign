import {html } from 'lit';
import { BaseElement } from '../base';
import { property } from 'lit/decorators.js';
import { HeroButton } from './hero-button';

customElements.define('hero-button', HeroButton);
export class RepositoryListItem extends BaseElement{
    @property({type: String})
    name: string = '';
    render(){
        return html`
        <li class="flex border-b-2 border-neutral-700 w-4/5 max-w-xl p-3 hover:brightness-105 hover:bg-neutral-700/20 transition-colors px-4 justify-between content-center hover:rounded">
            <label class="text-gray-300">${this.name}</label>
            <hero-button priority="secondary" text="enable"></hero-button>
        </li>
        `;
    }
}