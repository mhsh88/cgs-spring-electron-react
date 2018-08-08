export const CHANGE_LOCALE = 'HCORE/CHANGE_LOCALE';
export const CHANGE_DIRECTION = 'HCORE/CHANGE_DIRECTION';

export const changeLocale = locale => ({
    type: CHANGE_LOCALE,
    payload: locale,
});

export const changeDirection = direction => ({
    type: CHANGE_DIRECTION,
    payload: direction,
});
