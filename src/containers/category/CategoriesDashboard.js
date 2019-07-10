import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as categoriesActions from "../../redux/actions/category/categoriesActions";

class CategoriesDashboard extends React.Component {

  componentDidMount = () => {
    this.props.actions.getCategories();
  }

  render(){
    return (
      <div>
        {this.props.categories ? this.props.categories.length : '-'}
      </div>
    )
  }
};

CategoriesDashboard.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  errorMessage: PropTypes.string
};

const mapStateToProps = (state, _ownProps) => ({
  categories: state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(categoriesActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesDashboard)