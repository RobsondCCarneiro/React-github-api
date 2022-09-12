import React from 'react';
import * as S from './styled';
import RepositoryItem from '../repository-item';

const Repositories = () => {
    return (
        <S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
                <RepositoryItem 
                    name="algoritmoGenerico"
                    linkToRepo="https://github.com/RobsondCCarneiro/algoritmoGenerico"
                    fullName="RobsondCCarneiro/algoritmoGenerico"
                />
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <RepositoryItem
                    name="Blog-do-Robson"
                    linkToRepo="https://github.com/RobsondCCarneiro/Blog-do-Robson"
                    fullName="RobsondCCarneiro/Blog-do-Robson"
                />
            </S.WrapperTabPanel>
        </S.WrapperTabs>
    );
}

export default Repositories;