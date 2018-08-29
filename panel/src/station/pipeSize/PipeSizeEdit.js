import React from 'react';
import {
    NumberInput, Create, Edit, SimpleForm, DisabledInput,
    TextInput, DateInput, LongTextInput, ReferenceManyField,
    Datagrid, TextField, DateField, EditButton,
    ReferenceArrayInput, SelectArrayInput, required, maxValue, minValue, ReferenceInput, SelectInput
} from '../../core';


export const PipeSpecificationEdit = (props) => (
    <Edit  {...props} >
        <SimpleForm >

            <TextInput source="name" validate={required}/>
            <NumberInput source="outerDiameter" validate={[required, minValue(60.3)]}/>
            <NumberInput source="wallThickness" validate={[required, minValue(3.9)]} />
        </SimpleForm>
    </Edit>
);

export default PipeSpecificationEdit;
