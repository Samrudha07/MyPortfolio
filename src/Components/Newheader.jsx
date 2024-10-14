import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../Styles/Port.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTimes, FaBars } from "react-icons/fa";
export default function App() {
  const [openNavSecond, setOpenNavSecond] = useState(false);

  return (
    <div className="container-fluid pt-4 p-4 ">
      <MDBNavbar expand="lg">
        <MDBContainer fluid>
          <MDBNavbarBrand
            href="#"
            className="text-white"
            style={{ fontWeight: "bold" }}
          >
            MyPortfolio.
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ color: "white" }}
            onClick={() => setOpenNavSecond(!openNavSecond)}
          >
            {openNavSecond ? <FaTimes /> : <FaBars />}
          </MDBNavbarToggler>

          <MDBIcon icon="bars" fas />
          {/* </MDBNavbarToggler> */}
          <div className="d-flex justify-content-end port">
            <MDBCollapse navbar open={openNavSecond}>
              <MDBNavbarNav>
                <MDBNavbarLink
                  href="#about"
                  className="nav-link-hover-underline text-white me-4"
                  style={{ fontWeight: "bold " }}
                >
                  About
                </MDBNavbarLink>
                <MDBNavbarLink
                  href="#education"
                  className="nav-link-hover-underline text-white me-4"
                  style={{ fontWeight: "bold " }}
                >
                  Education
                </MDBNavbarLink>
                <MDBNavbarLink
                  href="#skills"
                  className="nav-link-hover-underline text-white me-4"
                  style={{ fontWeight: "bold " }}
                >
                  Skills
                </MDBNavbarLink>
                <MDBNavbarLink
                  href="#project"
                  className="nav-link-hover-underline text-white me-4"
                  style={{ fontWeight: "bold " }}
                >
                  Project
                </MDBNavbarLink>
                <MDBNavbarLink
                  href="#contact"
                  className="nav-link-hover-underline text-white me-2 name-style"
                  style={{ fontWeight: "bold " }}
                >
                  Contact
                </MDBNavbarLink>
              </MDBNavbarNav>
            </MDBCollapse>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
