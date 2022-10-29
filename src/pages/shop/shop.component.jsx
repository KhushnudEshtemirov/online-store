import React from "react";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import ITEMS from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ITEMS,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
