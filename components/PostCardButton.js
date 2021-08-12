export default function PostCardButton(props) {
  return (
    <button
      className='app_post_card_btn app_post_card_submit'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}