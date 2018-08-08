import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import translate from '../../i18n/translate';
import FilterButtonMenuItem from './FilterButtonMenuItem';

export class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    getHiddenFilters() {
        const { filters, displayedFilters, filterValues } = this.props;
        return filters
            .filter(filterElement =>
                !filterElement.props.alwaysOn &&
                !displayedFilters[filterElement.props.source] &&
                !filterValues[filterElement.props.source],
            );
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleShow({ source, defaultValue }) {
        this.props.showFilter(source, defaultValue);
        this.setState({
            open: false,
        });
    }

    render() {
        const hiddenFilters = this.getHiddenFilters();
        const { resource, width, translate } = this.props;
        const { open, anchorEl } = this.state;
        const filtersMenu = hiddenFilters.map(filterElement => (
            <FilterButtonMenuItem
                key={filterElement.props.source}
                filter={filterElement.props}
                resource={resource}
                onShow={this.handleShow}
            />
        ));

        return (
            hiddenFilters.length > 0 &&
            (
                width !== 1 ?
                    <div style={{ display: 'inline-block' }}>
                        <FlatButton
                            className="add-filter"
                            primary
                            label={this.props.translate('hcore.action.add_filter')}
                            icon={<ContentFilter />}
                            onTouchTap={this.handleTouchTap}
                        />
                        <Popover
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                            onRequestClose={this.handleRequestClose}
                        >
                            <Menu>{filtersMenu}</Menu>
                        </Popover>
                    </div> :
                    <Menu>
                        <Divider />
                        <Subheader >{translate('hcore.action.add_filter')}</Subheader>
                        {filtersMenu}
                    </Menu>
            )
        );
    }
}

FilterButton.propTypes = {
    resource: PropTypes.string.isRequired,
    filters: PropTypes.arrayOf(PropTypes.node).isRequired,
    displayedFilters: PropTypes.object.isRequired,
    filterValues: PropTypes.object.isRequired,
    showFilter: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    width: PropTypes.number,
};

const enhance = compose(
    withWidth(),
    translate,
);

export default enhance(FilterButton);
