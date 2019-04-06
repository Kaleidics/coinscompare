import React from 'react';
import './Search-form.scss'

export default function SearchForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="search" id="search" name="search" placeholder="By coin symbol or name"
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
