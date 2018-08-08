import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const RoleTitle = ({ record }) => <TextField source="name" record={record} />;

RoleTitle.propTypes = {
    record: PropTypes.object,
};

export default RoleTitle;
