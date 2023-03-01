import parseISO from 'date-fns/parseISO';
import formatDistance from 'date-fns/formatDistance';

function formatDate(dateString) {
  const date = parseISO(dateString);
  const distance = formatDistance(date, new Date(), { addSuffix: true });

  return `${distance} ago`;
}

const Comment = ({ comment, isYou }) => (
  <div className='Comment'>
    <div className='Comment-header'>
      <div className='Comment-avatar'>
        <img src={comment.author.avatar} alt={comment.author.name} />
      </div>
      <span className='Comment-author'>
        {isYou ? 'You' : comment.author.name}
      </span>
      <span className='Comment-time'>{formatDate(comment.insertedAt)}</span>
    </div>
    <div className='Comment-body'>{comment.body}</div>
  </div>
);

export default Comment;
