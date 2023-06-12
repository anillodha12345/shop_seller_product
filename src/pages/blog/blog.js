import React, { useState } from "react";
import AboutBanner from "../../component/aboutsection/aboutbanner/aboutbanner";
import { Container, Row, Card } from "react-bootstrap";
import { Blogsdata } from "../../component/sliders/cardsdata";
import "../../assets/css/styles.css";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { TiSocialPinterest } from "react-icons/ti";
import { ImStumbleupon } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { GET_BLOCK_DETAILS } from "../../redux/action/index";
import image1 from "../../assets/images/productbanner1.jpg"

const Blog = () => {
  const [data, setData] = useState(Blogsdata);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const dispatch = useDispatch();

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
  const blogdata = (e) => {
    dispatch(GET_BLOCK_DETAILS(e));
  };

  return (
    <>
      <AboutBanner image ={image1}name="Blog" page="Blog" />
      <div className="mrt70 ">
        <Container>
          <Row>
            {records.map((items, index) => {
              return (
                <>
                  <div className="mrb50  col-md-4 cards-items1 ">
                    <Link
                      to={`/blogdetails/${items.id}`}
                      className="text-decoration-none"
                      onClick={() => blogdata(items)}
                    >
                      <Card className="cards-items">
                        <Card.Img
                          variant="top"
                          src={items.image}
                          width="100%"
                          height={250}
                        />

                        <Card.Body className="pt20">
                          <p className="card-text">
                            <Card.Text>{items.title}</Card.Text>
                          </p>
                          <h6 className="blog-title">
                            <Card.Title>{items.heading}</Card.Title>
                          </h6>
                          <p className="blog-paragraph">
                            <Card.Text>{items.paragraph}</Card.Text>
                          </p>
                          <p>
                            <Card.Text> {items.author}</Card.Text>
                          </p>

                          <div className="blog-card">
                            <span>
                              <TiSocialFacebook />
                            </span>
                            <span>
                              <AiOutlineGooglePlus />
                            </span>
                            <span>
                              <TiSocialPinterest />
                            </span>
                            <span>
                              <ImStumbleupon />
                            </span>
                            <span>
                              <AiOutlineTwitter />
                            </span>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
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
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Blog;
