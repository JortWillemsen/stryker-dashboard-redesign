import { RepositoryList } from "../components/repository-list";

declare global {
  interface HTMLElementTagNameMap {
    'repository-list': RepositoryList;
  }
}

customElements.define('repository-list', RepositoryList);