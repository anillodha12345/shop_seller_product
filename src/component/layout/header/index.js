import Container from "react-bootstrap/Container";
import { Table, Col, Form, Button, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import cardgif from "./../../../assets/images/cardgifs.gif";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { DELETE } from "../../../redux/action";
import { AiOutlineMenu } from "react-icons/ai";
import Offcanvas from "react-bootstrap/Offcanvas";
import { VscSearch } from "react-icons/vsc";
import { BsBag } from "react-icons/bs";
import "../../../assets/css/styles.css";
import { FaUserCircle } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";

const Headers = (props) => {
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

  const navigate =  useNavigate()


  const HandleLogout = () => {
    localStorage.clear();

    navigate("/");

  }

  return (
    <>
      <div>
        <div className="main-header">
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand>
                <h2>Suprema</h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse className="justify-content-center">
                <Nav className="header-menu nav_anchor">
                  <Link to="/home" className="nav-link  ">
                    Home
                  </Link>
                  <Link to="/about" className="nav-link ">
                    About
                  </Link>
                  <Link to="/product" className="nav-link ">
                    Product
                  </Link>

                  <Link to="/blog" className="nav-link ">
                    Blog
                  </Link>
                  <Link to="/contact" className="nav-link ">
                    Contact
                  </Link>
                </Nav>
              </Navbar.Collapse>
              <Row>
                <Col md={8}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 rounded-0"
                      aria-label="Search"
                    />
                    <Button className="rounded-0 header-search">Search</Button>
                  </Form>
                </Col>

                <Col className="pt-1 d-flex justify-content-end">
                  <Badge
                    badgeContent={getdata.length}
                    color="primary"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="px-3"
                  >
                    <BsBag size="25" />
                  </Badge>

                  <button onClick={HandleLogout} className="logout">

                 
                  Logout

                  </button>

                {/* <NavLink to="/" className="text text-decoration-none text-black "> Logout</NavLink> */}
       
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
                <div className="card_details ">
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
                                  <img src={items.imgdata} />
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
                <div className=" d-flex justify-content-center   ">
                  <AiOutlineClose />
                  <p>Your Carts is Empty</p>
                  <img src={cardgif} />
                </div>
              )}
            </Menu>
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default Headers;
