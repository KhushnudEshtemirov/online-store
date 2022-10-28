import React from "react";

import Directory from '../directory/directory.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    )
  }
};

export default HomePage;