import React from 'react';
import {
    Datagrid,
    DateField,
    List,
    TextField,
} from '../../core';

const OrganizationAssessmentsList = props => (
    <List {...props} >
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <TextField source="assessmentName" smallScreen />
            <DateField source="date" smallScreen />






        </Datagrid>
    </List>
);

export default OrganizationAssessmentsList;
