import { connect } from 'react-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { Layout, defaultTheme } from './core';

export default connect(state => ({
    theme: state.theme === 'dark' ? darkBaseTheme : defaultTheme,
}))(Layout);
