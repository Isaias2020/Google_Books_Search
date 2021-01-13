// import React, { Component } from "react";
import React from "react";
import Form from "../components/Form";
// import Wrapper from "../components/Wrapper";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        books: []
    };

    componentDidMount() {
        this.searchBook();
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        console.log("this.state.books: " + this.state.books)
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Results books={this.state.books} />
            </div>
        )
    }
}

export default Search;