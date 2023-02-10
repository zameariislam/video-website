import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { searched } from '../features/filter/filterSlice';

const Search = () => {
    const { search } = useSelector((state => state.filter))
    const match = useMatch('/')
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [input, setInput] = useState(search)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searched(input))

        // if user not in home page 
        if (!match) {
            navigate('/')

        }





    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search"
            />
        </form>
    );
};

export default Search;