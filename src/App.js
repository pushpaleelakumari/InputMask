import './App.css';
import "jquery"
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask'

function App(props) {
  const [phone, setPhone] = useState('');
  const handleInput = ({ target: { value } }) => setPhone(value);
  function PhoneInput(props) {
    return (
      <InputMask
        mask='( 9 9 9 ) 9 9 9-9 9 9 9'
        value={props.value}
        onChange={props.onChange}
        placeholder="( _ _ _ ) _ _ _ _ - _ _ _" style={{ border: "none", outline: "none" }}></InputMask>
    )
  }
  var handleKey = (e) => {
    const keyCode = e.keyCode
    console.log(keyCode)
  }

  var handleChange = (e) => {
    e.target.value.replace(/^\w{5}$/, "")

  }

  return (
    <div className='b-5'>
      <div className="form-control">

        <PhoneInput
          value={phone}
          onChange={handleInput}
          style={{ border: "none", outline: "none" }}
        >
        </PhoneInput>
      </div>
      <div style={{ paddingTop: '12px' }}>Phone: {phone}</div>
      <div className="input">
        <input type="text" onKeyDown={handleKey} value={handleChange} />
      </div>
    </div>
  );
}

export default App;
