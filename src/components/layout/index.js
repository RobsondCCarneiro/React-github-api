import React from 'react';
import useGithub from "../../hooks/github-hooks"
import Header from '../header'
import * as S from './styled';

const layout = ({ children }) =>{
    const { githubState } = useGithub();
    return (
        <S.WrapperLayout>
            <Header />
            {githubState.loading ? <p>Loading</p> : <>{children}</>}
        </S.WrapperLayout>
    );
}

export default layout;