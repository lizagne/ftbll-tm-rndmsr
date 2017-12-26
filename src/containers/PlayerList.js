import { connect } from "react-redux";
import PlayerList from "../components/PlayerList";
import { deletePlayer } from "../data/actions";

const mapStateToProps = state => ({
    playerList: state.get("players"),
});

const mapDispatchToProps = (dispatch) => ({
	onClick: (id) => dispatch(deletePlayer(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);