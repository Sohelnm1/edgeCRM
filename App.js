import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import "./App.css";
import adventimg from "./Images/adventimg.png";
import {
  Card,
  Nav,
  FormInputs,
  Label,
  ButtonComponent,
  ErrorMsg,
} from "./components/Index";
import TextArea from "./components/form/TextArea";
import IFrameTag from "./components/common/IFrameTag";

const LandingImg = styled.div`
  background-image: url(Frame2121.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 570px;
`;

const FormStyled = styled.form`
  padding: 168px 0;
`;

function App() {
  const [name, setname] = useState("");
  const [organisation, setorganisation] = useState("");
  const [contactnum, setcontactnum] = useState("");
  const [email, setemail] = useState("");
  const [textmessage, settextmessage] = useState("");
  const [error, seterror] = useState(false);
  // const [errorcheck, seterrorcheck] = useState(false);
  const patternEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const patternNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  const [value, setvalues] = useState({
    name: name,
    organisation: organisation,
    contactnum: contactnum,
    textmessage: textmessage,
    email: email,
  });

  const newObj = {
    name: name,
    organisation: organisation,
    contactnum: contactnum,
    textmessage: textmessage,
    email: email,
  };

  const showData = (e) => {
    // e.preventDefault();
    // setvalues(newObj);
    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(newObj);

    if (
      name.length === 0 ||
      organisation.length === 0 ||
      email.length === 0 ||
      patternNumber.test(contactnum) === false ||
      patternEmail.test(email) === false ||
      email.length === 0 ||
      textmessage.length === 0
    ) {
      seterror(true);
    }

    if (
      !(
        name.length === 0 ||
        organisation.length === 0 ||
        email.length === 0 ||
        contactnum.length === 0 ||
        patternNumber.test(contactnum) === false ||
        patternEmail.test(email) === false
      )
    ) {
      console.log(
        "name:",
        name,
        "organisation:",
        organisation,
        "contact:",
        contactnum,
        "email:",
        email,
        "message:",
        textmessage
      );
      setvalues(newObj);
      console.log(value);
    }
  };

  return (
    <section>
      <Nav />
      <LandingImg>
        <Label
          heading="true"
          content="Contact Us"
          color="#ffffff"
          fontsize="55px"
          weight="600"
          position="absolute"
        />
      </LandingImg>
      <div className="container">
        {/* <div>{JSON.stringify(value)}</div> */}
        <FormStyled onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <Label
                contentHeading={true}
                content="Drop us a message, and we’ll get back to you in no time."
                color="#505050"
                fontsize="30px"
                weight="600"
              />
            </div>
            <div className="col">
              <FormInputs
                className="input-field"
                typeofinput="text"
                placeholder="Your Name"
                height="40px"
                width="100%"
                placeholderweight="400"
                placeholderfontsize="16px"
                onChange={(e) => setname(e.target.value)}
                // onChange={onChange}
              />
              {error && name.length <= 0 ? (
                <ErrorMsg labeldata="Please Enter some data" />
              ) : (
                ""
              )}
              <FormInputs
                className="input-field"
                typeofinput="number"
                placeholder="Contact Number"
                height="40px"
                width="100%"
                placeholderweight="400"
                placeholderfontsize="16px"
                onChange={(e) => setcontactnum(e.target.value)}
                // onChange={onChange}
              />
              {/* {error && contactnum.length <= 0 ? (
                <ErrorMsg labeldata="Please check entered data" />
              ) : (
                ""
              )} */}
              {error && patternNumber.test(contactnum) === false ? (
                <ErrorMsg labeldata="Please Enter Valid Phone Number" />
              ) : (
                ""
              )}

              <TextArea
                className="text-area"
                placeholder="Message"
                row="3"
                width="100%"
                height="80px"
                fontsize="1rem"
                placeholderweight="400"
                placeholderfontsize="16px"
                onChange={(e) => settextmessage(e.target.value)}
                // onChange={onChange}
              />
              {/* {errorcheck && textmessage.length <= 0 ? (
                <ErrorMsg labeldata="Please Enter some data" />
              ) : (
                ""
              )} */}
              <ButtonComponent
                text="Submit"
                className="btn btn-outline-dark"
                type="submit"
                fontsize="16px"
                weight="500"
                padding="10px 23px"
                onClick={showData}
              />
            </div>
            <div className="col">
              <FormInputs
                className="input-field"
                typeofinput="text"
                placeholder="Organisation Name"
                height="40px"
                width="100%"
                placeholderweight="400"
                placeholderfontsize="16px"
                onChange={(e) => setorganisation(e.target.value)}
                // onChange={onChange}
              />
              {error && organisation.length <= 0 ? (
                <ErrorMsg labeldata="Please Enter some data" />
              ) : (
                ""
              )}
              <FormInputs
                className="input-field"
                typeofinput="email"
                placeholder="Email ID"
                height="40px"
                width="100%"
                placeholderweight="400"
                placeholderfontsize="16px"
                onChange={(e) => setemail(e.target.value)}
                // onChange={onChange}
              />
              {/* {(error && email.length <= 0 ? (
                <ErrorMsg labeldata="Please input some data" />
              ) : (
                ""
              )) &&
                (error && patternEmail.test(email) === false ? (
                  <ErrorMsg labeldata="Please check entered data" />
                ) : (
                  ""
                ))} */}
              {/* {error && email.length <= 0 ? (
                <ErrorMsg labeldata="Please input some data" />
              ) : (
                ""
              )} */}
              {error && patternEmail.test(email) === false ? (
                <ErrorMsg labeldata="Please Enter Valid Email ID" />
              ) : (
                ""
              )}
              {/* String year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior"; */}
            </div>
          </div>
        </FormStyled>
      </div>
      <IFrameTag width="100%" height="500px" />
      <div className="container">
        <div className="row">
          <div className="col card1 d-flex justify-content-end position-relative">
            <Card
              className="card bg-light mb-3 with-img position-absolute"
              title="Advent Chembio Pvt. Ltd."
              content="W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701"
              mobileNumber="+91 7777084837"
              linkedlnLink={"https://www.google.com"}
              twitterLink={"https://www.google.com"}
              // socialMedia={true}
              youtubeLink={"https://www.google.com"}
            />
          </div>

          <div className="col img-advent position-relative">
            <div className="img-div position-absolute">
              <img src={adventimg} className="App-logo" alt="logo" />
            </div>
          </div>
        </div>

        <div className="row contact-cards">
          <div className="col d-flex justify-content-end">
            <Card
              className="card bg-light mb-3 component-card"
              title="FDA approved manufacturing facility"
              content="W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701"
              mobileNumber="+91 7777084837"
            />
          </div>
          <div className="col">
            <Card
              className="card bg-light mb-3 component-card"
              title="Central Warehouse"
              content="Sri Arihant Complex, Building No.I-12 Gala No. 1 to 5, Kalher village, at Kopar Bhiwandi, Thane - 421302"
              mobileNumber="+91 7777084837"
            />
          </div>
        </div>
      </div>
      <Nav backcolor="#f9f9f9" />

      {/* <form onSubmit={handleSubmit}>
        <input onChange={(e) => setname(e.target.value)}></input>
        <input onChange={(e) => setcontact(e.target.value)}></input>
        <button>Submit</button>
      </form> */}
    </section>
  );
}

export default App;
