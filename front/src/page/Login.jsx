import { useLazyQuery } from "@apollo/client"
import { LOGIN } from "../graphql/queries"
import { useAuth } from "../hook/authHook"
import { useState } from "react";

export const Login = () => {
  const auth = useAuth()
  const [getToken, {loading, error, data}] = useLazyQuery(LOGIN)
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginQuery = () => {
    getToken({
      variables:{
        email: email,
        password
      }
    })
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    console.log(data);
  };
  return (
    <section>
      <h2>Login view</h2>
      <input type="text" 
        placeholder="email"
        onChange={e=>setEmail(e.target.value)} />
      <input type="password" 
        placeholder="password"
        onChange={e=>setPassword(e.target.value)} />
      {/* <button onClick={() => { auth.signin(() => { }) }}>Login</button> */}
      <button onClick={loginQuery}>Login</button>
    </section>
  )
}