import React from 'react';

function AdminCustomerList() {
    const customers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminCustomerList;
