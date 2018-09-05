import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardText } from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import inflection from 'inflection';
import ViewTitle from '../layout/ViewTitle';
import Title from '../layout/Title';
import { crudGetOne as crudGetOneAction, crudUpdate as crudUpdateAction } from '../../actions/dataActions';
import DefaultActions from './EditActions';
import translate from '../../i18n/translate';

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            record: props.data,
        };
        this.previousKey = 0;
    }

    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.setState({ record: nextProps.data }); // FIXME: erases user entry when fetch response arrives late
            if (this.fullRefresh) {
                this.fullRefresh = false;
                this.setState({ key: this.state.key + 1 });
            }
        }
        if (this.props.id !== nextProps.id) {
            this.updateData(nextProps.resource, nextProps.id);
        }
    }

    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -1).join('/');
    }

    defaultRedirectRoute = () => 'list';

    updateData(resource = this.props.resource, id = this.props.id) {
        this.props.crudGetOne(resource, id, this.getBasePath());
    }

    refresh = (event) => {
        event.stopPropagation();
        this.fullRefresh = true;
        this.updateData();
    };

    save = (record, redirect) => {
         const newRecord = this.props.beforeSave(record);
        if (newRecord) {
            this.props.crudUpdate(this.props.resource, this.props.id, newRecord, this.props.data, this.getBasePath(), redirect);
        } else {
            this.props.crudUpdate(this.props.resource, this.props.id, record, this.props.data, this.getBasePath(), redirect);
        }
    };

    render() {
        const { actions = <DefaultActions />, children, data, hasDelete, hasRetrieve, hasShow, id, isLoading, resource, title, translate, width } = this.props;
        const { key } = this.state;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource)),
        });
        const defaultTitle = translate('hcore.page.edit', {
            name: `${resourceName}`,
            id,
            data,
        });
        const titleElement = data ? <Title title={title} record={data} defaultTitle={defaultTitle} /> : '';
        // using this.previousKey instead of this.fullRefresh makes
        // the new form mount, the old form unmount, and the new form update appear in the same frame
        // so the form doesn't disappear while refreshing
        const isRefreshing = key !== this.previousKey;
        this.previousKey = key;
        const clonedActions = actions && React.cloneElement(actions, {
            basePath,
            data,
            hasDelete,
            hasRetrieve,
            hasShow,
            refresh: this.refresh,
            resource,
        });

        return (
            <div className="edit-page">
                <Card style={{ opacity: isLoading ? 0.8 : 1 }} key={key}>
                    {(width !== 1 && actions) && clonedActions}
                    <ViewTitle title={titleElement} actionsMenu={clonedActions} width={width} />
                    {data && !isRefreshing && React.cloneElement(children, {
                        save: this.save,
                        resource,
                        basePath,
                        record: data,
                        translate,
                        redirect: typeof children.props.redirect === 'undefined' ? this.defaultRedirectRoute() : children.props.redirect,
                    })}
                    {!data && <CardText>&nbsp;</CardText>}
                </Card>
            </div>
        );
    }
}

Edit.propTypes = {
    actions: PropTypes.element,
    children: PropTypes.element.isRequired,
    crudGetOne: PropTypes.func.isRequired,
    crudUpdate: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasDelete: PropTypes.bool,
    hasRetrieve: PropTypes.bool,
    hasShow: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    match: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func,
    width: PropTypes.number,
};

function mapStateToProps(state, props) {
    return {
        id: decodeURIComponent(props.match.params.id),
        data: state.admin[props.resource].data[decodeURIComponent(props.match.params.id)],
        isLoading: state.admin.loading > 0,
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        { crudGetOne: crudGetOneAction, crudUpdate: crudUpdateAction },
    ),
    translate,
    withWidth(),
);

export default enhance(Edit);
