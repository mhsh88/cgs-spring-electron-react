import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { CardActions } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import autoprefixer from 'material-ui/utils/autoprefixer';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import { CreateButton, RefreshButton } from '../button';
import { CreateMenuItem, RefreshMenuItem } from '../menuItem';

const cardActionStyle = {
    zIndex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
};

const Actions = ({ resource, filters, displayedFilters, filterValues, theme, hasCreate, basePath, showFilter, refresh, width }) => {
    const muiTheme = getMuiTheme(theme);
    const prefix = autoprefixer(muiTheme);
    const clonedFilters = filters && React.cloneElement(filters, { resource, showFilter, displayedFilters, filterValues, context: 'button' });

    return (
        width !== 1 ?
            <CardActions style={prefix(cardActionStyle)}>
                {clonedFilters}
                {hasCreate && <CreateButton basePath={basePath} />}
                <RefreshButton refresh={refresh} />
            </CardActions> :
            (<IconMenu
                iconButtonElement={
                    <IconButton><MoreVerticalIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <RefreshMenuItem refresh={refresh} />
                {hasCreate && <CreateMenuItem basePath={basePath} />}
                {clonedFilters}
            </IconMenu>)
    );
};

Actions.propTypes = {
    resource: PropTypes.string,
    filters: PropTypes.object,
    displayedFilters: PropTypes.object,
    filterValues: PropTypes.object,
    theme: PropTypes.object,
    hasCreate: PropTypes.bool,
    basePath: PropTypes.string,
    showFilter: PropTypes.func,
    refresh: PropTypes.func,
    width: PropTypes.number,
};

const enhance = compose(
    onlyUpdateForKeys(['resource', 'filters', 'displayedFilters', 'filterValues', 'theme', 'width']),
    withWidth(),
    muiThemeable(),
);

export default enhance(Actions);
