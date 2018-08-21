import React from 'react';
import {
    NumberInput, Create, Edit, SimpleForm, DisabledInput,
    TextInput, DateInput, LongTextInput, ReferenceManyField,
    Datagrid, TextField, DateField, EditButton,
    ReferenceArrayInput, SelectArrayInput, required, maxValue, minValue, ReferenceInput, SelectInput
} from '../../core';


export const RunsEdit = (props) => (
    <Edit  {...props} >
        <SimpleForm >

            <DisabledInput source="id"/>
            <NumberInput source="length" validate={[required, maxValue(100),minValue(0)]} />
            <ReferenceInput source="pipeSize.id" reference="pipesizes" validate={required} >
                <SelectInput source="name"/>
            </ReferenceInput>
            <ReferenceArrayInput source="runsHasCondition" reference="runshasconditions" validate={required} >
                <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export default RunsEdit;
