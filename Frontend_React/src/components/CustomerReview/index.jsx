import React from "react";
import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const reviews = [
    {
      review:
        "Quá tuyệt vời. Tôi sẽ mua hàng ở đây cả đời.",
      avatar: "",
      name: "Jimmy Nguyen",
      job: "Student",
    },
    {
      review:
        "Chất lượng không có gì để chê.",
      avatar: "",
      name: "Vu Nguyen",
      job: "Student",
    },
    {
      review:
        "Nhân viên nhiệt tình, tâm huyết.",
      avatar: "",
      name: "Thang Nguyen",
      job: "Student",
    },
    {
      review:
        "Giá cả rất phù hợp với chất lượng.",
      avatar: "",
      name: "Quan Hoang",
      job: "Student",
    },
    {
      review:
        "Từ ngày mua hàng ở đây, tôi cảm thấy không gian trong nhà như được nâng lên một tầng cao mới.",
      avatar: "",
      name: "Dat Nguyen",
      job: "Student",
    },
    {
      review:
        "Perfect!",
      avatar: "",
      name: "David Do",
      job: "Student",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
      avatar: "",
      name: "Quang Jr",
      job: "Student",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
      avatar: "",
      name: "Johny Dang",
      job: "Student",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
      avatar: "",
      name: "Peter Parker",
      job: "Student",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
      avatar: "",
      name: "Anonymous",
      job: "Student",
    },
    {
      review:
        "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.",
      avatar: "",
      name: "Cassandra Nova",
      job: "Student",
    },
  ];
  return (
    <div className="customer-review">
      <div className="title"> What Our Customers Are Saying About Us</div>
      <div className="layout">
        <Slider {...settings}>
          {reviews.map((user, index) => {
            return (
              <div className="review" key={index}>
                <div className="review-layout">
                  <div className="content">{user.review}</div>
                  <div className="zip-line"></div>
                  <div className="user-card">
                    <div className="avatar-user">
                      <img
                        src="https://thuthuatnhanh.com/wp-content/uploads/2022/06/Hinh-anh-meme-cheems-ngau.jpg"
                        alt="wow"
                      />
                    </div>
                    <div className="info">
                      <div className="name"> {user.name}</div>
                      <div className="job">{user.job}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <button className="see-review-btn">See all review</button>
    </div>
  );
};

export default CustomerReview;
