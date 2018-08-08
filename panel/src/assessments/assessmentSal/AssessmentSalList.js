import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField,
    NumberField,
} from '../../core';
import AssessmentSalFilters from './AssessmentSalFilters';

const AssessmentSalList = props => (
    <List {...props} filters={<AssessmentSalFilters />} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="sal.value" />
            <TextField source="accessibility" />
            <NumberField source="capitalAsset" />
            <TextField source="confidentiality" />
            <NumberField source="death" />
            <NumberField source="economyImpact" />
            <NumberField source="environmentalCleanUp" />
            <NumberField source="hospital" />
            <NumberField source="injury" />
            <TextField source="integrity" />
            <ColumnActions smallScreen />
        </Datagrid>
    </List>
);

export default AssessmentSalList;
