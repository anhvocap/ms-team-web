# microsoft team app
- App WorkForce Management
- Node version = 18
- Fluent UI version 9
- hosting on azure: https://cubeet-work-dev.azurewebsites.net

### upgrade package.json to latest version
- npm install -g npm-check-updates
- ncu -u
- npm install

### FluentUI v9
- github: https://github.com/microsoft/fluentui
- npm: https://www.npmjs.com/package/@fluentui/react-components
- https://learn.microsoft.com/en-us/azure/communication-services/quickstarts/manage-teams-identity?pivots=programming-language-csharp
- https://learn.microsoft.com/en-us/partner-center/marketplace/azure-ad-transactable-saas-landing-page
- https://learn.microsoft.com/en-us/partner-center/marketplace/azure-ad-saas

### Learning Figma, Team UI Toolkit
- https://learn.microsoft.com/en-us/fluent-ui/web-components/
- https://learn.microsoft.com/en-us/microsoftteams/platform/toolkit/integrate-with-developer-portal

### Develop Microsoft Team App
- mstdd landing page
- https://learn.microsoft.com/en-us/microsoftteams/platform/mstdd-landing
- Authenticate users in Microsoft Teams
- https://learn.microsoft.com/en-us/microsoftteams/platform/concepts/authentication/authentication
- Enable SSO for tab app
- https://learn.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/tab-sso-overview


### Microsoft Identity Platform
- Introduction to permissions and consent
- https://learn.microsoft.com/en-gb/azure/active-directory/develop/permissions-consent-overview?WT.mc_id=Portal-Microsoft_AAD_RegisteredApps
- Getting Started with Microsoft Identity
- https://learn.microsoft.com/en-us/training/modules/getting-started-identity/?WT.mc_id=m365-16105-cxa
- Microsoft identity platform and OAuth 2.0 authorization code flow
- https://learn.microsoft.com/en-gb/azure/active-directory/develop/v2-oauth2-auth-code-flow

### Tutorial: Sign in users and call the Microsoft Graph API from a React single-page app (SPA) using auth code flow
- https://learn.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react

### Learning Microsoft Graph API:
- https://learn.microsoft.com/en-us/graph/?WT.mc_id=m365-16105-cxa
- https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread
- https://learn.microsoft.com/en-us/training/modules/msgraph-user-photo-information/3-exercise-access-user-profile-photo
- https://github.com/MicrosoftDocs/mslearn-retrieve-m365-data-with-msgraph-quickstart


### Microsoft Graph API explorer (using version 2.0)
- Guide     :  https://learn.microsoft.com/en-us/graph/auth/auth-concepts
- Preview   :  https://developer.microsoft.com/en-us/graph/graph-explorer
- version 1 :  https://login.microsoftonline.com/${TENANT_ID}/oauth2/token
- version 2 :  https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token


### Setup app only access to SharePoint, there are two approaches:
- Granting access via Azure AD App-Only
- Granting access using SharePoint App-Only
- https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly
- https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread
- https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs
- Watch Youtube:
- https://www.youtube.com/watch?v=-wjlgxJIlWQ&ab_channel=MicrosoftReactor
- https://www.youtube.com/watch?v=eizdN6XNyvw&ab_channel=MicrosoftReactor


### Solution 1: App Registration via Azure AD App-Only
### App Registration via Azure AD App-Only
- run ps to generate self certificate with administrator: .\Create-SelfSignedCertificate.ps1 -CommonName "Cubeet" -StartDate 2023-01-01 -EndDate 2025-12-31
- enter password for private key: cubeet&&&workforce@@@2023
- login to Azure AD to register new application
- Tenant ID          :  f055188a-0916-40fd-aeed-2ba499834c94
- App Display Name   :  cubeet-api-access
- Application ID     :  f50bebee-b729-43fd-b01b-a3da4bc77250
- Client Credential  :  upload client certificate
- Client Secret      :  api_query / 291a6566-6c15-40e4-84d1-22e64705227d / HKq8Q~2MDu42ARyeocQXzJzkvhUnLlf7cU46lcno

### Solution 2: App Registration using SharePoint App-Only principal
- 1. Generate client id & client secret:
- https://cubeetapp.sharepoint.com/sites/workforce/_layouts/15/appregnew.aspx
The app identifier has been successfully created.
Client Id      :  	bcd05d81-ecd7-4788-9360-3f6463319199
Client Secret  :  	Kfz48uH9h+qFTcOzaVV8nYK6zZ1WeCK7ixsdBRmJRhk=
Title          :  	Cubeet Workforce
App Domain     :  	cubeet-work-dev.azurewebsites.net
Redirect URI   :  	https://cubeet-work-dev.azurewebsites.net

- 2. Assign site collection permission
- Tenant: https://cubeetapp-admin.sharepoint.com/_layouts/15/appinv.aspx
- or Site Collection: https://cubeetapp.sharepoint.com/sites/workforce/_layouts/15/appinv.aspx
<AppPermissionRequests AllowAppOnlyPolicy="true">
   <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl"/>
   <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/>
</AppPermissionRequests>

### Using Microsoft Graph API to access SharePoint Site Collection
- https://learn.microsoft.com/en-us/graph/api/site-get?view=graph-rest-1.0&tabs=http

### using ngrok
- https://ngrok.com/download
- https://e7f8-2001-ee0-5002-2870-48da-4885-69e2-649d.ap.ngrok.io
