import React from 'react';
import { NumberInput, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from  '../../core';


export const HeaterEdit = (props) => (
    <Edit  {...props} >
        <SimpleForm>

            <DisabledInput source="id"/>
            <NumberInput source="efficiency"/>

            <ReferenceManyField label="Burners" reference="burners" target="heaters.id">
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="oxygenPercent" />
                    <TextField source="flueGasTemprature" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export default HeaterEdit;
