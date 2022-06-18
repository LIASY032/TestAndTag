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

  // control the menu
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
            <MenuItem href="/dashboard">Dashboard</MenuItem>
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
        // if the user does not login
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
