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
            <ReferenceInput label="After Heater" source="afterHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Before Heater" source="beforeHeater.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>
            <ReferenceInput label="Collector" source="collector.id" reference="pipespecificationss" allowEmpty>
                <SelectInput optionText="length" validate={required}/>
            </ReferenceInput>

            <ReferenceArrayInput source="heaters" reference="heaters" validate={required} >
                <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export default CityGateStationCreate;
