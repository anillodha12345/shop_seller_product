import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./services.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Vortex } from "react-loader-spinner";
import { textAlign } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import Headers from "../../component/layout/header";
import ElectronicServices from "../../component/servicesdetails/electronic-services";
import Footer from "../../component/layout/footer";

const Services = () => {
  const [users, setUsers] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const getAllUser = async () => {
    const result = await axios.get(
      `https://dummyjson.com/products?page=${currPage}&size=30`
    );
    setUsers(result.data.products);
  };
  useEffect(() => {
    getAllUser();
  }, []);

  const fetchMoreData = () => {
    setCurrPage(currPage + 1);
    getAllUser();
  };

  const vinod = "ANil LOdha";

  return (
    <>
    <Headers/>
      <div className=" container pt-3">
        <div className="text-center">
          <InfiniteScroll
            dataLength={users.length}
            next={fetchMoreData}
            // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
            // inverse={true}
            hasMore={users}
            loader={
              users.length ? null : (
                <Vortex
                  visible={true}
                  height="80"
                  width="80"
                  position="absolute"
                  letf="50"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  style={{ textAlign: "center" }}
                  wrapperClass="vortex-wrapper"
                  colors={[
                    "red",
                    "green",
                    "blue",
                    "yellow",
                    "orange",
                    "purple",
                  ]}
                />
              )
            }
          />
        </div>

        <div className=" row d-flex">
          {users.map((items) => {
            return (
              <div className=" col-md-4 ">
                <NavLink
                  className="text-decoration-none "
                  to={`/electronic-services/${items.id}`}
                >
                  <Card style={{ height: "400px" }} className=" p-2 mb-3 ">
                    <Card.Img
                      variant="top"
                      className="preview_img_wrps"
                      src={items.thumbnail}
                      width="100%"
                      height="500px"
                    />

                    <h5 className="text-black  text-center">{items.title}</h5>

                    <p className="text-success text-center">
                      From ₹ {items.price}
                    </p>
                    <p className="text-secondary text-center">
                      {items.description}
                    </p>

                    {/* <td >
              
                    Go somewhere
                   
                </td> */}
                  </Card>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;
