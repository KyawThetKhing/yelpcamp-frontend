import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//local imports
import { ReactComponent as Chat } from "assets/images/Chat Bubble.svg";
import { updateCampInfo } from "redux/apiCalls";
import "./Comments.scss";

const Comments = ({ campInfo }) => {
  const currentUser = useSelector(state => state.user.currentUser);
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleComment = e => {
    const updatedCampInfo = {
      ...campInfo,
      comments: [
        ...campInfo.comments,
        { description: comment, userId: currentUser._id }
      ]
    };
    updateCampInfo(dispatch, updatedCampInfo?._id, updatedCampInfo);
  };

  // const renderCommentBox = () => (

  // );

  return (
    <div className="comments">
      {campInfo?.comments?.map(comment => (
        <div className="comments__wrapper" key={comment._id}>
          <div className="comments__usernameWrapper">
            <div className="comments__username">{comment?.userId}</div>
            <div className="comments__time">13h ago</div>
          </div>
          <div className="comments__desc">{comment?.description}</div>
        </div>
      ))}
      {currentUser && (
        <button
          className="comments__btn"
          onClick={() => setShowInput(!showInput)}
        >
          <Chat />
          Leave a Reveiw
        </button>
      )}

      {showInput && (
        <div className="comments__inputWrapper">
          <textarea
            className="comments__input"
            name="commentInput"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Add new Comment"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="comments__postCmtBtn" onClick={handleComment}>
            Post Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
