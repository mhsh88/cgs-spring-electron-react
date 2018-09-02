import React from 'react';
import {
    BooleanField,
    Datagrid,
    maxLength, maxValue, minValue, NumberField, ReferenceField, required,
    Show, SimpleForm,
    SimpleShowLayout,
     TextField,
} from '../../core';

const GasDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="name" />
            <NumberField source="nitrogen" />
            <NumberField source="carbonDioxide" />
            <NumberField source="methan" />
            <NumberField source="ethane" />
            <NumberField source="propane" />
            <NumberField source="nButane" />
            <NumberField source="isoButane" />
            <NumberField source="nPentane" />
            <NumberField source="isoPentane" />
            <NumberField source="hexane" />
            <NumberField source="heptane" />
            <NumberField source="octane" />
            <NumberField source="nonane" />
            <NumberField source="decane" />
            <NumberField source="hydrogen" />
            <NumberField source="oxygen" />
            <NumberField source="carbonMonoxide" />
            <NumberField source="water" />
            <NumberField source="hydrogenSulfide" />
            <NumberField source="helium" />
            <NumberField source="argon" />
            <BooleanField source="moleWightPersent" />

        </SimpleShowLayout>
    </Show>
);

export default GasDetails;
