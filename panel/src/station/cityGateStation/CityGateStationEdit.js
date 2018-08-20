import React from 'react';
import {
    NumberInput,
    Create,
    Edit,
    SimpleForm,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    ReferenceInput, SelectInput, required
} from '../../core';

import CityGateStationTitle from './CityGateStationTitle';

export const CityGateStationEdit = (props) => (
    <Edit title={<CityGateStationTitle />} {...props} >
        <SimpleForm>
            <TextInput label="id" source="province"  options={{ fullWidth: true }} />
            <TextInput source="city" options={{ fullWidth: true }} />
            <TextInput source="region" options={{ fullWidth: true }} />
            <TextInput source="address" options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" options={{ fullWidth: true }} />
            <ReferenceInput label="After Heater" source="afterHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Before Heater" source="beforeHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Collector" source="collector.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default CityGateStationEdit;
