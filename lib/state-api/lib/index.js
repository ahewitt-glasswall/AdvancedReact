class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors)
        };
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

export default StateApi;