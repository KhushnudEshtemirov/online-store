import React from "react";
import MenuItem from "../menu-item/menu-item.component";

import DATA from "./directory.data";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      items: DATA,
    };
  }

  render() {
    const { items } = this.state;
    return (
      <div className="directory-menu">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            size={item.size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
