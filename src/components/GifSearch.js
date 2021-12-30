import React, { useState } from 'react';

function GifSearch({ onSubmitQuery }) {
    const [query, setQuery] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onSubmitQuery(query);
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor='search'>Enter a search term:</label>
                    <input
                        id="search"
                        className="form-control"
                        type="text"
                        value={query}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Find Gifs
                </button>
            </form>
        </div>
    )
}

export default GifSearch;