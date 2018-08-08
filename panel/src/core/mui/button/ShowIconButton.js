import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { cyan500 } from 'material-ui/styles/colors';
import ImageEye from 'material-ui/svg-icons/image/remove-red-eye';

// TODO: Set Tooltip
const ShowIconButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={`${basePath}/${record.id}/show`} />}
        style={{ overflow: 'inherit' }}
    >
        <ImageEye color={cyan500} />
    </IconButton>
);

ShowIconButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

ShowIconButton.defaultProps = {
    style: { padding: 0 },
};

export default ShowIconButton;
