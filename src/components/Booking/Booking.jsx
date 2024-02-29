import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/authContext";
import { BASE_URL } from "../../utils/config";

function Booking({ tour, avgRating }) {
  const { price, reviews, title } = tour;
  const navigate = useNavigate()

  const { user } = useContext(authContext)

  const [booking, setBooking] = useState({

    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: ''

  })


  const handleChange = e => {
    setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const serviceFee = 301
  const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);


  //send data to server

  const handleClick = async (e) => {
    e.preventDefault()

    console.log(booking);

    try {
      
      if (!user || user === undefined || user === null) {
        return alert("Please sign in")
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(booking)
      })

      const result = await res.json()

      if (!res.ok) {
        return alert(result.message)
      }
      navigate("/thank-you")

    } catch (err) {
      alert(err.message)
    }
    navigate('/thank-you')
  }

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span> /per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center  ">
          <i class="ri-star-s-fill"></i> {avgRating === 0 ? null : avgRating} (
          {reviews?.length})
        </span>
      </div>

      {/* booking form  */}

      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" >
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/* booking form end */}

      {/* booking bottom */}

      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i>/per person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Service</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary_btn w-100 mt-4" onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  );
}

export default Booking;

// import React, { useState, useContext } from "react";
// import "./booking.css";
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import { authContext } from "../../context/authContext";
// import { BASE_URL } from "../../utils/config";

// function Booking({ tour, avgRating }) {
//   const { price, reviews } = tour;
//   const navigate = useNavigate();

//   const {user} = useContext(authContext)

//   const [booking, setBooking] = useState({
//     userId: "01",
//     userEmail: "me@gmail.com",
//     fullName: "",
//     phone: "",
//     guestSize: 1,
//     bookAt: "",
//   });

//   const handleChange = (e) => {
//     setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   const serviceFee = 301;
//   const totalAmount =
//     Number(price) * Number(booking.guestSize) + Number(serviceFee);

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     // if (!credentials.fullName || !credentials.phone || !credentials.bookAt) {
//       alert("Please fill in all required fields.");
//       return;
//     // }
//     // Send data to server
//     navigate("/thank-you");
//   };

//   return (
//     <div className="booking">
//       <div className="booking_top d-flex align-items-center justify-content-between">
//         <h3>
//           ${price} <span> /per person</span>
//         </h3>
//         <span className="tour_rating d-flex align-items-center  ">
//           <i className="ri-star-s-fill"></i>{" "}
//           {avgRating === 0 ? null : avgRating} ({reviews?.length})
//         </span>
//       </div>

//       {/* booking form  */}

//       <div className="booking_form">
//         <h5>Information</h5>
//         <Form className="booking_info-form" onSubmit={handleSubmit}>
//           <FormGroup>
//             <input
//               type="text"
//               placeholder="Full Name"
//               id="fullName"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <input
//               type="number"
//               placeholder="Phone"
//               id="phone"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <FormGroup className="d-flex align-items-center gap-3">
//             <input
//               type="date"
//               placeholder=""
//               id="bookAt"
//               required
//               onChange={handleChange}
//             />
//             <input
//               type="number"
//               placeholder="Guest"
//               id="guestSize"
//               required
//               onChange={handleChange}
//             />
//           </FormGroup>
//           <Button type="submit" className="btn primary_btn w-100 mt-4">
//             Book Now
//           </Button>
//         </Form>
//       </div>

//       {/* booking form end */}

//       {/* booking bottom */}

//       <div className="booking_bottom">
//         <ListGroup>
//           <ListGroupItem className="border-0 px-0">
//             <h5 className="d-flex align-items-center gap-1">
//               ${price} <i className="ri-close-line"></i>/per person
//             </h5>
//             <span>${price}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0">
//             <h5>Service</h5>
//             <span>${serviceFee}</span>
//           </ListGroupItem>
//           <ListGroupItem className="border-0 px-0 total">
//             <h5>Total</h5>
//             <span>${totalAmount}</span>
//           </ListGroupItem>
//         </ListGroup>
//       </div>
//     </div>
//   );
// }

// export default Booking;

