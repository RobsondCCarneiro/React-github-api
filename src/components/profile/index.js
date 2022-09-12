import React from 'react';
import * as S from './styled'

const Profile = () => {
    return <S.Wrapper>
        <S.WrapperImage 
            src="https://avatars.githubusercontent.com/u/43090615?v=4" 
            alt="Picture of user" 
        />
        <S.WrapperInfoUser>
            <div>
                <h1>Robson da Costa</h1>
                <S.WrapperUsername>
                    <h3>Username: </h3>
                    <a href="https://github.com/RobsondCCarneiro" 
                    target="_blank"
                    rel="noreferrer">RobsondCCarneiro</a>
                </S.WrapperUsername>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>;
};

export default Profile;