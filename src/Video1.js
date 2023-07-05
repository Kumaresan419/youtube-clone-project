import React,{useState} from 'react';
import ReactPlayer from 'react-player';
import Video from './videos.mp4'
import './Video1.css';
import image1 from './images (3).jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Video1() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    } else {
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
      setDisliked(false);
      setDislikeCount((prevCount) => (disliked ? prevCount - 1 : prevCount));
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikeCount((prevCount) => prevCount - 1);
      setDisliked(false);
    } else {
      setDislikeCount((prevCount) => prevCount + 1);
      setDisliked(true);
      setLiked(false);
      setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount));
    }
  };

  const handleSubscribe = () => {
    if (subscribed) {
      setSubscriberCount((prevCount) => prevCount - 1);
      setSubscribed(false);
    } else {
      setSubscriberCount((prevCount) => prevCount + 1);
      setSubscribed(true);
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: comments.length + 1,
      text: commentText,
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setCommentText('');
  };

  return (
    <div className="videos">
      <ReactPlayer playing url={Video} width="30vw" height="40vh" />
      <img src={image1} alt="thumbnail" className="image1" />
      <h1></h1>
      <p>
        Sony Music
        <br />
        1M views in 1 month
      </p>

      <div className="interaction-section">
        <button onClick={handleLike} className={liked ? 'active' : ''}>
          {liked ? (
            <FontAwesomeIcon icon={faThumbsUp} />
          ) : (
            <FontAwesomeIcon icon={farThumbsUp} />
          )}
          <span>{likeCount}</span>
        </button>
        <button onClick={handleDislike} className={disliked ? 'active' : ''}>
          {disliked ? (
            <FontAwesomeIcon icon={faThumbsDown} />
          ) : (
            <FontAwesomeIcon icon={farThumbsDown} />
          )}
          <span>{dislikeCount}</span>
        </button>
        <button onClick={handleSubscribe} className={subscribed ? 'subscribed' : ''}>
          {subscribed ? 'Unsubscribe' : 'Subscribe'}
          <span>{subscriberCount}</span>
        </button>
      </div>

      <div className="comment-section">
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Leave a comment..."
          ></textarea>
          <button type="submit">Submit <FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
      </div>

      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video1;