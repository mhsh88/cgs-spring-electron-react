import React from 'react';
import {
    ColumnActions,
    List,
    Datagrid,
    TextField, EditButton, ReferenceField,BooleanField, DeleteButton
} from  '../../core';

import { Card, CardHeader, Avatar, CardActions, CardText } from 'material-ui';

import { PersonIcon } from 'material-ui/svg-icons/action/description';
// import CityGateStationFilters from './CityGateStationFilters';
// import UserReferenceField from '../user/UserReferenceField';

const cardStyle = {
    width: 300,
    minHeight: 100,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const GasGrid = ({ ids, data, basePath }) => (
    <div style={{ margin: '1em' }}>
        {ids.map(id =>
            <Card key={id} style={cardStyle}>
                <CardHeader
                    title={<TextField record={data[id]} source="name" />}
                    subtitle={<BooleanField record={data[id]} source="moleWightPersent" />}
                />
                <CardText>
                    {/*<TextField record={data[id]} source="hydrogen" />*/}
                </CardText>
                <CardActions style={{ textAlign: 'bottom' }}>
                    <ColumnActions resource="gass" basePath={basePath} record={data[id]} />
                </CardActions>


            </Card>
        )}
    </div>
);

GasGrid.defaultProps = {
    data: {},
    ids: [],
};


export const GasList = props => (
    <List title="All Gas" {...props}>
        <GasGrid />
    </List>
);

export default GasList;