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
            <TextInput source="province"  />
            <TextInput source="city" />
            <TextInput source="region"  />
            <TextInput source="address"  />
            <NumberField source="nominalCapacity"  />
        </SimpleShowLayout>
    </Show>
);

export default CityGateStationDetails;
