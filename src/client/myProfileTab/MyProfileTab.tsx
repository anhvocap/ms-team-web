import * as React from "react";
import { Provider, Flex, Text, Button, Header, List } from "@fluentui/react-northstar";
import { makeStyles, Image, Title3, Body1Strong, Caption1 } from "@fluentui/react-components";
import { provideFluentDesignSystem, fluentCard } from '@fluentui/web-components';
import { useState, useEffect, useCallback } from "react";
import { useTeams } from "msteams-react-base-component";
import { app, authentication } from "@microsoft/teams-js";
import jwtDecode from "jwt-decode";

//const noImage = 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg';
const noImage = 'https://aws-product-images.s3.amazonaws.com/employee/no-image.png';

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      rowGap: "5px",
      marginLeft: '25%',
      marginRight: '25%',
    },
    boxInfo: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
    },
    boxRequest: {
      display: "flex",
      flexDirection: "column",
      alignItems: 'center',
      minHeight: '50px',
      marginTop: '20%',
    },
});

/**
 * Implementation of the my work content page
 */
export const MyProfileTab = () => {
    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();
    const [name, setName] = useState<string>();
    const [error, setError] = useState<string>();

    const styles = useStyles();

    useEffect(() => {
        if (inTeams === true) {
            authentication.getAuthToken({
                resources: [process.env.TAB_APP_URI as string],
                silent: false
            } as authentication.AuthTokenRequestParameters).then(token => {
                const decoded: { [key: string]: any; } = jwtDecode(token) as { [key: string]: any; };
                setName(decoded!.name);
                app.notifySuccess();
            }).catch(message => {
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
                    <Header content="My Profile" />
                </Flex.Item>
                <Flex.Item>
                    <div className={styles.boxInfo}>
                        <Image
                            alt={'noImage'}
                            shape="circular"
                            src={noImage}
                            height={240}
                            width={240}
                        />
                        <Title3>abc</Title3>
                        <Body1Strong>Welcome: abc</Body1Strong>
                        <Body1Strong>Email: abc</Body1Strong>
                        <Button>Profile Detail</Button>
                        <Caption1>Go to Profile Detail</Caption1>
                    </div>
                </Flex.Item>
                <Flex.Item styles={{
                    padding: ".8rem 0 .8rem .5rem"
                }}>
                    <Text size="smaller" content="(C) Copyright Cubeet" />
                </Flex.Item>
            </Flex>
        </Provider>
    );
};
