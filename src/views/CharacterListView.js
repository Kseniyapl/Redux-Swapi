import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getData } from "../actions";

class CharacterListView extends React.Component {
 

  componentDidMount() {
    // call our action
    console.log(this.props.getData())
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>
          <p>Fetching Data</p>
        </div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return{
    characters: state.charsReducer.characters,
    fatching: state.charsReducer.fatching
  }
}
export default connect(
  mstp, { getData })(CharacterListView); /* mapStateToProps replaces null here */
  
    /* action creators go here */
   

