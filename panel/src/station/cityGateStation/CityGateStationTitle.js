import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const CityGateStationTitle = ({ record }) => <TextField source="city" record={record} />;

CityGateStationTitle.propTypes = {
    record: PropTypes.object,
};

export default CityGateStationTitle;
