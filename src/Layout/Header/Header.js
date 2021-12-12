import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/logo.png";
import styles from "./Header.module.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="top"
      expand="sm"
      className={styles.container}
    >
      <div className={styles.header}>
        <div>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" /> Crypto Dashboard
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Language">
                <NavDropdown.Item>English</NavDropdown.Item>
                <NavDropdown.Item>Portuguese</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Currency">
                <NavDropdown.Item>USD ($)</NavDropdown.Item>
                <NavDropdown.Item>EUR (€)</NavDropdown.Item>
                <NavDropdown.Item>GBP (£)</NavDropdown.Item>
                <NavDropdown.Item>YEN (¥)</NavDropdown.Item>
                <NavDropdown.Item>BRL (R$)</NavDropdown.Item>
                <NavDropdown.Item>CNY (¥)</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
