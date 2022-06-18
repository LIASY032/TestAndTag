import React from "react";
import "./signIn.css";
import { Button, FormGroup, FormLabel, Input } from "@mui/material";
import { login } from "../../store/actions";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
function SignIn() {
  const dispatch = useDispatch();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  async function handleLogin() {
    const success = await login(
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      dispatch
    );

    if (success) {
      window.location.href = "/dashboard";
    }
  }

  return (
    <>
      <div className="sign-in-container">
        <div className="sign-in-title">Sign In</div>
        <div className="sign-in-tips">
          Staff Only - Sign into your administration staff account
        </div>
        <FormGroup sx={{ marginTop: "20px" }}>
          <FormLabel>Email Address</FormLabel>
          <Form.Control
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
          <FormLabel sx={{ marginTop: "30px" }}>Password</FormLabel>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
            }}
            color="success"
            onClick={handleLogin}
          >
            SIGN IN
          </Button>
        </FormGroup>
      </div>
    </>
  );
}

export default SignIn;

// class SignIn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             account: '',
//             password: ''
//         }
//         this.handleItemChange = this.handleItemChange.bind(this);
//         this.handleBtnClick = this.handleBtnClick.bind(this);
//     }

//     handleItemChange(event) {
//         const target = event.target;
//         const name = target.name;
//         this.setState({
//             [name]: target.value
//         })
//     }

//     handleBtnClick() {
//         // to do - sign in
//         this.props.changeIsLogin(true);
//         window.location.href = "/dashboard";
//     }

//     render() {
//         return (
//             <div className="sign-in-container">
//                 <div className="sign-in-title">Sign In</div>
//                 <div className="sign-in-tips">Staff Only - Sign into your administration staff account</div>
//                 <FormGroup sx={{marginTop: '20px'}}>
//                     <FormLabel>Email Address</FormLabel>
//                     <Input name="account" value={this.state.account} onChange={this.handleItemChange}/>
//                     <FormLabel sx={{marginTop: '30px'}}>Password</FormLabel>
//                     <Input type="password" name="password" value={this.state.password}
//                            onChange={this.handleItemChange}/>
//                     <Button
//                         variant="contained"
//                         sx={{
//                             marginTop: '20px'
//                         }}
//                         color="success"
//                         onClick={this.handleBtnClick}
//                     >SIGN IN</Button>
//                 </FormGroup>
//             </div>
//         );
//     }
// }

// export default SignIn;
