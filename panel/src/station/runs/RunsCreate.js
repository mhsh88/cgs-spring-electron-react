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
    TextField,
    ReferenceArrayInput,
    SelectArrayInput,
    TabbedForm,
    FormTab
} from  '../../core';



export const RunsCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
                <DisabledInput source="id"/>
                <NumberInput source="length" validate={[required, maxValue(100),minValue(0)]} />
                <ReferenceInput source="pipeSize.id" reference="pipesizes" validate={required} allowEmpty>
                    <SelectInput source="name" options={{ fullWidth: true }}/>
                </ReferenceInput>
                <ReferenceArrayInput source="runshasconditions" reference="runshasconditions" validate={required} >
                    <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
                </ReferenceArrayInput>

</SimpleForm>

    </Create>
);

export default RunsCreate;
