import { DEFAULT_LANGUAGE } from './index';

export const resolveBrowserLocale = (defaultLanguage = DEFAULT_LANGUAGE) => {
    // from http://blog.ksol.fr/user-locale-detection-browser-javascript/
    // Rely on the window.navigator object to determine user locale
    const { language, browserLanguage, userLanguage } = window.navigator;
    return (language || browserLanguage || userLanguage || defaultLanguage).split('-')[0];
};
