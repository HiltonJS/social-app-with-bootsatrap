import React from 'react';
import ProfileImage from '../../../images/profile.jpg';
import './profile.styles.css';

function Profile() {
  return (
    <div>
      <div className="container profile">
        <div className="row profile-image-stuff">
          <div className="col-12">
            <img
              src={ProfileImage}
              alt="profileimage"
              className="profile-image"
            />
            <h6 className="change-image">change image</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-12 profile-userdetails">
            <h3 className="h3 profile-userId">Hilton Kudyakudadirwe</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 profile-userdetails">
            <h3 className="h3 profile-userId">Male</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 profile-userdetails">
            <h3 className="h3 profile-userId">www.hilton.com</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 profile-userdetails">
            <h3 className="h3 profile-userId">
              <button class="button button-danger">Logout</button>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
