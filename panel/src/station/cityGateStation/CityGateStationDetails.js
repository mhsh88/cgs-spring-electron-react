import React from 'react';
import {
    maxLength, NumberField,
    Show, SimpleForm,
    SimpleShowLayout,
    TextField, TextInput,
} from  '../../core';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationDetails = props => (
    <Show title={<CityGateStationTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="province"  />
            <TextField source="city" />
            <TextField source="region"  />
            <TextField source="address"  />
            <NumberField source="nominalCapacity"  />
        </SimpleShowLayout>
    </Show>
);

export default CityGateStationDetails;
