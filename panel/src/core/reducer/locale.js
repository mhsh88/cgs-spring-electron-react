import { DEFAULT_LANGUAGE } from '../i18n';
import { CHANGE_LOCALE } from '../actions/localeActions';

/* const DEFAULT_LANGUAGE = {
    language: 'fa',
    direction: 'rtl',
};*/

const compatible = (language) => {
    switch (language) {
    case 'fa':
    case 'ar':
        return {
            language,
            direction: 'rtl',
        };
    default:
        return {
            language,
            direction: 'ltr',
        };
    }
};

export default (initialLocale = DEFAULT_LANGUAGE) => (
    (previousLocale = initialLocale, { type, payload }) => {
        switch (type) {
        case CHANGE_LOCALE:
            return payload; // compatible(payload);
        default:
            return previousLocale;
        }
    }
);
