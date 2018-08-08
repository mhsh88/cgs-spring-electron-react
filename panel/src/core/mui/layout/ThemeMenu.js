import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { ListItem } from 'material-ui/List';
import { grey600 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ThemeIcon from 'material-ui/svg-icons/image/color-lens';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import translate from '../../i18n/translate';
import { changeTheme as themeAction } from '../../actions/themeActions';

const iconButtonElement = (
    <IconButton touch>
        <MoreVertIcon color={grey600} />
    </IconButton>
);

const ThemeMenu = ({ translate, changeTheme, theme }) => (
    <ListItem
        disabled
        leftIcon={<ThemeIcon />}
        primaryText={translate('pos.theme.name')}
        secondaryText={translate(`pos.theme.${theme}`)}
        rightIconButton={
            <IconMenu iconButtonElement={iconButtonElement}>
                {theme !== 'light' && <MenuItem onTouchTap={() => changeTheme('light')}>{translate('pos.theme.light')}</MenuItem>}
                {theme !== 'dark' && <MenuItem onTouchTap={() => changeTheme('dark')}>{translate('pos.theme.dark')}</MenuItem>}
            </IconMenu>
        }
    />
);

ThemeMenu.propTypes = {
    translate: PropTypes.func,
    changeTheme: PropTypes.func,
    theme: PropTypes.string,
};

const mapStateToProps = state => ({
    theme: state.theme,
});

const enhance = compose(
    translate,
    connect(mapStateToProps, { changeTheme: themeAction }),
);

export default enhance(ThemeMenu);
