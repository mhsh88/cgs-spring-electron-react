/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import ContentAdd from 'material-ui/svg-icons/content/add';
import compose from 'recompose/compose';
import translate from '../../i18n/translate';

const CreateFlatButton = ({ basePath, label }) => (
    <FlatButton
        primary
        label={label}
        icon={<ContentAdd />}
        containerElement={<Link to={`${basePath}/create`} />}
        style={{ overflow: 'inherit' }}
    />
);

export class CreatePopoverButton extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    handleTouchTap = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { label, creationMenuOfChildren } = this.props;
        const { open, anchorEl } = this.state;
        return (
            <div style={{ display: 'inline-block' }}>
                <FlatButton
                    primary
                    label={label}
                    icon={<ContentAdd />}
                    onTouchTap={this.handleTouchTap}
                    style={{ overflow: 'inherit' }}
                />
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.handleRequestClose}
                >
                    {React.cloneElement(creationMenuOfChildren)}
                </Popover>
            </div>
        );
    }
}

const CreateButton = ({ basePath = '', translate, label = 'hcore.action.create', creationMenuOfChildren }) => {
    if (creationMenuOfChildren) {
        return <CreatePopoverButton label={label && translate(label)} creationMenuOfChildren={creationMenuOfChildren} />;
    }
    return <CreateFlatButton basePath={basePath} label={label && translate(label)} />;
};

CreateButton.propTypes = {
    basePath: PropTypes.string,
    label: PropTypes.string,
    translate: PropTypes.func.isRequired,
    creationMenuOfChildren: PropTypes.element,
};

const enhance = compose(
    onlyUpdateForKeys(['basePath, label']),
    translate,
);

export default enhance(CreateButton);
