import React, { Component } from "react";
import { Input, Button, SearchHeader, MessageNotFound } from "../styles/styles";

class SearchContact extends Component {
  state = {
    searchValue: "",
    searchValueNotFound: false,
    id: "",
  };

  onChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  showMessageNotFound = () => {
    return <MessageNotFound>Not found</MessageNotFound>;
  };

  searchContact = (event) => {
    const contact = this.props.contacts;
    const searchValue = this.state.searchValue.trim();
    const cardId = [];

    if (searchValue != "") {
      contact.forEach((elem) => {
        Object.entries(elem).forEach(([key, field]) => {
          if (String(field).search(searchValue) != -1) {
            cardId.push(elem.id);
            this.props.updateData(cardId);
          }
        });
      });
      if (!cardId.length) {
        this.setState({
          searchValueNotFound: true,
        });
        setTimeout(() => this.setState({ searchValueNotFound: false }), 5000);
      }
    }
  };

  render() {
    const { searchValueNotFound } = this.state;
    return (
      <SearchHeader>
        {searchValueNotFound && this.showMessageNotFound()}
        <Input
          type={"text"}
          name={"searchValue"}
          onChange={this.onChange}
          value={this.state.searchValue}
        />
        <Button type={"button"} onClick={this.searchContact}>
          Find
        </Button>
        <Button type={"button"} onClick={this.props.resetContactList}>
          Reset
        </Button>
      </SearchHeader>
    );
  }
}

export default SearchContact;
