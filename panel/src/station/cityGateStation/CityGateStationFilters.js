import React from 'react';
import {
    Filter,
    TextInput,
} from '../../core';

const CityGateStationFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        <TextInput source="value" />
    </Filter>
);

export default CityGateStationFilters;
