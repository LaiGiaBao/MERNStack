import Cart from "./Cart";
import { connect } from "react-redux";
import { showCart, removeProductFromCart } from "../../State/Cart/CartActions";

let mapStateToProps = (state) => {
  return {
    Cart: state.cartReducer,
  };
};

let mapDispatchToStore = (dispatch) => {
  return {
    showAllProduct: () => {
      dispatch(showCart());
    },
    removeProduct: (product) => {
      dispatch(removeProductFromCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToStore)(Cart);
