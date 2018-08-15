import React from 'react';
import {
    Filter, SimpleForm,
    TextInput, NumberInput
} from  '../../core';

const CityGateStationFilters = props => (
    <Filter {...props}>
        <TextInput source="id" />
        <TextInput source="city" />
        <TextInput source="region" />
        <TextInput source="address" />
        <NumberInput source="nominalCapacity" />
    </Filter>
);

export default CityGateStationFilters;
