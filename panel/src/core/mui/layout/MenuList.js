import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import inflection from 'inflection';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import compose from 'recompose/compose';
import DashboardListItem from './DashboardListItem';
import translate from '../../i18n/translate';
import LanguageMenu from '../layout/LanguageMenu';
import ThemeMenu from '../layout/ThemeMenu';
import Logout from '../auth/Logout';

// const SelectableList = makeSelectable(List);

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const translatedResourceName = (resource, translate) =>
    translate(`resources.${resource.name}.name`, {
        smart_count: 2,
        _: resource.options && resource.options.label ?
            translate(resource.options.label, { smart_count: 2, _: resource.options.label }) :
            inflection.humanize(inflection.pluralize(resource.name)),
    });

const MenuList = ({ hasDashboard, onMenuTap, resources, translate, resourceGroupIcons }) => {
    const map = new Map();
    resources
        .filter(r => r.list)
        .forEach((resource) => {
            if (!map.has(resource.group)) {
                map.set(resource.group, []);
            }
            map.get(resource.group).push(resource);
        });
    const groups = [...map.keys()];
    // const groupIcons = [...resourceGroupIcons];
    return (<div style={styles.main}>
        <List>
            {hasDashboard && <DashboardListItem onTouchTap={onMenuTap} />}
            {
                groups.map((group) => {
                    const GroupIcon = resourceGroupIcons[group];
                    return (<ListItem
                        key={group}
                        primaryTogglesNestedList
                        primaryText={translate(`resources.groups.${group}`)}
                        leftIcon={<GroupIcon />}
                        nestedItems={
                            map.get(group).map(resource => (
                                <ListItem
                                    key={resource.name}
                                    containerElement={<Link to={`/${resource.name.toLowerCase()}`} />}
                                    primaryText={translatedResourceName(resource, translate)}
                                    leftIcon={<resource.icon />}
                                    value={`/${resource.name}`}
                                    onTouchTap={onMenuTap}
                                />
                            ))
                        }
                    />);
                })
            }
        </List>
        <Divider />
        <List>
            <LanguageMenu />
            <ThemeMenu />
            <Logout />
        </List>
    </div>);
};

MenuList.propTypes = {
    hasDashboard: PropTypes.bool,
    onMenuTap: PropTypes.func,
    resources: PropTypes.array.isRequired,
    translate: PropTypes.func.isRequired,
    resourceGroupIcons: PropTypes.object.isRequired,
};

MenuList.defaultProps = {
    onMenuTap: () => null,
};

const mapStateToProps = state => ({
    theme: state.theme,
});

const enhance = compose(
    muiThemeable(),
    pure,
    translate,
    connect(mapStateToProps),
);

export default translate(enhance(MenuList));
