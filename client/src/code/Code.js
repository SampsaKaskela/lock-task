import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Numpad, Paper, Title } from '../common';
import { appendToCode } from './state/actions';
import { ReactComponent as LockIcon } from '../images/lock.svg';
import { ReactComponent as LockOpenIcon } from '../images/lock_open.svg';

const Code = () => {
    const { unlocked, title } = useSelector(state => state.codeState);
    const dispatch = useDispatch();

    const appendNumber = (event) => {
        const number = event.currentTarget.textContent;
        dispatch(appendToCode(number));
    };

    return (
        <Paper style={{ width: '100%', maxWidth: 500 }}>
            <Title aria-live='polite'>{title}</Title>
            <Numpad role='group' aria-label='Numpad'>
                <Button onClick={appendNumber}>1</Button>
                <Button onClick={appendNumber}>2</Button>
                <Button onClick={appendNumber}>3</Button>
                <Button onClick={appendNumber}>4</Button>
                <Button onClick={appendNumber}>5</Button>
                <Button onClick={appendNumber}>6</Button>
                <Button onClick={appendNumber}>7</Button>
                <Button onClick={appendNumber}>8</Button>
                <Button onClick={appendNumber}>9</Button>
                <span />
                <Button onClick={appendNumber}>0</Button>
                <Button aria-label={unlocked ? 'Unlocked' : 'Locked'}>
                    {unlocked ? <LockOpenIcon /> : <LockIcon />}
                </Button>
            </Numpad>
        </Paper>
    );
};

export default Code;
