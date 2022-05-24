import React from "react";
import "./signIn.css"
import {Button, FormControlLabel, FormGroup, FormLabel, Input, Radio} from "@mui/material";

function SignIn() {
    const accountRef = React.useRef();
    const passwordRef = React.useRef();
    return (
        <div className="sign-in-container">
            <div className="sign-in-title">Sign In</div>
            <div className="sign-in-tips">Staff Only - Sign into your administration staff account</div>
            <FormGroup sx={{marginTop: '20px', padding: '30px 30px', border: '1px solid'}}>
                <FormLabel>Email Address</FormLabel>
                <FormControlLabel
                    ref={accountRef}
                    control={<Input fullWidth type="email" />}></FormControlLabel>
                <FormLabel sx={{marginTop: '30px'}}>Password</FormLabel>
                <FormControlLabel
                    ref={passwordRef}
                    control={<Input fullWidth type="password" />}></FormControlLabel>
                <Button
                    variant="contained"
                    sx={{
                        marginTop: '20px'
                    }}
                    color="success"
                    onClick={async () => {
                        // todo: sign in

                        if (true) {
                            window.location.href = "/dashboard";
                        }

                    }}
                >SIGN IN</Button>
            </FormGroup>
        </div>
    );
}

export default SignIn;
