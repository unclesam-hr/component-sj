import React from 'react';
import SearchHeader from './SearchHeader.jsx';
import TopHeader from './TopHeader.jsx';
import CategoryHeader from './CategoryHeader.jsx';
import PromoHeader from './PromoHeader.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: ""
    };

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseEnter(e) {
    this.setState({ menuItem: e.target.id });
  }
  
  onMouseLeave() {
      this.setState({menuItem: ''})
  }
  render() {
   
   
    return (
      <div id="header">
        <TopHeader />
        <SearchHeader />
        <CategoryHeader />
        <PromoHeader />
      </div>
    );
  }
}

export default App;