import React, {useState} from 'react';

//the data we will be storing and manipulating
export type LoginData = {
    FName: string,
    LName: string,
    email: string,
    password: string,
    confirmPassword: string
}


export type LoginProps = {
    //access point to the data
    loginData: LoginData,
    //setter for the data
    setLoginData: (login: LoginData) => void;
};
  
//the created context that can be used elsewhere to gain access to loginData and set it
export const LoginContext = React.createContext<LoginProps>(
  {loginData: {FName: '', LName: '', email: '', password: '', confirmPassword: ''}, setLoginData: login => console.warn('no login provider')}
);

//this is the provider that wraps the outer most element in your ap to provide context access to nested components
export const LoginProvider = ({children}) => {
    const [loginData, setLoginData] = useState({FName: '', LName: '', email: '', password: '', confirmPassword: ''})

    return (
        <LoginContext.Provider value={{loginData, setLoginData}}>
            {children}
        </LoginContext.Provider>
    )
}