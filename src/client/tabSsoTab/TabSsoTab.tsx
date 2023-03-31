import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import { app, authentication } from "@microsoft/teams-js";
import jwtDecode from "jwt-decode";

/**
 * Implementation of the Tab SSO content page
 */
export const TabSsoTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();
    const [name, setName] = useState<string>();
    const [error, setError] = useState<string>();

    useEffect(() => {
        console.log('inTeams:', inTeams)
        if (inTeams === true) {
            console.log('AAAA');
            console.log('TAB_APP_URI:', 'api://75f2-171-252-155-217.ap.ngrok.io/2712d7dc-5bf8-4dfc-8a0c-b86f71b7c81d');
            authentication.getAuthToken({
                resources: ['api://75f2-171-252-155-217.ap.ngrok.io/2712d7dc-5bf8-4dfc-8a0c-b86f71b7c81d' as string],
                silent: false
            } as authentication.AuthTokenRequestParameters).then(token => {
                console.log('1111');
                const decoded: { [key: string]: any; } = jwtDecode(token) as { [key: string]: any; };
                setName(decoded!.name);
                app.notifySuccess();
            }).catch(message => {
                console.log('EEEE');
                setError(message);
                app.notifyFailure({
                    reason: app.FailedReason.AuthFailed,
                    message
                });
            });
        } else {
            setEntityId("Not in Microsoft Teams");
        }
    }, [inTeams]);

    useEffect(() => {
        if (context) {
            setEntityId(context.page.id);
        }
    }, [context]);

    /**
     * The render() method to create the UI of the tab
     */
    return (
        <Provider theme={theme}>
            <Flex fill={true} column styles={{
                padding: ".8rem 0 .8rem .5rem"
            }}>
                <Flex.Item>
                    <Header content="This is your tab" />
                </Flex.Item>
                <Flex.Item>
                    <div>
                        <div>
                            <Text content={`Hello ${name}`} />
                        </div>
                        {error && <div><Text content={`An SSO error occurred ${error}`} /></div>}

                        <div>
                            <Button onClick={() => alert("It worked!")}>A sample button</Button>
                        </div>
                    </div>
                </Flex.Item>
                <Flex.Item styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Text size="smaller" content="(C) Copyright voduyanh" />
                </Flex.Item>
            </Flex>
        </Provider>
    );
};
