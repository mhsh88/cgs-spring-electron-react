import React from 'react';
import {
    Filter, maxLength, SimpleForm,
    TextInput,
} from '../../core';

const CityGateStationFilters = props => (
    <Filter {...props}>
        {/*<TextInput label="pos.search" source="query" alwaysOn />*/}
        {/*<TextInput label="id" />*/}
        {/*<TextInput source="city" />*/}
        {/*<TextInput source="region" />*/}
        {/*<TextInput source="address" />*/}
        {/*<NumberInput source="nominalCapacity" />*/}
    </Filter>
);

export default CityGateStationFilters;
