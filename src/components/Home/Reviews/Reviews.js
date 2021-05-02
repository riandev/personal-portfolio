import React from "react";
import profile1 from "../../../images/01.jpg";
import profile2 from "../../../images/02.jpg";
import profile3 from "../../../images/03.jpg";
import profile4 from "../../../images/04.jpg";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const reviewData = [
    {
      photo: profile2,
      name: "Jenny Wilson",
      star: 5,
      reviewtext:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      photo: profile3,
      name: "Courtney Henry",
      star: 5,
      reviewtext:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      photo: profile4,
      name: "Esther Howard",
      star: 5,
      reviewtext:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-center mt-5">Clients Say</h2>
        <h5 className="text-center text-secondary mt-3 mb-4">
          Obviously I'm a Web Developer. Experienced with all stages <br /> of
          the development cycle for dynamic web projects.
        </h5>
      </div>
      <div className='container'>
        <div className='row'>
          {reviewData.map(ratings => (
            <ReviewCard ratings={ratings}></ReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
