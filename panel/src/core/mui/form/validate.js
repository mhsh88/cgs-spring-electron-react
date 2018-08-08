/* eslint-disable no-useless-escape */
/* @link http://stackoverflow.com/questions/46155/validate-email-address-in-javascript */

import { INITIAL_LANGUAGE } from '../../i18n';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmpty = value => (typeof value === 'undefined' || value === null || value === '');

export const required = (value, _, props) => (isEmpty(value) ? props.translate('hcore.validation.required') : undefined);

export const minLength = (min, message) => (value, _, props) => (
    value && value.length < min ? props.translate(message || 'hcore.validation.minLength', { min }) : undefined
);

export const maxLength = (max, message) => (value, _, props) => (
    value && value.length > max ? props.translate(message || 'hcore.validation.maxLength', { max }) : undefined
);

export const minValue = (min, message) => (value, _, props) => (
    value && value < min ? props.translate(message || 'hcore.validation.minValue', { min }) : undefined
);

export const maxValue = (max, message) => (value, _, props) => (
    value && value > max ? props.translate(message || 'hcore.validation.maxValue', { max }) : undefined
);

export const number = (value, _, props) => (value && isNaN(Number(value)) ? props.translate('hcore.validation.number') : undefined);

export const regex = (pattern, message) => (value, _, props) => (
    value && typeof value === 'string' && !pattern.test(value) ? props.translate(message) : undefined
);

export const email = regex(EMAIL_REGEX, 'hcore.validation.email');

export const choices = (list, message) => (value, _, props) => (
    value && list.indexOf(value) === -1 ? props.translate(message) : undefined
);
