import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row } from "react-bootstrap";
import "../../assets/css/styles.css";
// import Cardsdata from "../../component/sliders/cardsdata"
import { Cardsdata } from "../sliders/cardsdata";

import { ADD } from "../../redux/action";

const AllProducts = () => {
  const [data, setData] = useState(Cardsdata);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
    toast.success("successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // style: { background: '#00CC00' },
      color: "white",
    });
  };

  function previewPages() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changePages(id) {
    console.log(id, "ahahfakjhnf");
    setCurrentPage(id);
  }
  function nextPages() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <div>
        <Container>
          <Row className="pdtop50 pdbottom50 ">
            {records?.map((items, index) => {
              return (
                <>
                  <div className="mrb50  col-md-3 cards-items1 ">
                    <Card className="cards-items" style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={items.imgdata}
                        width="100%"
                        height={280}
                      />

                      <Card.Body>
                        {/* <p className="card-text">
                          <Card.Text>{items.address}</Card.Text>
                        </p> */}
                        <h6>
                          <Card.Title>
                            {" "}
                            <Link
                              to={`/cardsdetail/${items.id}`}
                              onClick={() => send(items)}
                              className="text-decoration-none text-black"
                            >
                              {items.rname}
                            </Link>{" "}
                          </Card.Title>
                        </h6>
                        <p>
                          <Card.Text>Price : ${items.price}</Card.Text>
                        </p>

                        <button
                          className="bg-black border-0 text-white col-lg-12 py-2"
                          onClick={() => send(items)}
                        >
                          ADD TO CARD
                        </button>
                      </Card.Body>
                    </Card>
                    <ToastContainer />
                  </div>
                </>
              );
            })}
          </Row>
        </Container>

        <nav className="d-flex justify-content-center pt-4">
          <ul className="pagination">
            <li className="page-item  ">
              <Link href="/" className="page-link   " onClick={previewPages}>
                Previous
              </Link>
            </li>

            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : " "}`}
                key={i}
              >
                <Link
                  href="/"
                  className="page-link"
                  onClick={() => changePages(n)}
                >
                  {n}
                </Link>
              </li>
            ))}

            <li className="page-item">
              <Link href="/" className="page-link   " onClick={nextPages}>
                Previous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default AllProducts;
