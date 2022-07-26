import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./PostCard.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../Context/User";
import { useEffect } from "react";
import { useState } from "react";
const PostCard = ({ value }) => {
  const { user } = useContext(UserContext);
  const [sold, setSold] = useState(false);
  const handleView = async () => {
    if (value) {
      if (value.userId._id !== user._id) {
        try {
          const { data } = await axios.get(
            `http://localhost:4000/api/v1/views/post/${
              value ? value._id : null
            }`
          );
          setSold(true);
        } catch (error) {
          console.log(error.response.data);
        }
      }
    } else {
      console.log("Same User");
    }
  };
  const date = new Date(value ? value.createdAt : null);

  useEffect(() => {
    const fetchSold = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/sold/ornot/${value ? value._id : null}`
        );
        console.log(data);
        if (data !== null) {
          setSold(true);
        } else {
          setSold(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSold();
  }, []);
  console.log(sold);
  return (
    <>
      <div style={{ textAlign: "left", marginTop: "30px" }}>
        {user && value.userId ? (
          user._id === value.userId._id ? (
            <Link
              to={`/item/${value ? value._id : null}`}
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "20px",
              }}
            >
              <img
                alt="ecommerce"
                className="Product__image object-cover object-center w-full h-full block"
                src={value ? value.pic1 : null}
                style={{ borderRadius: "10px", width: "100%", height: "250px" }}
                onClick={handleView}
              />
            </Link>
          ) : (
            <Link
              to={`/detail/view/${value ? value._id : null}`}
              style={{
                textDecoration: "none",
                color: "black",
                marginTop: "20px",
              }}
            >
              <img
                alt="ecommerce"
                className="Product__image object-cover object-center w-full h-full block"
                src={value ? value.pic1 : null}
                style={{ borderRadius: "10px", width: "100%", height: "250px" }}
                onClick={handleView}
              />
            </Link>
          )
        ) : null}

        <div
          style={{
            backgroundColor: "#EFEFEF",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            height: "200px",
          }}
          className="mt-1 p-1"
        >
          <div className="container d-flex align-items-center mt-1 mb-1">
            {user && value.userId ? (
              user._id === value.userId._id ? (
                <Link to={`/profile`}>
                  <Tooltip
                    title={`View ${
                      value.userId ? value.userId.name : null
                    }'s Profile`}
                  >
                    <div className="container">
                      <img
                        src={value.userId ? value.userId.pic : null}
                        alt=""
                        srcset=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </Tooltip>
                </Link>
              ) : (
                <Link
                  to={`/user/detail/${value.userId ? value.userId._id : null}`}
                >
                  <Tooltip
                    title={`View ${
                      value.userId ? value.userId.name : null
                    }'s Profile`}
                  >
                    <div className="container">
                      <img
                        src={value.userId ? value.userId.pic : null}
                        alt=""
                        srcset=""
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </Tooltip>
                </Link>
              )
            ) : null}

            <h2 className="ml-1">{value.userId ? value.userId.name : null}</h2>
          </div>
          <h3 className="text-gray-500 text-sm font-bold tracking-widest title-font mb-2 ml-1">
            {value ? value.productName : null}{" "}
            <p style={{ fontSize: "11p" }}>
              {" "}
              <AccessTimeIcon
                className="mb-1"
                style={{ fontSize: "16px" }}
              />{" "}
              {value ? date.toLocaleString() : null}
              {user && value.userId ? (
                user._id === value.userId._id ? (
                  <Link
                    to={`/item/${value ? value._id : null}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "20px",
                    }}
                  >
                    <Tooltip title="View This Product">
                      <VisibilityIcon
                        fontSize="small"
                        className="float-right  mr-2"
                        onClick={handleView}
                      />
                    </Tooltip>
                  </Link>
                ) : (
                  <Link
                    to={`/detail/view/${value ? value._id : null}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginTop: "20px",
                    }}
                  >
                    <Tooltip title="View This Product">
                      <VisibilityIcon
                        fontSize="small"
                        className="float-right  mr-2"
                        onClick={handleView}
                      />
                    </Tooltip>
                  </Link>
                )
              ) : null}
            </p>
          </h3>
          <h2
            className="text-gray-900  title-font "
            style={{ fontSize: "18px", padding: "5px" }}
          >
            {value ? value.productDescription.slice(0, 70) : null}....
          </h2>
        </div>
        {sold && (
          <div class="img__wrapper">
            <img
              src="http://www.savoy-sharm.com/media-room/images/hi-res/king-bed-room-accommodation-savoy-luxury-5-stars-accommodation-sharm-el-sheikh.jpg"
              alt=""
            />
            <h1 class="sold_out">Sold</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default PostCard;
