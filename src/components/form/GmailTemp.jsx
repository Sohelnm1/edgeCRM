import React from "react";
import FormInputs from "./FormInputs";
import TextArea from "./TextArea";
import Label from "../common/Label";
import styled from "@emotion/styled";
import ButtonComponent from "../common/ButtonComponent";
import PopUpPanel from "../common/PopUpPanel";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";

const EmailStyled = styled.div`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.12);
  padding: 10px 0;
`;

const GmailBoxStyled = styled.div`
  border: 1px solid #ccc;
  height: 352px;
  margin: 12px 0px 0 0px;
`;

const RowGmailStyled = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 8px;
`;

function GmailTemp() {
  const [count, setCount] = React.useState();

  const [error, seterror] = React.useState(false);

  const [gmaildata, setGmailData] = React.useState({
    from: "Edge Consultant <consultant@edgecrm.app>",
    template: "",
    to: "",
    subject: "",
    textarea: "",
  });

  const [dummySet, setDummySet] = React.useState({
    from: "Edge Consultant <consultant@edgecrm.app>",
    template: "",
    to: "",
    subject: "",
    textarea: "",
  });

  let name, value;
  const handleChange = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setCount(1);
    setGmailData({ ...gmaildata, [name]: value });
  };

  const buttonSave = () => {};

  const handleonSubmit = async (e) => {
    e.preventDefault();
    console.log(gmaildata);
    if (
      gmaildata.from.length === 0 ||
      gmaildata.template.length === 0 ||
      gmaildata.to.length === 0 ||
      gmaildata.subject.length === 0 ||
      gmaildata.textarea.length === 0
    ) {
      seterror(true);
    }

    const formData = new FormData();
    formData.append("file", gmaildata);
    try {
      const response = await axios.post(
        "https://dummy.restapiexample.com/api/v1/create",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const buttonCancel = () => {
    seterror(false);
    setCount(0);
    setGmailData(dummySet);
  };
  return (
    <>
      <form onSubmit={handleonSubmit}>
        <EmailStyled className="d-md-flex">
          <Label
            headingthird
            fontsize="14px"
            color="#7a7a7a"
            marginbottom="10px"
            paddingright="0"
            width="20%"
          >
            Form*:
          </Label>

          <FormInputs
            // placeholder={fifthsubplace}
            margin="0"
            width="60%"
            paddingright="0 15px"
            placeholderfontsize="13px"
            borderb="none"
            color="#7a7a7a"
            name="from"
            // onChange={handleChange}
            value={gmaildata.from}
          />
          {error && gmaildata.from.length <= 0 ? (
            <ErrorMsg labeldata="Please Enter some data" />
          ) : (
            ""
          )}
          <FormInputs
            placeholder="selecttemplate"
            margin="0"
            width="20%"
            paddingright="0 15px"
            placeholderfontsize="13px"
            borderb="none"
            color="#7a7a7a"
            // onChange={(text) => console.log({ text })}
            value={gmaildata.template}
            onChange={handleChange}
            name="template"
          />
          {error && gmaildata.template.length <= 0 ? (
            <ErrorMsg labeldata="Please Enter some data" />
          ) : (
            ""
          )}
        </EmailStyled>
        <EmailStyled className="d-md-flex">
          <Label
            headingthird
            fontsize="14px"
            color="#7a7a7a"
            marginbottom="10px"
            paddingright="0"
            width="20%"
          >
            To*:
          </Label>

          <FormInputs
            placeholder="Recipitents"
            margin="0"
            width="60%"
            paddingright="0 15px"
            placeholderfontsize="13px"
            borderb="none"
            color="#7a7a7a"
            name="to"
            onChange={handleChange}
            value={gmaildata.to}
          />
          {error && gmaildata.to.length <= 0 ? (
            <ErrorMsg labeldata="Please Enter some data" />
          ) : (
            ""
          )}
          <ButtonComponent
            bcolor="#fff"
            type="button"
            border="none"
            color="#7a7a7a"
          >
            Cc
          </ButtonComponent>
          <ButtonComponent
            bcolor="#fff"
            type="button"
            border="none"
            color="#7a7a7a"
          >
            Bcc
          </ButtonComponent>
        </EmailStyled>
        <EmailStyled className="d-md-flex w-100">
          <Label
            headingthird
            fontsize="14px"
            color="#7a7a7a"
            marginbottom="10px"
            paddingright="0"
            width="20%"
          >
            Subject*:
          </Label>

          <FormInputs
            placeholder="Subject"
            margin="0"
            width="60%"
            paddingright="0 15px"
            placeholderfontsize="13px"
            borderb="none"
            color="#7a7a7a"
            name="subject"
            onChange={handleChange}
            value={gmaildata.subject}
          />
          {error && gmaildata.subject.length <= 0 ? (
            <ErrorMsg labeldata="Please Enter some data" />
          ) : (
            ""
          )}
          <ButtonComponent
            border="none"
            bcolor="#fff"
            color="#666"
            transform="rotate(-41deg)"
            margin="0px 0 0 130px"
          >
            <span class="material-icons material-icons-outlined">
              attach_file
            </span>
          </ButtonComponent>
        </EmailStyled>
        <GmailBoxStyled className="col-12 w-80 ">
          <RowGmailStyled className="row-1 d-flex">
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_bold
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_italic
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_underlined
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                strikethrough_s
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_list_numbered
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_list_bulleted
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                superscript
              </span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                subscript
              </span>
            </ButtonComponent>

            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">image</span>
            </ButtonComponent>
            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_underlined
              </span>
            </ButtonComponent>

            <ButtonComponent border="none" bcolor="#fff" color="#666">
              <span class="material-icons material-icons-outlined">
                format_underlined
              </span>
            </ButtonComponent>
          </RowGmailStyled>
          <div className="row">
            <TextArea
              width="97%"
              borderb="none"
              height="275px"
              color="#555"
              name="textarea"
              value={gmaildata.textarea}
              onChange={handleChange}
            >
              Sample text
            </TextArea>
            {error && gmaildata.textarea.length <= 0 ? (
              <ErrorMsg labeldata="Please Enter some data" />
            ) : (
              ""
            )}
          </div>
        </GmailBoxStyled>

        <PopUpPanel
          count={count}
          position="inherit"
          boxshadow="none"
          textalign="left"
          width="100%"
          transformt="none"
          padding="16px 25px"
          onClick={buttonCancel}
          onClick1={buttonSave}
        />
      </form>
    </>
  );
}

export default GmailTemp;
