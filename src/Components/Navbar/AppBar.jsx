import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrandData, NavbarItems } from '../../Database/Database';
function AppBar() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3 Navbar-Components">
                    <Container fluid className="nav-container">
                        <Navbar.Brand href="/" className="brand-container">
                            <img src={BrandData.brand_logo} alt="logo" className="logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="sidebar-band">
                                    <img src={BrandData.brand_logo} alt="logo" className="logo" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    {
                                        NavbarItems.map(item => (
                                            <Nav.Link key={item.item_id} href={item.item_id}>
                                                {item.item_name}
                                            </Nav.Link>
                                        ))
                                    }
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default AppBar;