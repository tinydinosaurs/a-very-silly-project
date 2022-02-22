import React from 'react';
import Button from '../Button/Button';
import Votes from './Votes';

const Platitude = ({ platitude, handleClick, vote }) => {
    return (
        <div>
            <h1>{platitude}</h1>
            <Button
                className='Platitudes__vote-btn'
                text='vote'
                handleClick={handleClick}
            />
            <Votes votes={vote} />
        </div>
    );
};

export default Platitude;
