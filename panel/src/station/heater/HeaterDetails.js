import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    NumberField,
    TextField, EditButton, ReferenceField, BooleanField, DeleteButton,
    ReferenceManyField, SingleFieldList,
    ChipField, Show, SimpleShowLayout
} from '../../core';


export const HeaterDetails = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="text"/>
            <TextField source="efficiency" />
            <ReferenceManyField source="burners" reference="burners" target="heaters.id" >
                <SingleFieldList>
                    <ChipField label="Burner" source="oxygenPercent" />
                </SingleFieldList>
            </ReferenceManyField>
            <ColumnActions smallScreen />
        </SimpleShowLayout>
    </Show>
);

export default HeaterDetails;