import React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
} from '../../core';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationDetails = props => (
    <Show title={<CityGateStationTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="value" />
        </SimpleShowLayout>
    </Show>
);

export default CityGateStationDetails;
