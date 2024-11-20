import React from 'react';

function CustomerProfile() {
    const user = { name: 'John Doe', email: 'john@example.com' };

    return (
        <div>
            <h2>Customer Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default CustomerProfile;
