import React, { Component, useState } from 'react'

const Search = ({ searchUsers }) => {
    const[name, setName] = useState(
        {
            text: ''
        }
    );

    const onChange = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        searchUsers(name.text);
        setName(
            {
                text: ''
            }
        );
    }

    return (
        <div>
        <form onSubmit={onSubmit} className='form'>
            <input 
                type="text" 
                name='text' 
                placeholder='Search Users...' 
                value={name['text']}
                onChange={onChange}
            />
            <input type="submit" value='Search' className='btn btn-dark btn-block' />

        </form>
        </div>
    )
}

export default Search
