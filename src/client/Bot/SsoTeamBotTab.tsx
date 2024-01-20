import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useTeams } from "msteams-react-base-component";
import { useState, useEffect } from "react";
import { app } from "@microsoft/teams-js";

/**
 * Implementation of the ssoTeamBot content page
 */
export const SsoTeamBotTab = () => {
    const [{ inTeams, theme }] = useTeams();

    useEffect(() => {
        if (inTeams === true) {
            app.notifySuccess();
        }
    }, [inTeams]);

    return (
        <Provider theme={theme}>
            <Flex fill={true} column styles={{
                padding: ".8rem 0 .8rem .5rem"
            }}>
                <Flex.Item>
                    <Header content="Welcome to the  bot page" />
                </Flex.Item>
                <Flex.Item>
                    <div>
                        <Text content="TODO: Add you content here" />
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
