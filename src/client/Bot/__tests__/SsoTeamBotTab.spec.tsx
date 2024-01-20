import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { SsoTeamBotTab } from "../SsoTeamBotTab";

describe("SsoTeamBot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<SsoTeamBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<SsoTeamBotTab />);
        const divResult = component.containsMatchingElement(<Header content="Welcome to the  bot page" />);
        expect(divResult).toBeTruthy();
    });
});
