import React from 'react';

function OrderHistory() {
    const orders = [
        { id: 1, product: 'Product 1', date: '2023-10-01', status: 'Delivered' },
        { id: 2, product: 'Product 2', date: '2023-11-01', status: 'Shipped' },
    ];

    return (
        <div>
            <h2>Order History</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        {order.product} - {order.date} - {order.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OrderHistory;
