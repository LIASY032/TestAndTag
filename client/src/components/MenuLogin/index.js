import React from "react";
import "./menu.css";
import { Button, Menu, MenuItem } from "@mui/material";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import { logout } from "../../store/actions";

import { useDispatch } from "react-redux";
function MenuLogin({ name }) {
  const dispatch = useDispatch();
  // show the menu bar
  const [show, setShow] = React.useState(false);
  const ref = React.useRef();
  return (
    <div className="menu">
      <Button
        variant="text"
        size="large"
        sx={{
          color: "#000000",
        }}
        startIcon={<AddModeratorIcon />}
        href="/"
      >
        Test & Tag
      </Button>
      {/* if the name has presented */}
      {name ? (
        <div className="user-info">
          <Button
            color="success"
            ref={ref}
            id="user-button"
            aria-controls={show ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={show ? "true" : undefined}
            onClick={() => setShow(true)}
          >
            {name}
          </Button>
          <Menu
            id="basic-menu"
            open={show}
            anchorEl={ref.current}
            onClose={() => setShow(false)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              onClick={async () => {
                await logout(dispatch);
                window.location.href = "/";
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="text"
          sx={{
            color: "#000000",
          }}
          href="/sign_in"
        >
          Sign In
        </Button>
      )}
    </div>
  );
}

export default MenuLogin;
// class MenuLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             item: 0,
//             name: this.props.name,
//             anchorEL: null,
//             open : Boolean(this.anchorEL),
//             isSignIn: this.props.content ?? false
//         }
//         this.handleButtonClick = this.handleButtonClick.bind(this);
//         this.handleListClose = this.handleListClose.bind(this);
//     }
//     handleTitleClick () {
//         window.location.href = "/";
//     }

//     handleButtonClick(e) {
//         console.log("test:" + e.currentTarget);
//         this.setState({
//             anchorEl: e.currentTarget,
//             open: Boolean(e.currentTarget)
//         });
//     }

//     handleListClose() {
//         this.setState({
//             anchorEl: null,
//             open: false
//         })
//     }

//     // handleLogoutClick() {
//     //
//     // }

//     handleDashboardClick() {
//         window.location.href = "/dashboard";
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className="menu">
//                     {/*<div className="menu-title" onClick={this.handleTitleClick}>Test & Tag</div>*/}
//                     <Button
//                         variant="text"
//                         size="large"
//                         sx={{
//                             color: '#000000',
//                         }}
//                         onClick={this.handleTitleClick}
//                         startIcon={<AddModeratorIcon />}
//                     >Test & Tag</Button>
//                     <div className="user-info">
//                             <Button
//                                 color="success"
//                                 id="user-button"
//                                 aria-controls={this.state.open ? 'basic-menu' : undefined}
//                                 aria-haspopup="true"
//                                 aria-expanded={this.state.open ? 'true' : undefined}
//                                 onClick={this.handleButtonClick}
//                             >
//                                 {this.state.name}
//                             </Button>
//                             <Menu
//                                 id="basic-menu"
//                                 anchorEl={this.state.anchorEl}
//                                 open={this.state.open}
//                                 onClose={this.handleListClose}
//                                 MenuListProps={{
//                                     'aria-labelledby': 'basic-button',
//                                 }}
//                             >
//                                 <MenuItem onClick={this.handleDashboardClick}>Dashboard</MenuItem>
//                                 <MenuItem onClick={() => this.props.changeIsLogin(false)}>Logout</MenuItem>
//                             </Menu>
//                     </div>

//                 </div>
//             </Fragment>
//         );
//     }
// }

// export default MenuLogin ;
