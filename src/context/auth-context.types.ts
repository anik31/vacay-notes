export type User = {
    email: string,
    uid: string
};

export type AuthPropsType = {
    user: User, 
    isLoggedIn: boolean, 
    isAuthLoading: boolean, 
    loginUser: (value: string, value1: string) => void, 
    signUpUser: (value: string, value1: string) => void, 
    logoutUser: () => void
};

export type LocationState = {
    from: {pathname: string}
};
