import { useState } from "react";

const Form = () => {
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [payload, setPayload ] = useState();

    console.log(payload, name, email, password);

    const changeName = (e) => {setName(e.target.value)}
    const changeEmail = (e) => {setEmail(e.target.value)}
    const changePassword = (e) => {setPassword(e.target.value)}

    const handleSubmit = (e) =>{
        e.preventDefault();
        setPayload({name, email, password}); 
    }

    if(payload){
        console.log(payload);
        return(<h2>Gracias por llenar el formulario</h2>)
    }

    return(
        <div className="row">
            <h1>Formulario</h1>
            <form className="form-group" onSubmit={handleSubmit}>
                <label htmlFor="inputName">Nombre</label>
                <input className="form-control" type="text" value={name} id="inputName" onChange={changeName}></input>
                <label htmlFor="inputEmail">Email</label>
                <input className="form-control" type="email" id="inputEmail" value={email} onChange={changeEmail}></input>
                <label htmlFor="inputPassword">Contraseña</label>
                <input className="form-control" type="password" id="inputPassword" value={password} onChange={changePassword}></input>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Form;