function NavButton(props) {
  return (
    <button className={'button ' + props.buttonSize + "Button"} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default NavButton;