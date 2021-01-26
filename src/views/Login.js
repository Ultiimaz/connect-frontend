import React,{useState} from 'react';
import {Button, Textbox} from "../components/Utils";
import {store} from "../redux/store";
import {login} from "../redux/actions/user";
import {useSelector} from "react-redux";
import {Form} from "../components/Form";
const Login = props => {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const loading = useSelector(state => state.general.status.login);
  const authenticate = () => {
    if(!loading){
      // disable the button when its not used

      store.dispatch(login(email,password));
    }
  }
  return (
    <>
    <div className="m-auto w-1/2 p-10">
     <Form onSubmit={authenticate}>
      <Textbox id={"email"} label="Email" value={email} onChange={event => setEmail(event.target.value)} type="textbox"/>
      <Textbox id={"password"} label="Password" value={password} onChange={event => setPassword(event.target.value)} type="password"/>
      <Button type={"submit"} loading={!!loading}>Authenticate</Button>
     </Form>
        <button onClick={() => authenticate()}>Sign in with Google</button>
    </div>
      </>
  );
}
export default Login;
