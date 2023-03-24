import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Form, Table } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardgif from "./../../../assets/images/cardgifs.gif";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DELETE } from "../../../redux/action";
import { TbSearch } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsBag } from "react-icons/bs";

const Headers = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [price, setPrice] = useState(0);

  const [show, setShow] = useState(false);

  const handleClosed = () => setShow(false);
  const handleShow = () => setShow(true);

  const getdata = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Delete = (id) => {
    dispatch(DELETE(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((items, key) => {
      price = items.price * items.qnty + price;
    });
    console.log(price, "bbjbjbj");
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="wrapper_header">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="text-black fs-3 "
            style={{
              letterspacing: "-2px",
              fontWeight: "10px",
              lineHeight: "10px",
              fontSize: "-webkit-xxx-large",
            }}
          >
            <h1 className="mx-5"> Suprema</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="d-flex justify-content-end navbars"
          >
            <Nav className="pt-2 pb-2">
              <NavLink to="/" className="mx-3 text-black text-decoration-none">
                Home
              </NavLink>
              <NavLink
                to="/product"
                className="mx-3 text-black text-decoration-none "
              >
                Products
              </NavLink>
              <NavLink
                to="/services"
                className="mx-3 text-black text-decoration-none"
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className="mx-3 text-black text-decoration-none"
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/about"
                className="mx-3 text-black text-decoration-none"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="mx-3 text-black text-decoration-none"
              >
                Contact
              </NavLink>

              <NavLink
                to="/contact"
                className="mx-3 text-black text-decoration-none"
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <Row>
            <Col>
              <TbSearch size={20} />
            </Col>

            <Col>
              <Badge
                badgeContent={getdata.length}
                color="primary"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <BsBag size="22" />
              </Badge>
            </Col>
            <Col>
              <AiOutlineMenu size={20} onClick={handleShow} />

              <Offcanvas placement="end" show={show} onHide={handleClosed}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details "
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((items) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cardsdetail/${items.id}`}>
                              <img src={items.imgdata} width={100} />
                            </NavLink>
                          </td>

                          <td>
                            <p>{items.rname}</p>

                            <p>
                              <b> Price </b>: ₹ {items.price}
                            </p>
                            <p>
                              <b>Quality : </b>
                              {items.qnty}
                            </p>
                          </td>
                          <td>
                            <p>
                              {" "}
                              <MdDelete
                                size={30}
                                color="black"
                                onClick={() => Delete(items.id)}
                              />{" "}
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">
                    <b> Price </b>: ₹ {price}
                  </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details  mt-2 mx-3 px-2 d-flex justify-content-center  align-items-center  ">
              <AiOutlineClose
                size={20}
                style={{
                  position: "absolute",
                  right: "2px",
                  top: "2px",
                  fontSize: "20px",
                }}
              />
              <p className="mt-2" style={{ fontSize: 20 }}>
                Your Carts is Empty
              </p>
              <img src={cardgif} width={50} />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};

export default Headers;
