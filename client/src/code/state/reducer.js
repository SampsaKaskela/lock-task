import { SET_CODE, SET_UNLOCKED, SET_TITLE } from './actionTypes';

const initialState = {
    title: 'Enter code',
    code: '',
    unlocked: false
};

const codeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CODE: {
            const code = action.payload;
            return { ...state, code };
        }
        case SET_UNLOCKED: {
            const unlocked = action.payload;
            return { ...state, unlocked };
        }
        case SET_TITLE: {
            const title = action.payload;
            return { ...state, title };
        }
        default:
            return state;
    }
};

export default codeReducer;
