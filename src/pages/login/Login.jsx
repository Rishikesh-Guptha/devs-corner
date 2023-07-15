import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="container">
            <div className="head">
                <p className="heading">LOGIN</p>
            </div>
            <div className="content">
                <form action="">
                    <div className="emailid">
                        <label htmlFor="email">Email Address:</label><br />
                        <input type="email" className="email" placeholder='IamBatman@gmail.com'/>
                    </div>

                    <div className="passwords">
                        <label htmlFor="password">Password:</label><br />
                        <input type="password" className="password" placeholder='IamBatman'/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login