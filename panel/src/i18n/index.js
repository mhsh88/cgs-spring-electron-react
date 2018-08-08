import { englishMessages, persianMessages, arabicMessages } from '../core';

import customArabicMessages from './ar';
import customEnglishMessages from './en';
import customPersianMessages from './fa';

export default {
    fa: { ...persianMessages, ...customPersianMessages },
    en: { ...englishMessages, ...customEnglishMessages },
    ar: { ...arabicMessages, ...customArabicMessages },
};
