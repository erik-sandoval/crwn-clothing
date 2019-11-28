import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CustomButtonStyle,
  BackgroundImageDiv,
  CollectionFooterDiv,
  CollectionItemDiv,
  NameSpan,
  PriceSpan
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemDiv>
      <BackgroundImageDiv imageUrl={imageUrl} />
      <CollectionFooterDiv>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterDiv>
      <CustomButtonStyle onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonStyle>
    </CollectionItemDiv>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
