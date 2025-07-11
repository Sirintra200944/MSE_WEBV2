import React from 'react';
import Mobile from './Mobile';
import Dashboard from './Dashboard';
import ERP from './EPP';
import HIS from './HIS';

const Product = () => {
    return (
        <section id="product">
            <>
                <HIS />
                <ERP />
                <Dashboard />
                <Mobile />
            </>
        </section>
    );
};

export default Product;
