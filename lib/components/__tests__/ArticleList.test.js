import React from "react";

import ArticleList from "../ArticleList";

import { shallow } from "enzyme";

describe("ArticleList", () => {

    const testProps = {
        articles: {
            a: { id: "articleA", date: "01/01/01", title: "Article A", body: "body" },
            b: { id: "articleB", date: "01/01/01", title: "Article B", body: "body" }
        }
    };

    it("renders correctly", () => {
        const wrapper = shallow(
            <ArticleList {...testProps} />);

        expect(wrapper.find("ArticleContainer").length).toBe(2);

        expect(wrapper).toMatchSnapshot();
    });
});