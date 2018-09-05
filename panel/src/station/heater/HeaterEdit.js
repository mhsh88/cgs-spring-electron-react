import React from 'react';
import { NumberInput, Create, Edit, SimpleForm, DisabledInput,
    TextInput, DateInput, LongTextInput, ReferenceManyField,
    Datagrid, TextField, DateField, EditButton,
    ReferenceArrayInput,SelectArrayInput} from  '../../core';


export const HeaterEdit = (props) => (
    <Edit  {...props} >
        <SimpleForm >

            <DisabledInput source="id"/>
            <TextInput source="text"/>
            <NumberInput source="efficiency" format={v => v*100} parse={v => v/100}/>

            <ReferenceArrayInput source="burners" reference="burners">
                <SelectArrayInput optionText="text" />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);

export default HeaterEdit;
