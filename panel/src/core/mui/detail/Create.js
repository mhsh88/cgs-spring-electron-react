import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withWidth from 'material-ui/utils/withWidth';
import { Card } from 'material-ui/Card';
import compose from 'recompose/compose';
import inflection from 'inflection';
import ViewTitle from '../layout/ViewTitle';
import Title from '../layout/Title';
import { crudCreate as crudCreateAction } from '../../actions/dataActions';
import DefaultActions from './CreateActions';
import translate from '../../i18n/translate';

class Create extends Component {
    getBasePath() {
        const { location } = this.props;
        return location.pathname.split('/').slice(0, -1).join('/');
    }

    defaultRedirectRoute() {
        const { hasShow, hasEdit } = this.props;
        if (hasEdit) return 'edit';
        if (hasShow) return 'show';
        return 'list';
    }

    save = (record, redirect) => {
        const newRecord = this.props.beforeSave(record);
        if (newRecord) {
            this.props.crudCreate(this.props.resource, newRecord, this.getBasePath(), redirect);
        } else {
            this.props.crudCreate(this.props.resource, record, this.getBasePath(), redirect);
        }
    };

    render() {
        const { actions = <DefaultActions />, children, isLoading, resource, title, translate, width } = this.props;
        const basePath = this.getBasePath();

        const resourceName = translate(`resources.${resource}.name`, {
            smart_count: 1,
            _: inflection.humanize(inflection.singularize(resource)),
        });
        const defaultTitle = translate('hcore.page.create', {
            name: `${resourceName}`,
        });
        const titleElement = <Title title={title} defaultTitle={defaultTitle} />;
        const clonedActions = React.cloneElement(actions, {
            basePath,
            resource,
        });

        return (
            <div className="create-page">
                <Card style={{ opacity: isLoading ? 0.8 : 1 }}>
                    {(width !== 1 && actions) && clonedActions}
                    <ViewTitle title={titleElement} actionsMenu={clonedActions} width={width} />
                    {React.cloneElement(children, {
                        save: this.save,
                        resource,
                        basePath,
                        record: {},
                        translate,
                        redirect: typeof children.props.redirect === 'undefined' ? this.defaultRedirectRoute() : children.props.redirect,
                    })}
                </Card>
            </div>
        );
    }
}

Create.propTypes = {
    actions: PropTypes.element,
    beforeSave: PropTypes.func,
    children: PropTypes.element,
    crudCreate: PropTypes.func.isRequired,
    hasEdit: PropTypes.bool,
    hasShow: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    resource: PropTypes.string.isRequired,
    title: PropTypes.any,
    translate: PropTypes.func.isRequired,
    width: PropTypes.number,
};

Create.defaultProps = {
    beforeSave: () => false,
    data: {},
    hasEdit: false,
    hasShow: false,
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

const enhance = compose(
    connect(
        mapStateToProps,
        { crudCreate: crudCreateAction },
    ),
    translate,
    withWidth(),
);

export default enhance(Create);
