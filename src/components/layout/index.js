import React from 'react';

const layout = ({ children }) =>{
    return (
        <section>
            <header>header</header>
            {children}
        </section>
    );
}

export default layout;