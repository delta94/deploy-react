import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postAction";
import { Link } from "react-router-dom";

class CommentItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to={`/profile/${comment.handle}`}>
              <img
                style={{ width: "150px", height: "150px" }}
                className="rounded-circle d-none d-md-block img-fluid"
                src={comment.avatar}
                alt=""
              />
            </Link>
            <br />
            <p className="text-center">{comment.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>

            {comment.user === auth.user.id ? (
              <button
                onClick={() => this.onDeleteClick(postId, comment._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  post: PropTypes.object.isRequired,
  deleteComment: PropTypes.func,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
