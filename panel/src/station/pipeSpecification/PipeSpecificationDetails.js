import React from 'react';
import {
    Datagrid,
    maxLength, NumberField, ReferenceField,
    Show, SimpleForm,
    SimpleShowLayout,
    TextField, TextInput,
} from '../../core';

const PipeSpecificationDetails = props => (
    <Show  {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <NumberField source="length"  />
            <NumberField source="insulationFactor"  />
            <NumberField source="insulationThickness"  />
            <ReferenceField source="pipeSize.id" reference="pipesizes" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export default PipeSpecificationDetails;
