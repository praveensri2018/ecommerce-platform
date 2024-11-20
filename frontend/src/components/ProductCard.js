import React from 'react';

function ProductCard() {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
    ];

    return (
        <div>
            <h2>Products</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
