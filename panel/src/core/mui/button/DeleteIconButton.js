import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { pinkA400 } from 'material-ui/styles/colors';
import ActionDelete from 'material-ui/svg-icons/action/delete';

// TODO: Set Tooltip
const DeleteIconButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={`${basePath}/${record.id}/delete`} />}
        style={{ overflow: 'inherit' }}
    >
        <ActionDelete color={pinkA400} />
    </IconButton>
);

DeleteIconButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

DeleteIconButton.defaultProps = {
    style: { padding: 0 },
};

export default DeleteIconButton;
