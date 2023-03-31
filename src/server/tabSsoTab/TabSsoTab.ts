import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/tabSsoTab/index.html")
@PreventIframe("/tabSsoTab/config.html")
@PreventIframe("/tabSsoTab/remove.html")
export class TabSsoTab {
}
