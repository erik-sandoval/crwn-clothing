import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { shopCollectionsSelector } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...OtherCollectionProps }) => (
        <CollectionPreview key={id} {...OtherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: shopCollectionsSelector
});

export default connect(mapStateToProps)(ShopPage);
