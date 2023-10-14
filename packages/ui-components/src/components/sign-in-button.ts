import { html } from 'lit';
import { BaseElement } from '../base';
import { property } from 'lit/decorators.js';

export class SignInButton extends BaseElement {
  @property({ type: String })
  url = '/api/auth/github';

  _handleClick = () => {
    window.location.href = this.url;
  };

  render() {
    return html`<button
      @click="${this._handleClick}"
      class="p-2 h-10 border-2 bg-neutral-800 border-solid border-white"
    >
      <p class="font-bold text-white text-l">Sign in with Github</p>
    </button>`;
  }
}
