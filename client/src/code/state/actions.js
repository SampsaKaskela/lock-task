import createAction from '../../common/functions/createAction';
import { SET_CODE, SET_UNLOCKED, SET_TITLE } from './actionTypes';

export const setUnlocked = createAction(SET_UNLOCKED);
export const setTitle = createAction(SET_TITLE);
export const setCode = createAction(SET_CODE);

export const appendToCode = (number) => {
    return (dispatch, getState) => {
        const { codeState: { code } } = getState();
        const newCode = code + number;
        if (newCode.length >= 4) {
            dispatch(checkCode(newCode));
        }
        dispatch(setCode(newCode));
    };
};

export const checkCode = (code) => {
    return (dispatch) => {
        fetch('/api/check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code
            })
        }).then(response => {
            if (response.status === 200) {
                dispatch(setUnlocked(true));
                dispatch(setTitle('Code correct'));
            } else {
                dispatch(setUnlocked(false));
                dispatch(setTitle('Code incorrect'));
                setTimeout(() => {
                    dispatch(setTitle('Enter code'));
                }, 3000);
            }
            dispatch(setCode(''));
        });
    };
};
