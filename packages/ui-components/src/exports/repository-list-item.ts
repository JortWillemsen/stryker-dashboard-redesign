import { RepositoryListItem } from "../components/repository-list-item";

declare global {
  interface HTMLElementTagNameMap {
    'repository-list-item': RepositoryListItem;
  }
}

customElements.define('repository-list-item', RepositoryListItem);