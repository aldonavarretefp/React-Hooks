import React ,{useEffect,useState}from 'react'
import Message from './Message';

const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    
    
    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [email])
    useEffect(() => {

    }, [name])


    const handleChange =({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <p className='display-2 text-left m-5'>useEffect</p>
            <p className='h2 text-left m-5'>Type 123 in Name to see the unmount component.</p>
            <hr></hr>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label className='h4'>Email address</label>
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            {name==="123" && <Message/>}

        </>
    )
}

export default SimpleForm
