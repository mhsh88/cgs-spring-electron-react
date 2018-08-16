import React from 'react';
import { NumberInput, Create, Edit, SimpleForm, DisabledInput,
    TextInput, DateInput, LongTextInput, ReferenceManyField,
    Datagrid, TextField, DateField, EditButton,
    ReferenceArrayInput,SelectArrayInput} from  '../../core';


export const HeaterEdit = (props) => (
    <Edit  {...props} >
        <SimpleForm >

            <DisabledInput source="id"/>
            <NumberInput source="efficiency"/>

            <ReferenceArrayInput source="burners" reference="burners">
                <SelectArrayInput optionText="text" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export default HeaterEdit;
