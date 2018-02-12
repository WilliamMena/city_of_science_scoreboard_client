import React, {Component} from 'react';
import {connect} from 'react-redux'

class SessionDisplay extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }


  render() {
    return (
      <div>
        ID: {this.props.session.id}
        {console.log(this.props.session)}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const session = state.sessions.find(session => session.id == ownProps.match.params.sessionId)

  if (session) {
    return { session }
  } else {
    return { session: {} }
  }
}

export default connect(mapStateToProps)(SessionDisplay)
