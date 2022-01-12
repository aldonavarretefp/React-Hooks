import React ,{useEffect}from 'react'
import { useForm } from '../../hooks/useForm';


const FormWithCustomHook = () => {

    
    const [formValues, handleInputChange] = useForm();
    
    const {name, email, password} = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }


    return (
        <>
            <p className='display-3 text-center m-5'>Form with custom Hook</p>
            <hr></hr>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='h4'>Email address</label>
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label  className="h4">Name</label>
                        <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Name"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label  className="h4">Password</label>
                        <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block mt-3"

                    >Submit</button>
                </form>
            </div>

        </>
    )
}

export default FormWithCustomHook
