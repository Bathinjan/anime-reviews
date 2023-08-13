export default function Navbar(props) {
  return (
    <>
      <nav>
        <img className="Navbar--logo" src="" alt="" />
        <h1 className="Navbar--header">{props.navTitle}</h1>
      </nav>
    </>
  );
}
