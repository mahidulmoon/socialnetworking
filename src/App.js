import React, {useState, useEffect} from 'react';
import {Auth, Hub, API, graphqlOperation} from 'aws-amplify';
import Login from './components/Login'
import {getUser, listUsers} from './graphql/queries';

function App() {

  const [isLoading, setLoading]=useState(true);
  const [user, setUser] = useState(null)

  useEffect(()=>{
    let updateUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(user)
        setLoading(false)
        console.log(user)
        if(user !== null)fetchUsers(user.attributes.sub);
        
      } catch {
        setUser(null)
      }
      setLoading(false)
    }
    Hub.listen('auth', updateUser) // listen for login/signup events
   // we are not using async to wait for updateUser, so there will be a flash of page where the user is assumed not to be logged in. If we use a flag 
    updateUser() // check manually the first time because we won't get a Hub event
    
    return () => Hub.remove('auth', updateUser) // cleanup


  },[])

  async function fetchUsers(userID)
  {
    try{
      const usersData = await API.graphql(graphqlOperation(listUsers));
      console.log(usersData);
    }catch(err){
      console.log(err);
    }
    
  }
  /// custom signup
  async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username: 'it will be email address in our case', password: 'mycoolpassword',
            attributes: {
                email:"", // must send in our case
                name:"", // it's options in our case
                nickname:"", // must send in our case
                birthdate:"", // it's options in our case
                gender:"", // it's optional
               
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
// confirm signup with code
async function confirmSignUp() {
  try {
    let username=""
    let code=""
    await Auth.confirmSignUp(username, code);
  } catch (error) {
      console.log('error confirming sign up', error);
  }
}
/// custom signin
async function signIn() {
  try {
    let username=""
    let password=""
      const user = await Auth.signIn(username, password);
  } catch (error) {
      console.log('error signing in', error);
  }
}


  async function signOut() {
    try {
        console.log("Sign out Click")
        await Auth.signOut();
        setUser(null)
        //setLoading(true)
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  function verifyLoggedIn()
  {
    if(isLoading){
      return <h1>Loading...</h1>;
    }else{
      const isLoggedIn = (null !== user);
      if(isLoggedIn)
      {
        return(
          <React.Fragment>
            <h1>Social Networking Site</h1>
            <button onClick={signOut}>Sign out</button>
          </React.Fragment>
        );
        
      }else{
        //Auth.federatedSignIn();
        return <Login />
      }
    }
  }

  return (
    <div className="App">
     {verifyLoggedIn()}
    </div>
  );
}

export default App;
