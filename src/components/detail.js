import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as DetailActions from '../actions/DetailActions';

class Detail extends Component {
    render() {
        const { actions, name } = this.props;

        return (
            <Fragment>
                <button onClick={actions.add}>Add</button>
                <div>
                    {
                        name
                    }
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.detail.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(DetailActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
