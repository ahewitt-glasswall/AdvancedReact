"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class StateApi {
    constructor(rawData) {
        this.subscribe = callback => {
            this.lastSubscriptionId++;
            this.subscriptions[this.lastSubscriptionId] = callback;
            return this.lastSubscriptionId;
        };

        this.unsubscribe = subscriptionId => {
            delete this.subscriptions[subscriptionId];
        };

        this.notifySubscribers = () => {
            Object.values(this.subscriptions).forEach(callback => callback());
        };

        this.mergeWithState = stateChange => {
            this.data = _extends({}, this.data, stateChange);

            this.notifySubscribers();
        };

        this.setSearchTerm = searchTerm => {
            this.mergeWithState({ searchTerm });
        };

        this.startClock = () => {
            setInterval(() => {
                this.mergeWithState({
                    timestamp: new Date()
                });
            }, 1000);
        };

        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: "",
            timestamp: new Date()
        };

        this.subscriptions = {};
        this.lastSubscriptionId = 0;

        setTimeout(() => {
            const fakeArticle = _extends({}, rawData.articles[0], {
                id: "fake"
            });
            //this.data.articles[fakeArticle.id] = fakeArticle;
            this.data = _extends({}, this.data, {
                articles: _extends({}, this.data.articles, {
                    [fakeArticle.id]: fakeArticle
                })
            });
            this.notifySubscribers();
        }, 1000);
    }

    mapIntoObject(arr) {
        return arr.reduce((accumulator, current) => {
            accumulator[current.id] = current;
            return accumulator;
        }, {});
    }

    lookupAuthor(authorId) {
        return this.data.authors[authorId];
    }

    getState() {
        return this.data;
    }

}

exports.default = StateApi;