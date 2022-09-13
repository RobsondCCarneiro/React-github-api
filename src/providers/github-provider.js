import React, { createContext, useState, useCallback } from 'react'
import api from '../providers/github-provider'

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const getUser = (username) => {
        api.get(`users/${username}`).then(({ data: { user } }) => {
            setGithubState((prevState) => ({
                ...prevState,
                user: {
                    login: user.data,
                    name: user.name,
                    htmlUrl: user.htmlUrl,
                    blog: user.blog,
                    company: user.company,
                    location: user.location,
                    followers: user.followers,
                    following: user.following,
                    public_gists: user.public_gists,
                    public_repos: user.public_repos,
                },
            }));
        });
    };

    const contextValue = {
        githubState,
        gitUser: useCallback((username) => getUser(username), []),
    };
    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;