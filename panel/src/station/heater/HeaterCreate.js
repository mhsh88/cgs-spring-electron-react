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



export const HeaterCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
                <DisabledInput source="id"/>
                <NumberInput source="efficiency" validate={[required, maxValue(100),minValue(0)]} />
                <ReferenceArrayInput source="id" reference="burners" validate={required} >
                    <SelectArrayInput optionText="oxygenPercent" options={{ fullWidth: true }}/>
                </ReferenceArrayInput>
            <ReferenceArrayInput source="standards" reference="standards" validate={required} >
                <SelectArrayInput optionText="text" options={{ fullWidth: true }} />
            </ReferenceArrayInput>

</SimpleForm>

    </Create>
);

export default HeaterCreate;
