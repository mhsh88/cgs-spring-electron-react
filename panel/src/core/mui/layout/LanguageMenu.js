import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import { ListItem } from 'material-ui/List';
import { grey600 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import LanguageIcon from 'material-ui/svg-icons/action/translate';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import translate from '../../i18n/translate';
import defaultMessages from '../../i18n/defaultMessages';
import { changeLocale as changeLocaleAction } from '../../actions/localeActions';

const iconButtonElement = (
    <IconButton touch>
        <MoreVertIcon color={grey600} />
    </IconButton>
);

class LanguageMenu extends PureComponent {
    render() {
        const { translate, changeLocale, language } = this.props;
        return (
            <ListItem
                disabled
                leftIcon={<LanguageIcon />}
                primaryText={translate('pos.language.name')}
                secondaryText={translate(`pos.language.${language}`)}
                rightIconButton={
                    <IconMenu iconButtonElement={iconButtonElement}>
                        {
                            Object.keys(defaultMessages).map(lang => (
                                lang !== language && <MenuItem key={lang} onTouchTap={() => changeLocale(lang)} >{translate(`pos.language.${lang}`)}</MenuItem>
                            ))
                        }
                    </IconMenu>
                }
            />
        );
    }
}

LanguageMenu.propTypes = {
    translate: PropTypes.func,
    changeLocale: PropTypes.func,
    language: PropTypes.string,
};

const mapStateToProps = state => ({
    theme: state.theme,
    language: state.locale,
});

const enhance = compose(
    translate,
    connect(mapStateToProps, { changeLocale: changeLocaleAction }),
);

export default enhance(LanguageMenu);
