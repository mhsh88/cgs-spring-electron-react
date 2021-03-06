import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    NumberField,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton,
    ReferenceManyField,SingleFieldList,
    ChipField
} from  '../../core';


export const HeaterList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="text"/>
            <TextField source="efficiency" />
            <ReferenceManyField source="burners" reference="burners" target="heaters.id" >
                <SingleFieldList>
                    <ChipField label="Burner" source="oxygenPercent" />
                </SingleFieldList>
            </ReferenceManyField>
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default HeaterList;