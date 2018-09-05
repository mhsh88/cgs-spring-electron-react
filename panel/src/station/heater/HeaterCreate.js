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
                <TextInput source="text" validate={required} />
                <NumberInput source="efficiency" format={v => v*100} parse={v => v/100} validate={[required, maxValue(100),minValue(0)]} />


                <ReferenceArrayInput source="burners" reference="burners" validate={required} >
                    <SelectArrayInput optionText="text" options={{ fullWidth: true }}/>
                </ReferenceArrayInput>

</SimpleForm>

    </Create>
);

export default HeaterCreate;
