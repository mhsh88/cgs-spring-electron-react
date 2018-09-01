import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from '../../core';
import { push as pushAction } from 'react-router-redux';
import { GET_ONE } from '../../core/rest/types';
import restClient from '../../restClient';
import GasResult from './component/ResultPanel';
import CalculationButton from './component/CalculationButton';
import Progress from './component/Progress';
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        import Demo from './component/ResultPanel.js';


class CalculationGetResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false
        };
    }
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        // const updatedRecord = { ...record, is_approved: true };
        this.setState( { isLoading: true} );
        restClient(GET_ONE, 'results', { id: record.id })
            .then(response => {
                this.setState({isLoading: false});
                return response.data;
            })
            .then(data => this.setState({ hits: data }))
            .catch((e) => {
                console.error(e);
                this.setState({isLoading: false });
                showNotification('Error: comment not approved', 'warning')
            });
    }

    render() {
        const postData = this.state.hits;
        console.log(postData);

        if(this.state.isLoading){
            return(
                <div>
                    <Progress/>
                    <CalculationButton onClick={this.handleClick}/>
                </div>
            );
        }
        else {
            return (

                <div style={{margin: '0 5px'}}>

                    <div style={{margin: '0 5px'}}>
                        <GasResult isLoading={this.state.isLoading} data={postData}/>
                    </div>

                    <div>
                        <CalculationButton onClick={this.handleClick}/>
                    </div>
                </div>
            );
        }
    }
}


CalculationGetResult.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(CalculationGetResult);