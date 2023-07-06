import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Label from "./Label";
import axios from "axios";
import ButtonComponent from "./ButtonComponent";
import PageLink from "./PageLink";

const colField = [
  {
    heading: "Name",
    col: "col-1",
  },
  {
    heading: "Contact Number",
    col: "col",
  },
  {
    heading: "UserName",
    col: "col-1",
  },
  {
    heading: "Email",
    col: "col-1",
  },
  {
    heading: "Address",
    col: "col-1",
  },
  {
    heading: "Website",
    col: "col-1",
  },
  {
    heading: "Company",
    col: "col-1",
  },
  {
    heading: "Comapany Name",
    col: "col",
  },
  {
    heading: "Street",
    col: "col-1",
  },
  {
    heading: "City",
    col: "col-1",
  },
  {
    heading: "Zip-Code",
    col: "col-1",
  },
  {
    heading: "Suite",
    col: "col-1",
  },
];

const loopnum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const ModuleWrapperStyled = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  width: 100vw;
  padding: 30px;
  .table-row {
    border-bottom: 1.5px ridge #dddddd;
    color: #4b4b4b;
  }
`;

function RepositoryDetailModule() {
  const [filesdata, setFileData] = useState([]);
  // const handleApi = async () => {
  //   try {
  //     const response = await axios.get("https://dummyjson.com/users");
  //     // console.log(response);
  //     setFileData(response);
  //     console.log(filesdata);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setFileData(json));
    // console.log(filesdata);
  }, []);
  console.log(filesdata);

  // useEffect(() => {
  //   handleApi();
  //   console.log("run");
  // });

  return (
    <ModuleWrapperStyled className="row w-100 detailmodulewrapper">
      {/* {Object.keys(filesdata).map((ele) => {
        console.log(ele);
      })} */}
      <table>
        <tr className="table-row">
          {colField.map((el) => {
            return (
              <>
                <th> {el.heading} </th>
              </>
            );
          })}
        </tr>
        {filesdata.map((ele) => {
          return (
            <>
              <tr className="table-row">
                <td> {ele.name} </td>
                <td> {ele.phone} </td>
                <td> {ele.username} </td>
                <td> {ele.email} </td>
                <td> {ele.email} </td>
                <td> {ele.website} </td>
                <td> {ele.company.catchPhrase} </td>
                <td> {ele.company.name} </td>
                <td> {ele.address.street} </td>
                <td> {ele.address.city} </td>
                <td> {ele.address.zipcode} </td>
                <td> {ele.address.suite} </td>
              </tr>
            </>
          );
        })}
      </table>
    </ModuleWrapperStyled>
  );
}

export default RepositoryDetailModule;
