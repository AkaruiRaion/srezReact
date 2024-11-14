import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary header">
            <Container fluid className='container header__content'>
                <Navbar.Brand href="/">HOODY</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/catalog">Каталог</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success btnOrder">Вход</Button>
                        <Button variant="outline-success">Регистрация</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
