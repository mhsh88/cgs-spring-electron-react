import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from '../../core';
import { push as pushAction } from 'react-router-redux';
import { GET_ONE } from '../../core/rest/types';
import restClient from '../../restClient';


class CalculationGetResult extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        // const updatedRecord = { ...record, is_approved: true };
        restClient(GET_ONE, 'results', { id: record.id })
            .then(() => {
                showNotification('Comment approved');
                // push('/comments');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });
    }

    render() {
        return <FlatButton label="Approve" onClick={this.handleClick} />;
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