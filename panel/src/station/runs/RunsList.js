import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    BooleanField,
    DeleteButton,
    ReferenceManyField,
    SingleFieldList,
    ChipField,
    DisabledInput,
    NumberInput,
    required,
    maxValue,
    minValue,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    NumberField, SelectField
} from '../../core';


export const RunsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <NumberField source="length"  />

            <ReferenceField label="Pipe Size" source="pipeSize.id" reference="pipesizes" >
                <TextField source="name" />
            </ReferenceField>


            <ReferenceManyField reference="runshasconditions" target="runs.id" >
                <SingleFieldList>
                    <ChipField label="Debi" source="text" />
                </SingleFieldList>
            </ReferenceManyField>
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default RunsList;