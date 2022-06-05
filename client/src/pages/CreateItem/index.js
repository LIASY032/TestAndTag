import React from "react";
import "./createItem.css";
import itemPic from "../../static/images/new-item.jpg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  TextareaAutosize,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { Form, Col, Row, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { addNewItem } from "../../services";
function CreateItem() {
  const locationData = useSelector((state) => state.locations);

  const [selectLocation, setSelectLocation] = React.useState(0);
  const emailRef = React.useRef();
  const ownershipRef = React.useRef();
  const nameRef = React.useRef();

  const buildingRef = React.useRef();
  const floorRef = React.useRef();
  const roomRef = React.useRef();
  const purchased_dateRef = React.useRef();
  const descriptionRef = React.useRef();
  return (
    <div className="new-item-container">
      <img className="new-item-pic" src={itemPic} alt="image" />
      <div className="new-item-form">
        <div className="new-item-title">Request a Test from Test & Tag</div>
        <div className="new-item-tips">
          <Button href="/old">Testing an Existing Equipment? Click Here</Button>
        </div>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <Form.Control placeholder="Name" ref={nameRef} />
          <FormLabel sx={{ marginTop: "10px" }}>Email Address</FormLabel>
          <Form.Control placeholder="Email" ref={emailRef} type="email" />

          <Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Building</Form.Label>
              <Form.Select
                ref={buildingRef}
                defaultValue="Choose..."
                onChange={(e) => {
                  if (e.target.value != "Choose...") {
                    setSelectLocation(parseInt(e.target.value));
                  }
                }}
              >
                <option value="Choose...">Choose...</option>

                {locationData.length > 0 ? (
                  locationData.map((element, index) => {
                    return (
                      <option value={index} key={index}>
                        {element.building}
                      </option>
                    );
                  })
                ) : (
                  <option>...</option>
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Floor</Form.Label>
              <Form.Select ref={floorRef} defaultValue="Choose...">
                <option value="Choose...">Choose...</option>

                {locationData.length > 0 ? (
                  locationData[selectLocation].floor.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })
                ) : (
                  <option>...</option>
                )}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Room</Form.Label>
              <Form.Select defaultValue="Choose..." ref={roomRef}>
                <option value="Choose...">Choose...</option>

                {locationData.length > 0 ? (
                  locationData[selectLocation].room.map((element, index) => {
                    return (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    );
                  })
                ) : (
                  <option>...</option>
                )}
              </Form.Select>
            </Form.Group>
          </Row>
          <FormLabel sx={{ marginTop: "10px" }}>Ownership</FormLabel>
          <Form.Select ref={ownershipRef} defaultValue="Choose...">
            <option value="Choose...">Choose...</option>
            <option value="Personal">Personal</option>
            <option value="UniSA">UniSA</option>
          </Form.Select>
          <FormLabel sx={{ marginTop: "10px" }}>Purchase Date</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Form.Control type="date" ref={purchased_dateRef}></Form.Control>
          </LocalizationProvider>
          <FormLabel sx={{ marginTop: "10px" }}>Description</FormLabel>
          <Form.Control ref={descriptionRef} as="textarea" rows={3} />
          <Button
            variant="contained"
            sx={{
              marginTop: "20px",
            }}
            color="success"
            onClick={async () => {
              if (emailRef.current.value) {
                if (ownershipRef.current.value != "Choose...") {
                  if (nameRef.current.value) {
                    if (buildingRef.current.value != "Choose...") {
                      if (floorRef.current.value != "Choose...") {
                        if (roomRef.current.value != "Choose...") {
                          if (purchased_dateRef.current.value) {
                            await addNewItem({
                              email: emailRef.current.value,
                              ownership: ownershipRef.current.value,
                              name: nameRef.current.value,
                              building: locationData[selectLocation].building,
                              floor: floorRef.current.value,
                              room: roomRef.current.value,
                              purchased_date: purchased_dateRef.current.value,
                              description: descriptionRef.current.value,
                            });
                            window.location.href = "/submit_success";
                          } else {
                            purchased_dateRef.current.focus();
                          }
                        } else {
                          roomRef.current.focus();
                        }
                      } else {
                        floorRef.current.focus();
                      }
                    } else {
                      buildingRef.current.focus();
                    }
                  } else {
                    nameRef.current.focus();
                  }
                } else {
                  ownershipRef.current.focus();
                }
              } else {
                emailRef.current.focus();
              }
            }}
          >
            SUBMIT
          </Button>
        </FormGroup>
      </div>
    </div>
  );
}

export default CreateItem;

// const picURL = itemPic;
// class CreateItem extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             address: '',
//             ownership: '',
//             date: null,
//             description: ''
//         }
//         this.handleItemChange = this.handleItemChange.bind(this);
//     }

//     handleTipClick() {
//         window.location.href = "/old";
//     }

//     handleBtnClick() {
//         window.location.href = "/submit_success";
//     }

//     handleItemChange(event) {
//         const target = event.target;
//         const name = target.name;
//         this.setState({
//             [name]: target.value
//         })
//     }

//     render() {
//         return (
//             <div className="new-item-container">
//                 <img className="new-item-pic" src={picURL} />
//                 <div className="new-item-form">
//                     <div className="new-item-title">Request a Test from Test & Tag</div>
//                     <div className="new-item-tips">
//                         <Button onClick={this.handleTipClick}>Testing an Existing Equipment? Click Here</Button>
//                     </div>
//                     <FormGroup>
//                         <FormLabel>Your Name</FormLabel>
//                         <Input
//                             name="name"
//                             value={this.state.name}
//                             onChange={this.handleItemChange}
//                         />

//                         <FormLabel sx={{marginTop: '10px'}}>Email Address</FormLabel>
//                         <Input
//                             name="email"
//                             value={this.state.email}
//                             onChange={this.handleItemChange}
//                         />

//                         <FormLabel sx={{marginTop: '10px'}}>Address ( Building / Floor / Room )</FormLabel>
//                         <Input
//                             name="address"
//                             value={this.state.address}
//                             onChange={this.handleItemChange}
//                         />

//                         <FormLabel sx={{marginTop: '10px'}}>Ownership</FormLabel>
//                         <RadioGroup
//                             row
//                             name="ownership"
//                             value={this.state.ownership}
//                             onChange={this.handleItemChange}
//                         >
//                             <FormControlLabel value="personal" control={<Radio size="small" />} label="Personal" />
//                             <FormControlLabel value="UniSA" control={<Radio size="small" />} label="UniSA" />
//                         </RadioGroup>

//                         <FormLabel sx={{marginTop: '10px'}}>Purchase Date</FormLabel>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <DatePicker
//                                 onChange={(newDate) => {
//                                     this.setState({
//                                         date: newDate
//                                     });
//                                 }}
//                                 value={this.state.date}
//                                 renderInput={(params) => <TextField {...params} />}
//                                 // lable="Purchase Date"
//                             />
//                         </LocalizationProvider>

//                         <FormLabel sx={{marginTop: '10px'}}>Description</FormLabel>
//                         <TextareaAutosize
//                             minRows={5}
//                             name="description"
//                             value={this.state.description}
//                             onChange={this.handleItemChange}
//                         />

//                         <Button
//                             variant="contained"
//                             sx={{
//                                 marginTop: '20px'
//                             }}
//                             color="success"
//                             onClick={this.handleBtnClick}
//                         >SUBMIT</Button>
//                     </FormGroup>
//                 </div>
//             </div>

//         );
//     }
// }

// export default CreateItem;
