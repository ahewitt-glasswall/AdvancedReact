"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ArticleList = require("../ArticleList");

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("ArticleList", () => {

    const testProps = {
        articles: {
            a: { id: "articleA", date: "01/01/01", title: "Article A", body: "body" },
            b: { id: "articleB", date: "01/01/01", title: "Article B", body: "body" }
        }
    };

    it("renders correctly", () => {
        const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ArticleList2.default, testProps));

        expect(wrapper.find("ArticleContainer").length).toBe(2);
    });
});