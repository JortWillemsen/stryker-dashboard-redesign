import { PageObject } from "../shared/page-object";

export class MutationScoreBadgePageObject extends PageObject {
  public readonly link = this.host.locator("a");
  public readonly img = this.host.locator("img");
}
