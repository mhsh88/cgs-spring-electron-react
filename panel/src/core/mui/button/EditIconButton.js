import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import { cyan500 } from 'material-ui/styles/colors';
import ContentCreate from 'material-ui/svg-icons/content/create';
import linkToRecord from '../../util/linkToRecord';

// TODO: Set Tooltip
const EditIconButton = ({ basePath = '', record = {} }) => (
    <IconButton
        containerElement={<Link to={linkToRecord(basePath, record.id)} />}
        style={{ overflow: 'inherit' }}
    >
        <ContentCreate color={cyan500} />
    </IconButton>
);

EditIconButton.propTypes = {
    basePath: PropTypes.string,
    record: PropTypes.object,
};

export default EditIconButton;
