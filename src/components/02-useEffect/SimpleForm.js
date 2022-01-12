import React ,{useEffect,useState}from 'react'

const SimpleForm = () => {
    const [state, setState] = useState({
        name:'',
        email:''
    });

    const {name, email} = state;

    
    useEffect(() => {
        console.log("hey, I'm rendering SimpleForm");
    }, [])

    useEffect(() => {
       console.log("Email changed");
    }, [email])
    useEffect(() => {
       console.log("Name changed");
    }, [name])


    const handleChange =({target}) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return (
        <>
            <p className='display-2 text-left m-5'>useEffect</p>
            <hr></hr>
            <div class="container">
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
                        autocomplete="off"
                        value={name}
                        onChange={handleChange}
                        />
                    </div>
                </form>
            </div>

        </>
    )
}

export default SimpleForm
