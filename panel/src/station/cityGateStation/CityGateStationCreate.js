import React from 'react';
import {
    SelectInput,
    maxLength,
    required,
    Create,
    Edit,
    SimpleForm,
    ReferenceInput,
    DisabledInput,
    TextInput,
    DateInput,
    LongTextInput,
    ReferenceManyField,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    NumberInput,
    ReferenceArrayInput, SelectArrayInput
} from '../../core';


export const CityGateStationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>

            <TextInput source="province" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="city" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="region" validate={maxLength(255)} options={{ fullWidth: true }} />
            <TextInput source="address" validate={maxLength(1000)} options={{ fullWidth: true }} />
            <NumberInput source="nominalCapacity" validate={maxLength(1000)} options={{ fullWidth: true }} />
            <ReferenceInput source="afterHeater.id" reference="pipespecificationss" allowEmpty options={{ fullWidth: true }}>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>
            <ReferenceInput source="beforeHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>
            <ReferenceInput  source="collector.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>

            <ReferenceArrayInput source="heaters" reference="heaters" validate={required} >
                <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
            </ReferenceArrayInput>
            <ReferenceInput source="runs.id" reference="runss" allowEmpty>
                <SelectInput optionText="length" validate={required} options={{ fullWidth: true }}/>
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
