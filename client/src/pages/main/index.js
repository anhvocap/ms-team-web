import * as microsoftTeams from '@microsoft/teams-js';
import { Button } from '@fluentui/react-components';
import { fetchToken } from '../../services/authService';

function Main() {
  const clickMe = async () => {
    try {
      console.log('clickMe...');

      microsoftTeams.app.initialize();
      console.log('- app:', microsoftTeams.app);

      // get current user
      const context = await app.getContext();
      console.log('- context:', context);
      let { user } = context;
      console.log('- user:', user.userPrincipalName);

      var authTokenRequest = {
        successCallback: function(result) { console.log("Success: " + result); },
        failureCallback: function(error) { console.log("Error getting token: " + error); }
      };
      const res_token = await microsoftTeams.authentication.getAuthToken(authTokenRequest);
      console.log(res_token);

      const res_user = await microsoftTeams.authentication.getUser();
      console.log(res_user);

    } catch (err) {
      console.log('ERROR:', err);
    }
  }

  const authenticate = async () => {
    try {
      let res = await fetchToken();
    } catch (err) {
      throw err;
    }
  }

  return (
    <div>
      <div>
        <Button onClick={clickMe}>Click Me</Button>
      </div>
      <div>
        <Button onClick={authenticate}>Authenticate</Button>
      </div>
    </div>
  );
}

export default Main;
