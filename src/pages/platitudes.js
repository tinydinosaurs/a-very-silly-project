import React, { useState } from 'react';
import { platitudes } from '../data/data';
import Platitude from '../components/Platitudes/Platitude';
import Button from '../components/Button/Button';

const platitudesObj = {};

platitudes.forEach((platitude) => {
    platitudesObj[platitude] = 0;
});

function Platitudes() {
    // const randomNum = Math.floor(Math.random() * platitudes.length);
    const [idx, UseIdx] = useState(
        Math.floor(Math.random() * platitudes.length)
    );
    const [votes, setState] = useState(platitudesObj);

    const platitude = platitudes[idx];

    const handleClick = () => {
        UseIdx(Math.floor(Math.random() * platitudes.length));
    };

    const handleVote = () => {
        setState({
            ...votes,
            [platitude]: (votes[platitude] += 1),
        });
    };

    // Getting platitude with highest vote count - individual steps for readability.
    const voteCounts = Object.values(votes);
    const highestVoteCount = Math.max(...voteCounts);
    const highestVoteCountIndex = voteCounts.indexOf(highestVoteCount);
    const platitudeWithHighestVoteCount =
        Object.keys(votes)[highestVoteCountIndex];

    return (
        <main className='Platitudes'>
            <Button
                className='Platitudes__btn'
                handleClick={handleClick}
                text='new platitude'
            />
            <div className='Platitudes__content'>
                <Platitude
                    platitude={platitude}
                    handleClick={handleVote}
                    vote={votes[platitude]}
                />

                <div className='Platitudes__most-votes'>
                    <p>
                        Platitude with most votes:
                        <i>{platitudeWithHighestVoteCount}</i>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Platitudes;
