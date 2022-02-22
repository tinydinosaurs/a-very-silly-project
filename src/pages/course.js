import React, { useState } from 'react';
import Header from '../components/Course/Header/Header';
import Content from '../components/Course/Content/Content';
import Total from '../components/Course/Total/Total';
import Button from '../components/Button/Button';
import History from '../components/Course/History/History';

function Course({ courses }) {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [allClicks, setAll] = useState([]);

    const getTotal = (parts) => {
        return parts.reduce((prev, curr) => prev + curr.exercises, 0);
    };

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'));
        setLeft(left + 1);
    };

    const handleRightClick = () => {
        setAll(allClicks.concat('R'));
        setRight(right + 1);
    };

    const handleClearHistory = () => {
        setAll([]);
        setLeft(0);
        setRight(0);
    };

    const sections = courses.map((course) => {
        return (
            <div key={course.name}>
                <Header title={course.name} />
                <Content parts={course.parts} />
                <Total total={getTotal(course.parts)} />
            </div>
        );
    });

    return (
        <main className='Course'>
            <h1>Course Sections</h1>
            {sections}
            <div>
                <h1>Clicky Buttons</h1>
                {left}
                <Button
                    className='Course__btn'
                    handleClick={handleLeftClick}
                    text='left'
                />
                <Button
                    className='Course__btn'
                    handleClick={handleRightClick}
                    text='right'
                />
                {right}
                <History allClicks={allClicks} />
                <Button
                    className='Course__btn'
                    handleClick={handleClearHistory}
                    text='clear history'
                />
            </div>
        </main>
    );
}

export default Course;
