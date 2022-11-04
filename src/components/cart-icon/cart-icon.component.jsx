import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";


const CartIcon = ({ toggleCartHidden, cartItems }) => (
  <CartIconContainer className="option" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <ItemCount>{cartItems}</ItemCount>
  </CartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
