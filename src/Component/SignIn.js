import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { signin } from '../Redux/Action';
import { MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Swal from 'sweetalert2';

class SignIn extends Component {

    signinUser = () => {
        let username = this.user.value
        let password = this.password.value
        Axios.get(`http://localhost:2000/signIn?username=${username}&password=${password}`, {
            username,
            password
        })
        .then((res) => {
            if(res.data.length === 0){
                alert('username or password invalid')
            }else{
                localStorage.setItem('username', username)
                this.props.signin(username)
                Swal.fire(`Hello ${username}, Welcome :)`)
            }
        })
        .catch((err) => {console.log(err)})

    }

  render() {
      return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <MDBCol md="4">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Sign In</p>
              <div className="grey-text">
                <MDBInput
                  label="Username"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="name"
                  inputRef={(user) => this.user = user}
                />
                <MDBInput
                  label="Password"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  inputRef={(password) => this.password = password}
                />

                <input type="checkbox" defaultChecked/> Remember me
    
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" onClick={this.signinUser}>
                  Sign In
                </MDBBtn>
              </div>
              <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <MDBBtn color="danger" className="cancelbtn">Cancel</MDBBtn>
                <span className="psw">Forgot <a href="#">password?</a></span>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      </div>
      )
  }  
}

const mapStatetoProps = ({auth}) => {
    return {
        username: auth.username,
        password: auth.password
    }
}

export default connect(mapStatetoProps, { signin })(SignIn)
