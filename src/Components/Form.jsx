import React from "react";
import { useState } from 'react'

const Form = () => {
  const [usuario, setUsuario]= useState({
    nombreCompleto: "",
    email: "",
  })

  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault();

    const nombreSinEspacios = usuario.nombreCompleto.trim();
    const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validation = validEmail.test(usuario.email)

    if (nombreSinEspacios.length > 5 && validation===true) {
        setEnviado(true)
        setError(false)
    } else {
        setError(true)
        setEnviado(false)
    }
  }

  return (
    <div>
      <form onSubmit={onSubmitForm} className="form">
        <label style={{paddingBottom:"5px"}}>Nombre y apellido</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, nombreCompleto: event.target.value})}/>
        <br/>
        <label style={{paddingBottom:"5px"}}>Email</label>
        <input type="text" onChange={(event) => setUsuario({...usuario, email: event.target.value})}/>
        <br/>
        <button type='submit'>Enviar</button>
          {enviado && <h3 style={{color: 'red'}}> Gracias {usuario.nombreCompleto}, te contactaremos cuando antes vía mail</h3> }
          {error && <h3 style={{color: 'red'}}>Por favor verifique su información nuevamente</h3>}
      </form>
    </div>
  );
};

export default Form;