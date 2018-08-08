import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import { USER_LOGOUT } from './actions/authActions';
import adminReducer from './reducer';
import localeReducer from './reducer/locale';
import themeReducer from './reducer/theme';
import { crudSaga } from './sideEffect/saga';
import DefaultLayout from './mui/layout/Layout';
import MenuList from './mui/layout/MenuList';
import Login from './mui/auth/Login';
import TranslationProvider from './i18n/TranslationProvider';

const Admin = ({
    appLayout,
    authClient,
    children,
    currency,
    customReducers = {},
    customSagas = [],
    customRoutes,
    dashboard,
    history,
    locale,
    messages = {},
    resourceGroupIcons,
    restClient,
    theme,
    title = 'ICS Panel',
    loginPage,
    // logoutButton,
    initialState,
}) => {
    const resources = React.Children.map(children, ({ props }) => props) || [];
    const appReducer = combineReducers({
        admin: adminReducer(resources),
        locale: localeReducer(locale),
        theme: themeReducer,
        form: formReducer,
        routing: routerReducer,
        ...customReducers,
    });
    const resettableAppReducer = (state, action) => appReducer(action.type !== USER_LOGOUT ? state : undefined, action);
    const saga = function* rootSaga() {
        yield all([
            crudSaga(restClient, authClient),
            ...customSagas,
        ].map(fork));
    };
    const sagaMiddleware = createSagaMiddleware();
    const routerHistory = history || createHistory();
    const store = createStore(resettableAppReducer, initialState, compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(routerHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));
    sagaMiddleware.run(saga);

    // const logout = authClient ? createElement(logoutButton || Logout) : null;

    return (
        <Provider store={store}>
            <TranslationProvider messages={messages}>
                <ConnectedRouter history={routerHistory}>
                    <div>
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                render={({ location }) => createElement(loginPage || Login, {
                                    location,
                                    title,
                                    theme,
                                })}
                            />
                            <Route
                                path="/"
                                render={() => createElement(appLayout || DefaultLayout, {
                                    dashboard,
                                    customRoutes,
                                    menu: createElement(MenuList, {
                                        hasDashboard: !!dashboard,
                                        resources,
                                        resourceGroupIcons,
                                    }),
                                    resources,
                                    title,
                                    theme,
                                })}
                            />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </TranslationProvider>
        </Provider>
    );
};

const componentPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string]);

Admin.propTypes = {
    appLayout: componentPropType,
    authClient: PropTypes.func,
    children: PropTypes.node,
    currency: PropTypes.string,
    customSagas: PropTypes.array,
    customReducers: PropTypes.object,
    customRoutes: PropTypes.array,
    dashboard: componentPropType,
    history: PropTypes.object,
    initialState: PropTypes.object,
    locale: PropTypes.string,
    loginPage: componentPropType,
    logoutButton: componentPropType,
    menu: componentPropType,
    messages: PropTypes.object,
    resourceGroupIcons: PropTypes.object,
    restClient: PropTypes.func,
    theme: PropTypes.object,
    title: PropTypes.node,
};

export default Admin;
