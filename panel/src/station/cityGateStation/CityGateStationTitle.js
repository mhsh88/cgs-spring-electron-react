import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../../core';

const CityGateStationTitle = ({ record }) => <TextField source="province" record={record} />;

CityGateStationTitle.propTypes = {
    record: PropTypes.object,
};

export default CityGateStationTitle;
