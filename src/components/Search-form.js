import React from 'react';
import './Search-form.css'

export default function SearchForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>
            <input type="search" id="search" name="search" placeholder="Search by coin symbol or name"
                onChange={e => props.onChange(e.target.value)} />
        </form>
    );
}
