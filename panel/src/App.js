import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource } from './core';

import './App.css';

import authClient from './authClient';
import Login from './Login';
import Layout from './Layout';
import { Dashboard } from './dashboard';
import translations from './i18n';
import ResourceGroupIcons from './ResourceGroupIcons';

// import {
//     OrganizationsList,
//     OrganizationDetails,
//     OrganizationCreate,
//     OrganizationEdit,
//     OrganizationDelete,
//     OrganizationRetrieve,
//     OrganizationIcon,
//     PermissionsList,
//     PermissionDetails,
//     PermissionIcon,
//     RolesList,
//     RoleDetails,
//     RoleCreate,
//     RoleEdit,
//     RoleDelete,
//     RoleRetrieve,
//     RoleIcon,
// } from './users';

import {
    CityGateStationList,
    CityGateStationCreate,
    CityGateStationEdit,
    CityGateStationDetails,
    CityGateStationDelete,
    CityGateStationRetrieve,
    CityGateStationIcon,
    GasList,
    GasCreate,
    GasEdit,
    GasDetails,
    CalculationList,
    CalculationCreate,
    CalculationEdit,
    CalculationDetails,
    ConditionList,
    ConditionCreate,
    ConditionDetails,
    ConditionEdit,
    HeaterList,
    HeaterCreate,
    HeaterEdit,
    BurnerList,
    BurnerCreate,
    BurnerEdit,
    PipeSizeList,
    PipeSizeCreate,
    PipeSizeEdit,
    PipeSizeDetails,
    PipeSpecificationCreate,
    PipeSpecificationEdit,
    PipeSpecificationList,
    PipeSpecificationDetails,
    RunsHasConditionList,
    RunsHasConditionCreate,
    RunsHasConditionEdit,
    RunsCreate,
    RunsEdit,
    RunsList,
    CalculationDelete,
    GasDelete,
    ConditionDelete,
    HeaterDelete,
    BurnerDelete,
    RunsHasConditionDelete,
    RunsDelete,
    PipeSpecificationDelete,
    PipeSizeDelete,
    RunsDetails,
    RunsHasConditionDetails,
    BurnerDetails, HeaterDetails
} from './station';


import restClient from './restClient';

class App extends Component {
    componentWillMount() { }

    render() {
        return (
            <Admin
                title="بهینه‌سازان صنعت تاسیسات"
                restClient={restClient}
                authClient={authClient}
                // dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                messages={translations}
                resourceGroupIcons={ResourceGroupIcons}
            >

                <Resource name="calculations" group="stations" list={CalculationList} create={CalculationCreate} edit={CalculationEdit} show={CalculationDetails} remove={CalculationDelete}/>
                <Resource name="citygatestations" group="stations" list={CityGateStationList} create={CityGateStationCreate} edit={CityGateStationEdit} show={CityGateStationDetails} remove={CityGateStationDelete} retrieve={CityGateStationRetrieve} icon={CityGateStationIcon} />
                <Resource name="gass" group="stations" list={GasList} create={GasCreate} edit={GasEdit} show={GasDetails} remove={GasDelete}/>
                <Resource name="conditions" group="stations" list={ConditionList} create={ConditionCreate} show={ConditionDetails} edit={ConditionEdit} remove={ConditionDelete}/>
                <Resource name="heaters" group="stations" list={HeaterList} create={HeaterCreate} edit={HeaterEdit} show={HeaterDetails} remove={HeaterDelete}/>
                <Resource name="burners" group="stations" list={BurnerList} create={BurnerCreate} edit={BurnerEdit} show={BurnerDetails} remove={BurnerDelete}/>
                <Resource name="afterheaters" group="stations" />
                <Resource name="runshasconditions" group="stations" list={RunsHasConditionList} create={RunsHasConditionCreate} edit={RunsHasConditionEdit} show={RunsHasConditionDetails} remove={RunsHasConditionDelete}/>
                <Resource name="runss" group="stations" list={RunsList} create={RunsCreate} edit={RunsEdit} remove={RunsDelete} show={RunsDetails}/>
                <Resource name="pipespecificationss" group="stations" list={PipeSpecificationList} create={PipeSpecificationCreate} edit={PipeSpecificationEdit} show={PipeSpecificationDetails} remove={PipeSpecificationDelete}/>
                <Resource name="pipesizes" group="stations" list={PipeSizeList} create={PipeSizeCreate} edit={PipeSizeEdit} show={PipeSizeDetails} remove={PipeSizeDelete}/>
            </Admin>
        );
    }
}

export default App;
