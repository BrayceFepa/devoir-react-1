import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0);
    const [className, setClassName] = useState(false);
  return (
      <div className='container mt-5 my-5 p-5'>
          <div className='row'>
              <h2 className='text-center h4 fw-bold'>Bonjour, nous allons voir comment utiliser le UseState pour faire un petit compteur</h2>
              <div className='col-4 mx-auto d-flex justify-content-center align-items-center flex-column my-3'>
                  <button className='btn btn-primary' onClick={() => { setCount(count + 1) }}>Incrémenter 1</button>
                  <div className='fw-bold text-center mt-3'>{ count }</div>
              </div>

              <div className="col-8 mt-4 mx-auto">
          <h2 className="text-center fw-bold ">
            Utilisation du UseState sur un petit formulaire
          </h2>
          <form className="mx-auto d-flex justify-content-center align-items-center">
            <div className="form-group col-4 ">
              <label for="name">Votre Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                onFocus={() => setClassName("btn-primary")}
              ></input>
            </div>
            <div className="form-group mt-4 ms-3">
              <button type="button" className={`btn ${className}`}>
                Valider
              </button>
            </div>
          </form>
        </div>
          </div>
    </div>
  )
}

export default UseState