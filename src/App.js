import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <main>
            <div className='Home'>
                <h1>All Projects</h1>
                <div className='Home__projects'>
                    <Link to='/course' className='Home__btn'>
                        Course
                    </Link>
                    <Link to='/platitudes' className='Home__btn'>
                        Platitudes
                    </Link>
                    <Link to='/notes' className='Home__btn'>
                        Notes
                    </Link>
                    <Link to='/countries' className='Home__btn'>
                        Countries
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default App;
