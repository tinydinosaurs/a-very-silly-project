import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button/Button';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');
    const [showCountry, setShowCountry] = useState({});

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((response) => {
            setCountries(response.data);
        });
    }, []);

    const handleSearch = (e) => {
        setValue(e.target.value);
        setShowCountry({});
    };

    const handleShowCountry = (country) => {
        setShowCountry(country);
    };

    const renderCountryList = () => {
        const filteredCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(value)
        );

        if (filteredCountries.length === 250) {
            return (
                <ul>
                    <li>type a country name</li>
                </ul>
            );
        }

        if (filteredCountries.length > 10) {
            return (
                <ul>
                    <li>too many matches. add more letters!</li>
                </ul>
            );
        }

        if (filteredCountries.length === 1) {
            const country = filteredCountries[0];
            const languages = Object.values(country.languages);
            return (
                <div className='Country'>
                    <h2>{country.name.common}</h2>
                    <p>
                        <b>Capital</b>: {country.capital}
                    </p>
                    <p>
                        <b>Population</b>: {country.population}
                    </p>
                    <ul>
                        <b>Languages:</b>
                        {languages.map((language) => (
                            <li
                                key={`${country.name.common} - ${language}`}
                                className='Country__languages'
                            >
                                {language}
                            </li>
                        ))}
                    </ul>
                    <img
                        src={country.flags.svg}
                        alt={`${country.name.common} flag`}
                        width='100'
                    />
                </div>
            );
        }
        return (
            <ul>
                {filteredCountries.map((country) => {
                    return (
                        <li key={`list ${country.name.common}`}>
                            {country.name.common}
                            <Button
                                className='Country__btn'
                                text='show'
                                handleClick={() => handleShowCountry(country)}
                            />
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <div className='Countries'>
            <div className='home-link'></div>
            <h2>Find a Country</h2>
            <form className='Countries__form__container'>
                <div className='Countries__form__inputs'>
                    <input
                        type='text'
                        className='Countries__form__text'
                        placeholder='search country'
                        value={value}
                        onChange={handleSearch}
                    />
                </div>
            </form>
            <div className='Countries__list'>{renderCountryList()}</div>
            {Object.keys(showCountry).length === 0 ? null : (
                <div className='Country'>
                    <h2>{showCountry.name.common}</h2>
                    <p>
                        <b>Capital</b>: {showCountry.capital}
                    </p>
                    <p>
                        <b>Population</b>: {showCountry.population}
                    </p>
                    <ul>
                        <b>Languages:</b>
                        {Object.values(showCountry.languages).map(
                            (language) => (
                                <li
                                    key={`${showCountry.fifa} - ${language}`}
                                    className='Country__languages'
                                >
                                    {language}
                                </li>
                            )
                        )}
                    </ul>
                    <img
                        src={showCountry.flags.svg}
                        alt={`${showCountry.name.common} flag`}
                        width='100'
                    />
                </div>
            )}
        </div>
    );
};

export default Countries;
