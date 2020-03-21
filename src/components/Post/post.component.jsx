import React from 'react';
import './post.css';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function Post(props) {
  dayjs.extend(relativeTime);
  return (
    <div>
      <div className="container made">
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-2">
                <img
                  className="profiles-image"
                  src={props.post.userImage}
                  alt=""
                />
              </div>
              <div className="col-10">
                <h1 className="profile-userHandle">{props.post.userHandle}</h1>
                <h4 className="propfile-time-post">
                  {dayjs(props.post.createdAt).fromNow()}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="dumpster">
              <i class="fas fa-dumpster"></i>{' '}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>{props.post.body}</h4>
          </div>
        </div>
        <div className="row comment-section">
          <div className="col-6">
            <i class="far fa-thumbs-up"></i>
            <span>{props.post.likeCount} Likes</span>
          </div>
          <div className="col-6">
            <i class="fas fa-comment"></i>
            <span className="comment">{props.post.commentCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
