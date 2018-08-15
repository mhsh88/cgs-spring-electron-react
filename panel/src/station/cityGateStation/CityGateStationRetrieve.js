import React from 'react';
import { Retrieve } from  '../../core';
import CityGateStationTitle from './CityGateStationTitle';

const CityGateStationRetrieve = props => <Retrieve {...props} title={<CityGateStationTitle />} />;

export default CityGateStationRetrieve;
