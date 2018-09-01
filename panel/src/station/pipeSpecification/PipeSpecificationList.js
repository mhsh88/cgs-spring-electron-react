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


export const PipeSpecificationList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <NumberField source="length"  />
            <NumberField source="insulationFactor"  />
            <NumberField source="insulationThickness"  />
            <ReferenceField source="pipeSize.id" reference="pipesizes" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default PipeSpecificationList;