import React from 'react';
import * as S from './styled'

const layout = ({ children }) =>{
    return (
        <S.WrapperLayout>
            <header>header</header>
            {children}
        </S.WrapperLayout>
    );
}

export default layout;