import React from 'react';
import { NumberInput, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from  '../../core';

import CityGateStationTitle from './CityGateStationTitle';

export const CityGateStationEdit = (props) => (
    <Edit title={<CityGateStationTitle />} {...props} >
        <SimpleForm>
            <TextInput label="id" source="province"  options={{ fullWidth: true }} />
            <TextInput source="city" options={{ fullWidth: true }} />
            <TextInput source="region" options={{ fullWidth: true }} />
            <TextInput source="address" options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" options={{ fullWidth: true }} />
        </SimpleForm>
    </Edit>
);

export default CityGateStationEdit;
