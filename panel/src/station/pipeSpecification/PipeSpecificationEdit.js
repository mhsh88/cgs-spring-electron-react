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

            <DisabledInput source="id"/>
            <NumberInput source="length" validate={[required, maxValue(100),minValue(0)]} />
            <NumberInput source="insulationFactor" validate={[required, maxValue(100),minValue(0)]} />
            <NumberInput source="insulationThickness" validate={[required, maxValue(100),minValue(0)]} />
            <ReferenceInput source="pipeSize.id" reference="pipesizes" validate={required} >
                <SelectInput source="name"/>
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export default PipeSpecificationEdit;
