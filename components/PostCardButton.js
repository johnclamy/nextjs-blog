export default function PostCardButton(props) {
  return (
    <button
      className='app-post-card-btn app-post-card-submit'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}