import React, { useState } from 'react';

function Filter() {
    const [search, setSearch] = useState('');

    return (
        <div>
            <h2>Filter Products</h2>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default Filter;
