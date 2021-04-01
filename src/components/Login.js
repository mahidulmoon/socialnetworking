import React from 'react';
import {Auth} from 'aws-amplify';
function Login()
{

    

    return(
        <div >
            <form>
                <input type="text" placeholder="email"  />
                <input type="text" placeholder="password"  />
                <input type="text" placeholder="name"  />
                <input type="text" placeholder="dob"  />
                <button type="submit">Signup</button>
            </form>
                <br />
            
            
            <button onClick={()=>Auth.federatedSignIn({provider:"Google"})}>Login with Google</button>
            <br />
            <button onClick={()=>Auth.federatedSignIn({provider:"Facebook"})}>Login with FaceBook</button>
        </div>
    );
}

export default Login;