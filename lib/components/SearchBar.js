import React from "react";
import debounce from "lodash.debounce";

import storeProvider from "./storeProvider";

class SearchBar extends React.PureComponent {
    state = {
        searchTerm: ""
    };

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value }, () => {
            this.doSearch();
        });
    }

    doSearch = debounce(() => {
        this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300)


    render() {
        return (
            <input
                type="search"
                placeholder="Enter search term"
                value={this.state.searchTerm}
                onChange={this.handleSearch} />
        );
    }
}

export default storeProvider()(SearchBar);