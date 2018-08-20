import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField, ReferenceInput, required, SelectInput, SimpleForm,
    ReferenceManyField,SingleFieldList,ChipField
} from '../../core';
export const CityGateStationList = props => (
    <List {...props} >

        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }} >

            <TextField source="id"/>
            <TextField source="province" />
            <TextField source="city" />
            <TextField source="region" />
            <TextField source="address" />
            <TextField source="nominalCapacity" />
            <ReferenceField source="afterHeater.id" reference="pipespecificationss" validate={required} >
                <TextField source="length"/>
            </ReferenceField>
            <ReferenceField source="beforeHeater.id" reference="pipespecificationss" validate={required} >
                <TextField source="length"/>
            </ReferenceField>
            <ReferenceField source="collector.id" reference="pipespecificationss" validate={required} >
                <TextField source="length"/>
            </ReferenceField>
            <ReferenceManyField reference="heaters" target="cityGateStation.id" >
                <SingleFieldList>
                    <ChipField source="efficiency" />
                </SingleFieldList>
            </ReferenceManyField>
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default CityGateStationList;