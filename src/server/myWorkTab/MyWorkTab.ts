import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/myWorkTab/index.html")
@PreventIframe("/myWorkTab/config.html")
@PreventIframe("/myWorkTab/remove.html")
export class MyWorkTab {
}
