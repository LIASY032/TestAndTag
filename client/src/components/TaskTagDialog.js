import React, { Component } from "react";
import {
    AppBar,
    Button,
    Dialog,
    FormControlLabel,
    FormGroup, FormLabel,
    IconButton, Input,
    Radio,
    RadioGroup,
    Slide, Stack, TextareaAutosize, TextField,
    Toolbar
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class TaskTagDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            open: false,
            result: '',
            address: this.props.info.address,
            ownerShip: this.props.info.ownerShip,
            purchaseDate: this.props.info.purchaseDate,
            description: this.props.info.description
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    static getDerivedStateFromProps(newProps) {
        return {
            open: newProps.open,
            info: newProps.info,
            // address: newProps.info.address,
            // ownership: newProps.info.ownership,
            // purchaseDate: newProps.info.purchaseDate,
            // description: newProps.info.description
        }
    }

    handleClose() {
        this.props.closeTagDialog();
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
            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative', backgroundColor: '#555555'}}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <FormGroup sx={{width: '90%', margin: '0 auto'}}>
                    <FormLabel sx={{fontSize: '28px', fontWeight: 'bold', marginBottom: '10px'}}>Base Info</FormLabel>
                    <FormLabel>Name: {this.state.info.name}</FormLabel>
                    <FormLabel sx={{marginTop: '10px'}}>Email Address: {this.state.info.address}</FormLabel>

                    <FormLabel sx={{fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', marginTop: '20px'}}>Tag Info</FormLabel>
                    <FormLabel sx={{marginTop: '10px'}}>Address ( Building / Floor / Room )</FormLabel>
                    <Input
                        name="address"
                        value={this.state.info.address}
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
                                    purchaseDate: newDate
                                });
                            }}
                            value={this.state.purchaseDate}
                            renderInput={(params) => <TextField {...params} />}
                            lable="Purchase Date"
                        />
                    </LocalizationProvider>

                    <FormLabel sx={{marginTop: '10px'}}>Description</FormLabel>
                    <TextareaAutosize
                        minRows={3}
                        name="description"
                        value={this.state.description}
                        onChange={this.handleItemChange}
                    />

                    <Stack
                        spacing={2}
                        direction="row"
                        sx={{width: '60%', margin: '20px auto 0 auto', justifyContent: 'center'}}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                        >Pass</Button>
                        <Button
                            variant="contained"
                            color="error"
                            fullWidth
                        >Fail</Button>
                    </Stack>
                </FormGroup>

            </Dialog>
        );
    }
}

export default TaskTagDialog;
