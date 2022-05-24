import {Component} from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Tooltip} from "@mui/material";

class ResultIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.flag) {
            return (
                <Tooltip title="Successed">
                    <CheckIcon color="success" />
                </Tooltip>

            );
        } else {
            return (
                <Tooltip title="Failed">
                    <ClearIcon color="error"/>
                </Tooltip>
            );
        }
        return (
            <div>

            </div>
        );
    }
}

export default ResultIcon;
