import styles from "..//styles/Login.module.css"
// import React from "react"
export default function SignUp () {
return (
    <>
    <div className={styles.container}>
        <div className={styles.header}>
        <h2 className={styles.h2}>SIGNUP</h2>
    <p>Create an account to put up properties for rent/sale</p>
        </div>

        <form className={styles.form} action="">
        {/* <label className = {styles.unameLabel} htmlFor="username">Username:</label> */}
      
     
            <input className = {styles.uname}type="text" placeholder="Full Name" id="username" name="username" />
            <br />

            <input className = {styles.uname}type="text" placeholder="National ID" id="userid" name="userid" />
            <br />
           
            <input className = {styles.uname}type="text" placeholder="Phone Number" id="number" name="phone_number" />
            <br />
            <input className = {styles.uname}type="text" placeholder="Email Address" id="email_address" name="email_address" />
            <br />
          

            <input className = {styles.uname} type="password" placeholder="Password"  id="password" name="password" />
            <br />
            <button className= {styles.loginButton}type="submit">Sign Up</button>
        </form>

    </div>

    </>
)

}