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


export const PipeSizeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" validate={required}/>
            <NumberInput source="outerDiameter" validate={[required, minValue(0)]}/>
            <NumberInput source="wallThickness" validate={[required, minValue(0)]} />
        </SimpleForm>
    </Create>
);

export default PipeSizeCreate;
