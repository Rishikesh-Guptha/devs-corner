import React, { useState } from 'react';
import './ProfilePage.css';
import Navbar2 from '../navbar2/Navbar2';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const[fullname,setFullname]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[interest,setInterest]=useState("");


  const handleEditToggle = () => {
    setEditMode(!editMode);
  };
  const handlesave=()=>{
    setEditMode(!editMode);
  }

  return (
    <div>
      <Navbar2/>
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid
                  />
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control mb-1"
                      placeholder="Enter Profession"
                    />
                  ) : (
                    <p className="text-muted mb-1">Full Stack Developer</p>
                  )}
                  {editMode ? (
                    <input
                      type="text"
                      className="form-control mb-4"
                      placeholder="Enter Location"
                    />
                  ) : (
                    <p className="text-muted mb-4">
                      Bay Area, San Francisco, CA
                    </p>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">{fullname}
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Full Name"
                          value={fullname} onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">{email}
                      {editMode ? (
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email"
                          value={email} onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">{phone}
                      {editMode ? (
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter Phone"
                          value={phone} onChange={(e)=>{
                            setPhone(e.target.value);
                          }}
                          
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Interest</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {interest}
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Interest"
                          value={interest} onChange={(e)=>{
                            setInterest(e.target.value);}}
                        />
                      ) : (
                        <MDBCardText className="text-muted">
                          
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <hr />
                  <MDBRow>
                    <MDBCol sm="12">
                      {editMode ? (
                        <button
                          className="btn btn-success float-right"
                          onClick={() => handlesave()}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary float-right"
                          onClick={() => handleEditToggle()}
                        >
                          Edit
                        </button>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default ProfilePage;
