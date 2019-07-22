import React from "react";
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      searchResults: []
    };

    this.handleChange = this.handleChange.bind(this)
    this.getSearchResults = this.getSearchResults.bind(this)
  }

  getSearchResults(text) {
    axios.post('/api/search', {text: text})
        .then((data) => {
          
            this.setState({
                searchResults: data.data
            })
        })
        .catch( err => console.error('Could not fetch data', err));
    }
  

  handleChange(event) {
    this.setState({text: event.target.value})
    if(event.target.value.length < 3) {
      this.setState({searchResults: []})
    } else {
      this.getSearchResults(event.target.value)
    }
  }

  

  render() {
    return (
      <div className="search-box-container">
       <div className="search">
        <form  >
            <svg
              width="21px"
              height="20px"
              viewBox="0 0 21 20"
              role="img"
              version="1.1"
              aria-labelledby="title"
              className="icon-search">
              <title id="title">search</title>
              <desc>Click to search for products.</desc>
              <g
                className="we-icon__search-outer"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                transform="translate(-99.000000, -120.000000)">
                <g
                  className="we-icon__search"
                  transform="translate(99.000000, 119.000000)">
                  <g
                    className="we-icon__search-inner"
                    transform="translate(0.000000, 0.681600)" >
                    <g />
                    <path
                      d="M8.4307,1.7187 C4.5537,1.7187 1.4007,4.8717 1.4007,8.7487 C1.4007,12.6247 4.5537,15.7787 8.4307,15.7787 C12.3067,15.7787 15.4597,12.6247 15.4597,8.7487 C15.4597,4.8717 12.3067,1.7187 8.4307,1.7187 M8.4307,17.1787 C3.7827,17.1787 -0.0003,13.3977 -0.0003,8.7487 C-0.0003,4.1007 3.7827,0.3187 8.4307,0.3187 C13.0787,0.3187 16.8607,4.1007 16.8607,8.7487 C16.8607,13.3977 13.0787,17.1787 8.4307,17.1787"
                      className="we-icon__search-path"
                      fill="#363636"
                    />
                  </g>
                  <polygon
                    id="we-icon__search-polygon"
                    className="we-icon__search-polygon"
                    fill="#363636"
                    points="19.793 20.6816 13.6 15.0496 14.541 14.0146 20.734 19.6466"
                  />
                </g>
              </g>
            </svg>
            <input
              type="text"
              id="search-field"
              name="words"
              aria-label="Search"
              placeholder="What can we help you find?"
              maxLength="100"
              autoCorrect="no"
              autoComplete="no"
              value={this.state.text}
              onChange={this.handleChange}/>
              {this.state.searchResults.length === 0 ? <span>{null}</span> : <ul className="search-list">     
              
              
              {this.state.searchResults.map((results, index) =>
                <li key={index} className="search-list-item">{results}</li> 
              )}
                </ul>
              }
           
        </form>
      </div>
      </div>
    );
  }
}
export default Search;
