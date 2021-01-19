import React, { Component } from "react";
import API from "../utils/API";
// import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedBooks: [],
    }

    componentDidMount() {
        this.searchBook();
    }

    searchBook = query => {
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items }))
            .catch(err => console.log(err));
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description,
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    // componentDidMount() {
    //     API.savedBooks()
    //         .then(savedBooks => this.setState({ savedBooks: savedBooks }))
    //         .catch(err => console.error(err));
    // }

    render() {
        return (
            <div className="container">
                <div savedBooks={this.state.savedBooks}> </div>
            </div>
        )
    }
}

export default Saved;