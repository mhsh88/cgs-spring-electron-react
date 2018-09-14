import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import compose from 'recompose/compose';
import inflection from 'inflection';
import ViewTitle from '../layout/ViewTitle';
import Title from '../layout/Title';
import { crudGetOne as crudGetOneAction } from '../../actions/dataActions';
import DefaultActions from './ShowActions';
import translate from '../../i18n/translate';

export class Show extends Component {
    componentDidMount() {
        this.updateData();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            this.updateData(nextProps.resource, nextProps.id);
        }
    }

    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -2).join('/');
    }

    updateData(resource = this.props.resource, id = this.props.id) {
        this.props.crudGetOne(resource, id, this.getBasePath());
    }

    myUpdateData(resource = this.props.resource, id = this.props.id) {
        return this.props.crudGetOne(resource, id, this.getBasePath());
    }

    refresh = (event) => {
        event.stopPropagation();
        this.fullRefresh = true;
        this.updateData();
    };

    render() {
        const { actions = <DefaultActions />, title, children, id, data, isLoading, resource, hasDelete, hasRetrieve, hasEdit, translate } = this.props;
        const basePath = this.getBasePath();
        data ? null : this.updateData();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource)),
        });
        const defaultTitle = translate('hcore.page.show', {
            name: `${resourceName}`,
            id,
            data,
        });
        const titleElement = data ? <Title title={title} record={data} defaultTitle={defaultTitle} /> : '';

        return (
            <div>
                <Card style={{ opacity: isLoading ? 0.8 : 1 }}>
                    {actions && React.cloneElement(actions, {
                        basePath,
                        data,
                        hasDelete,
                        hasRetrieve,
                        hasEdit,
                        refresh: this.refresh,
                        resource,
                    })}
                    <ViewTitle title={titleElement} />
                    {data && React.cloneElement(children, {
                        resource,
                        basePath,
                        record: data,
                        translate,
                    })}
                </Card>
            </div>
        );
    }
}

Show.propTypes = {
    actions: PropTypes.element,
    children: PropTypes.element,
    crudGetOne: PropTypes.func.isRequired,
    data: PropTypes.object,
    hasDelete: PropTypes.bool,
    hasRetrieve: PropTypes.bool,
    hasEdit: PropTypes.bool,
    id: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
// eslint-disable-next-line react/no-unused-prop-types
    match: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func,
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
        { crudGetOne: crudGetOneAction },
    ),
    translate,
);

export default enhance(Show);
