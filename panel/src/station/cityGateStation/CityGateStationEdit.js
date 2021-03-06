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
    ReferenceInput, SelectInput, required, ReferenceArrayInput, SelectArrayInput
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
            <ReferenceInput source="afterHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>
            <ReferenceInput source="beforeHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>
            <ReferenceInput source="collector.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" options={{ fullWidth: true }}/>
            </ReferenceInput>

            <ReferenceArrayInput source="heaters" reference="heaters" validate={required} >
                <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
            </ReferenceArrayInput>

            <ReferenceInput  source="runs.id" reference="runss" allowEmpty>
                <SelectInput optionText="length" options={{ fullWidth: true }}/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default CityGateStationEdit;
