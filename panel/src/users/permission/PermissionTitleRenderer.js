import React from 'react';
import PropTypes from 'prop-types';
import PermissionTitle from './PermissionTitle';

const PermissionTitleRenderer = choice => choice.name;

PermissionTitleRenderer.propTypes = {
    choice: PropTypes.object,
};

export default PermissionTitleRenderer;
