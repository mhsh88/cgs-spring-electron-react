import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton,
    ReferenceManyField,SingleFieldList,
    ChipField
} from  '../../core';


export const HeaterList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="efficiency"/>
            <ReferenceManyField reference="burners" target="heaters.id" >
                <SingleFieldList>
                    <ChipField label="Burner" source="oxygenPercent" />
                </SingleFieldList>
            </ReferenceManyField>
            <EditButton/>
        </Datagrid>
    </List>
);

export default HeaterList;