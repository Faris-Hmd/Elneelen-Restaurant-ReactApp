/** @format */

import React from 'react'

const Forms = () => {
    return (
        <div>
            <form id="signIn">
        <i className="fa fa-user fa-2x"></i>
        <input type="text" placeholder="Username" />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log in" />
        <div className="creatAccount">
          haven’t account?
          <span>Creat Now</span>
        </div>
      </form>

      <form id="signUp">
        <i className="fa fa-user fa-2x"></i>
        <input type="text" placeholder="Username" />
        <br />
        <i className="fa fa-envelope fa-2x"></i>
        <input type="email" placeholder="Email" />
        <br />
        <i className="fa fa-credit-card fa-2x"></i>
        <input type="number" placeholder="Credit Card" />
        <br />
        <i className="fa fa-lock fa-2x"></i>
        <input type="password" placeholder="Password" />
        <input type="submit" value="Creat Now" />
        <br />
        <div className="already">
          Already have acount?
          <span>Login</span>
        </div>
      </form>
        </div>
    )
}

export default Forms