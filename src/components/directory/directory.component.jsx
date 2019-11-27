import React, { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
