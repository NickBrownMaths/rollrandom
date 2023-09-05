import NavButton from "./NavButton";

function NavBar(props) {
  return (
    <>
      {
        props.buttons.map((button, index) => (
          <NavButton
            key={index}
            onClick={button[0]}
            text={button[1]} buttonSize={props.buttonSize}
            currentPage={props.currentPage}
            currentPageComparitor={button[2]}
            hasActiveChar={props.hasActiveChar}
          />
        ))
      }
    </>
  )
}

export default NavBar;