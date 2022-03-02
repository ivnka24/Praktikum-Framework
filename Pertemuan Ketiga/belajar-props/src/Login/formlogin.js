import React from "react";
import './login.css';

const Loginform = () => {
    return (
        <div className="container">
            <h2>Form Login</h2>
            <div className="form-login">
                <h1>Tugas Ketiga</h1>
                <form action="" method="POST">
                    username<input type="text" placeholder="Masukkan username"></input>
                    pass<input type="password" placeholder="Masukkan pass"></input>
                    <button className="login">Login</button>
                </form>
                <input type="checkbox"></input>Remember Me<br/>
                <button className="cancel-login">Cancel</button>
            </div>
        </div>
    )
}

export default Loginform;