import React from "react";
import {Button} from "react-bootstrap";

class VolunteerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      phone:"",
      email:"",
      zipcode:"",
      business:"",
      volunteerPosition:"",
      message:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className = "form-cont">
        <h2>Ready to Volunteer?</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span className="form-txt">Name</span>
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>

          <label>
          <span>Phone</span>
            <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange} />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            <span>Zipcode</span>
            <input name="zipcode" type="text" value={this.state.zipcode} onChange={this.handleChange} />
          </label>

          <label>
            <span>Business/Organization (If Applicable)</span>
            <input name="business" type="text" value={this.state.business} onChange={this.handleChange} />
          </label>

          <label>
            <span>Volunteer Position of Interest</span>
            <select name="volunteerPosition" value={this.state.volunteerPosition} onChange={this.handleChange}>
              <option selected value="Online Support">Online Support</option>
              <option value="Supply Purchaser/Runner">Supply Purchaser/Runner</option>
              <option value="Medical Assistance">Medical Assistance</option>
              <option value="Resource Finder">Resource Finder</option>
              <option value="Virtal Event Host">Virtaul Event Host</option>
              <option value="other">Other (Comment Below)</option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea name="message" value={this.state.message} onChange={this.handleChange} rows="4" cols="30" />
          </label>

          <Button type="submit" value="Submit" className="site-nav-btn m-auto d-block" style={{"display":"block"}}>
            <span>Submit</span>
          </Button>
        </form>
      </div>
    )
  }
}

export default VolunteerForm;
