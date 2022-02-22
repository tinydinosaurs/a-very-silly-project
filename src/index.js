import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Course from './pages/course';
import Platitudes from './pages/platitudes';
import Notes from './pages/notes';
import Countries from './pages/countries';
import Header from './components/Global/Header';
import { courses, notes } from './data/data';
import './index.css';

const location = window.location.href;

ReactDOM.render(
    <BrowserRouter>
        <Header current={location} />
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/course' element={<Course courses={courses} />} />
            <Route path='/platitudes' element={<Platitudes />} />
            <Route path='/notes' element={<Notes notes={notes} />} />
            <Route path='/countries' element={<Countries />} />
        </Routes>
    </BrowserRouter>,

    document.getElementById('root')
);
