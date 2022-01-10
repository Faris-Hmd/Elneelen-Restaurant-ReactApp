/** @format */

const NavBar = (props) => {
  
  return (
    <header>
      <div className="nav-bar">
        <ul>
          <li id="side-close-btn">
            <i className="fa fa-bars fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-adjust fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-search fa-2x"></i>
          </li>
          <li>{props.quantity()}</li>
        </ul>
        <span className="logo ">
          <span>El</span>neelen
        </span>
      </div>
    </header>
  );
};

export default NavBar;
