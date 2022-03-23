import HomePage from "../pages/HomePage";
import { connect } from "react-redux";
import { addToCart } from "../services/actions/actions";

function HomeContainer(props) {
    console.log("Home container",props)
  return <HomePage {...props}/>;
}
const mapStateToProps = (state) => ({
  data:state,
});
const mapDispatchToProps = (dispatch) => ({
  reduxData: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
