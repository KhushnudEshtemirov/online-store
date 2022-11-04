import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">
      <Link to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
    </h1>
    <div className="preview">
      {items
        .filter((item, num) => num < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
