import React, {Component, Fragment} from "react";
import "./createItem.css";
import itemPic from "../static/images/new-item.jpg";
import {DatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {
    Button,
    FormControl,
    FormControlLabel, FormGroup,
    FormLabel,
    Input, Radio,
    RadioGroup, TextareaAutosize, TextField
} from "@mui/material";

const picURL = itemPic;
class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            ownership: '',
            date: null,
            description: ''
        }
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleTipClick() {
        window.location.href = "/old";
    }

    handleBtnClick() {
        window.location.href = "/submit_success";
    }

    handleItemChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        })
    }

    render() {
        return (
            <div className="new-item-container">
                <img className="new-item-pic" src={picURL} />
                <div className="new-item-form">
                    <div className="new-item-title">Request a Test from Test & Tag</div>
                    <div className="new-item-tips">
                        <Button onClick={this.handleTipClick}>Testing an Existing Equipment? Click Here</Button>
                    </div>
                    <FormGroup>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                            name="name"
                            value={this.state.name}
                            onChange={this.handleItemChange}
                        />

                        <FormLabel sx={{marginTop: '10px'}}>Email Address</FormLabel>
                        <Input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleItemChange}
                        />

                        <FormLabel sx={{marginTop: '10px'}}>Address ( Building / Floor / Room )</FormLabel>
                        <Input
                            name="address"
                            value={this.state.address}
                            onChange={this.handleItemChange}
                        />

                        <FormLabel sx={{marginTop: '10px'}}>Ownership</FormLabel>
                        <RadioGroup
                            row
                            name="ownership"
                            value={this.state.ownership}
                            onChange={this.handleItemChange}
                        >
                            <FormControlLabel value="personal" control={<Radio size="small" />} label="Personal" />
                            <FormControlLabel value="UniSA" control={<Radio size="small" />} label="UniSA" />
                        </RadioGroup>

                        <FormLabel sx={{marginTop: '10px'}}>Purchase Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                onChange={(newDate) => {
                                    this.setState({
                                        date: newDate
                                    });
                                }}
                                value={this.state.date}
                                renderInput={(params) => <TextField {...params} />}
                                lable="Purchase Date"
                            />
                        </LocalizationProvider>

                        <FormLabel sx={{marginTop: '10px'}}>Description</FormLabel>
                        <TextareaAutosize
                            minRows={5}
                            name="description"
                            value={this.state.description}
                            onChange={this.handleItemChange}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                marginTop: '20px'
                            }}
                            color="success"
                            onClick={this.handleBtnClick}
                        >SUBMIT</Button>
                    </FormGroup>
                </div>
            </div>

        );
    }
}

export default CreateItem;
