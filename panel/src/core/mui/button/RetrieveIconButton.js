import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { cyan500 } from 'material-ui/styles/colors';
import ActionRestore from 'material-ui/svg-icons/action/settings-backup-restore';

// TODO: Set Tooltip
const RetrieveIconButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={`${basePath}/${record.id}/retrieve`} />}
        style={{ overflow: 'inherit' }}
    >
        <ActionRestore color={cyan500} />
    </IconButton>
);

RetrieveIconButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

RetrieveIconButton.defaultProps = {
    style: { padding: 0 },
};

export default RetrieveIconButton;
