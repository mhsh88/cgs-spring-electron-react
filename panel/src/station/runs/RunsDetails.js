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
    NumberField, SelectField, SimpleShowLayout, Show
} from '../../core';


export const RunsDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <NumberField source="length"  />

            <ReferenceField source="pipeSize.id" reference="pipesizes" allowEmpty>
                <TextField source="name" />
            </ReferenceField>


            <ReferenceManyField source="condition" reference="runshasconditions" target="runs.id" >
                <SingleFieldList>
                    <ChipField label="Debi" source="text" />
                </SingleFieldList>
            </ReferenceManyField>
            <ColumnActions smallScreen />
        </SimpleShowLayout>
    </Show>
);

export default RunsDetails;