import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const AboutScreen = () => {

    const {user,setUser} = useContext(UserContext);

    const handleClick = () => {
        setUser({});
    }

    return (
        <>
            <h1>About Screen</h1>
            <hr/>
            <pre>{
                JSON.stringify(user,null,2)
            }</pre>
            <button className="btn btn-outline-primary btn-lg btn-block" onClick={handleClick}>Logout</button>
        </>
    )
}

export default AboutScreen
