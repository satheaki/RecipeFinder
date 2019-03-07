import { connect } from "react-redux";
import Search from "../Search";
import { fetchRecipes } from "../../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    onRecipesFetch: searchinput => {
      dispatch(fetchRecipes(searchinput));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
