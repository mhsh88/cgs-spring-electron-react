import React from 'react';
import {
    SelectInput,
    minValue,
    maxValue,
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
    DateField,
    EditButton,
    NumberInput,
    BooleanInput,
    TextField
} from '../../core';


export const BurnerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="text" validate={required}/>
            <NumberInput source="oxygenPercent" validate={[required, maxValue(20.5),minValue(0)]}/>
            <NumberInput source="flueGasTemprature" validate={ [required, maxValue(500),minValue(-20)]} />
        </SimpleForm>
    </Create>
);

export default BurnerCreate;
