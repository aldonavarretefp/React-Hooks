import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    return (
        <>
            <h1>Login Screen</h1>
            <hr/>   

            <button className="btn btn-outline-primary btn-lg btn-block" onClick={()=>setUser({
                id:1234,
                name:'Aldo Yael',
                email:'nazamaldoyael@gmail.com'
            })}>Login</button>
        </>
    )
}

export default LoginScreen
