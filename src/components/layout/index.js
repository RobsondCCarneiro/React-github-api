import React from 'react';

function layout({ children }){
    return (
        <section>
            <header>header</header>
            {children}
        </section>
    );
}

export default layout;