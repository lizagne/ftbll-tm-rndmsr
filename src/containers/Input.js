import { connect } from "react-redux";
import Input from '../components/Input';

import { updateInput, addName } from "../data/actions";

const mapStateToProps = state => ({
	input: state.get("input",)
});

const mapDispatchToProps = dispatch => ({
	onChange: e => dispatch(updateInput(e.target.value)),
	onClick: input => dispatch(addPlayer(input)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Input);

