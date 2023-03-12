import { Home } from "./Home";
import { connect } from "react-redux";
import { getAllProducts } from "../../State/Product/ProductActions";

let mapStateToProps = (state) => {
  return {
    Products: state.productReducer,
  };
};
let mapDispatchToStore = (dispatch) => {
  return {
    allProducts: (products) => {
      dispatch(getAllProducts(products));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToStore)(Home);
