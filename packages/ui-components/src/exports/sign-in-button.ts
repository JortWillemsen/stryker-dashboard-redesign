import { SignInButton } from '../components/sign-in-button';

declare global {
  interface HTMLElementTagNameMap {
    'sign-in-button': SignInButton;
  }
}

customElements.define('sign-in-button', SignInButton);
