import React, { Component } from "react";
import {Container, Row, Col,} from "reactstrap";
import HomeButton from "../../buttons/HomeButton/";
import HarvestModal from "../../Modal/HarvestModal";
import DummyModal from "../../Modal/DummyModal";
import AddCropModal from "../../Modal/AddCropModal"
import 'bootstrap/dist/css/bootstrap.min.css';

class MyBounty extends Component {

    render() {
        return (
          <div id = "mb-main-container">
            <HomeButton />

            <Jumbotron className="myBountyContainer">
                <p id="myBountyTitle">Your Crops</p>
                <div className="popdbinfo">
                Crops will populate here from database.
                </div>
            </Jumbotron>
 
            <FormGroup className="mbFormGroup">
                <Label  for="exampleSelect">Category of Harvest</Label>
                <Input type="select"    name="select"  id="exampleSelect">
                    <option>Select One</option>
                    <option>Fruit</option>
                    <option>Vegetable</option>
                    <option>Herbs</option>
                </Input>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" id="exampleDate" placeholder="date available" />
                <Label for="exampleTime">Time Available for Drop-by</Label>
                <span><Input type="time" name="time" id="exampleTime" placeholder="time available"  /></span>
                <span>Until<Input type="time" name="time" id="exampleTime" placeholder="time available" /></span>
                <Label for="exampleText">Additional Comments</Label>
                <Input type="textarea" name="text" id="exampleText" />
                <div className ="box-label-group">
                <br/>
                <span><Label check>
                <Input type="checkbox" />{' '}
                  Ready for Available Harvests
                </Label></span>
                <span><AddCropFormButton /></span>
                </div>
            </FormGroup>
          </div>

        );
    }
}

export default MyBounty;