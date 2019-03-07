import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
  }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDataSubmit = e => {
    e.preventDefault();
    console.log(this.state.item);
    this.props.onRecipesFetch(this.state.item);
  };

  render() {
    return (
      <div>
        <div className="recipe-search-container">
          <div className="form-container ">
            <form onSubmit={this.handleDataSubmit}>
              <input
                type="search"
                name="item"
                placeholder="Enter Items for recipes"
                onChange={this.onHandleChange}
                className="form-items"
              />
              <input
                type="submit"
                value="Search"
                className="btn-grp"
                onClick={this.handleDataSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
