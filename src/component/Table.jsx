import { Icon } from "@iconify/react";
import { useState } from "react";
import Model from "./Model";
import axios from "axios";
import { Form } from "react-bootstrap";
import EditModel from "./editModel";
import * as Yup from 'yup';
import { Formik } from "formik";


const Table = ({ users, header }) => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    NAME: Yup.string()
      .required('Name is required')
      .matches(/^[A-Za-z].*/, 'Enter valid name'),
    Email_address: Yup.string()
      .required("Email_id is required")
      .matches(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/, 'Enter valid Email'),
    Address: Yup.string()
      .required('Address is required')
      .matches(/^[A-Za-z].*/, 'Enter valid Address')
  });

  // State variables for form inputs
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");

  const [putInputName, setPutInputName] = useState("");
  const [putInputEmail, setPutInputEmail] = useState("");
  const [putInputAddress, setPutInputAddress] = useState("");

  const [dropdownValues, setDropdownValues] = useState({});
  const [editShow, setEditShow] = useState(false);
  const [show, setShow] = useState(false);

  // Show/hide handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const editHandleClose = () => setEditShow(false);
  const editHandleShow = () => setEditShow(true);

  // Dropdown handler
  const handleClick = (val, item) => {
    setDropdownValues(prevValues => ({
      ...prevValues,
      [item.id]: val,
    }));
  };

  // API Post value
  const postValue = () => {
    const data = {
      name: inputName,
      email: inputEmail,
      Address: inputAddress
    }
    axios.post("https://gorest.co.in/public/v2/users", data)
  };

  // API edit value
  const putValue = () => {
    const PutData = {
      name: putInputName,
      email: putInputEmail,
      address: putInputAddress,
    }
    // axios.put("https://gorest.co.in/public/v2/users", PutData)
  };

  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="">
        <div className="row ">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <div className="row my-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Search"
                  className=" border-3 fw-bold rounded-2 px-2 py-1 mx-2"
                />
              </div>
              <div className="col-6">
                <div className="text-end me-3">
                  <button className="px-3 py-2 rounded-2 border-0 bg-secondary-subtle text-emphasis-secondary" onClick={handleShow}>
                    ADD USER
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div className=" row">
              <div className="col-lg-12 col-sm-12 col-md-12 ">
                <div className="table-responsive rounded-3 m-2">
                  <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                    <table className="table table-striped table-hover ">
                      <thead className="table-secondary sticky-top text-center">
                        <tr>
                          <th>EDIT</th>
                          {header.map((item, i) => (
                            <th key={i}>
                              {item}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, i) => (
                          <tr key={i}>
                            <td>
                              <button className="border-0 bg-transparent" onClick={editHandleShow}>
                                <Icon icon="fluent:edit-24-filled" />
                              </button>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                              <div class="dropdown">
                                <button
                                  class="btn btn-secondary dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  {dropdownValues[user.id] || "Select"}
                                </button>
                                <ul class="dropdown-menu">
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      onClick={() =>
                                        handleClick("Active", user)
                                      }
                                    >
                                      Active
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      class="dropdown-item"
                                      href="#"
                                      onClick={() =>
                                        handleClick("inActive", user)
                                      }
                                    >  InActive  </a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Model
        onClick={handleClose}
        onHide={handleClose}
        show={show}
        title={"Add user"}
        body={
          <Formik
            initialValues={ {NAME:'',
                Email_address:'',
                 Address:'',  }}
            validationSchema={validationSchema}
            onSubmit={postValue}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="NAME">
                  <Form.Label >NAME</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name..."
                    autoFocus
                    onChange={(e) => setInputName(e.target.value)}
                    value={inputName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email_address">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email..."
                    autoFocus
                    onChange={(e) => setInputEmail(e.target.value)}
                    value={inputEmail}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Address..."
                    autoFocus
                    onChange={(e) => setInputAddress(e.target.value)}
                    value={inputAddress}
                  />
                </Form.Group>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        }
        button1={"Cancel"}
        button2={"Add"}
        onclick1={handleClose}
      />

      <EditModel
        editOnClick={editHandleClose}
        editOnHide={editHandleClose}
        editShows={editShow}
        editTitle={"Edit user"}
        editBody={
          <Formik
            initialValues={{
              NAME: putInputName,
              Email_address: putInputEmail,
              Address: putInputAddress
            }}
            validationSchema={validationSchema}
            onSubmit={putValue}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="NAME">
                  <Form.Label>NAME</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name..."
                    autoFocus
                    onChange={(e) => setPutInputName(e.target.value)}
                    value={putInputName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email_address">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email ID..."
                    autoFocus
                    onChange={(e) => setPutInputEmail(e.target.value)}
                    value={putInputEmail}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Address..."
                    autoFocus
                    onChange={(e) => setPutInputAddress(e.target.value)}
                    value={putInputAddress}
                  />
                </Form.Group>
                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        }
        editButton1={"Cancel"}
        editButton2={"Submit"}
        editOnclick1={editHandleClose}
      />
    </div>
  );
};

export default Table;






// import { Icon } from "@iconify/react";
// import { useState } from "react";
// import Model from "./Model";
// import axios from "axios";
// import { Form } from "react-bootstrap";
// import EditModel from "./editModel";
// import * as Yup from 'yup';
// import { Formik } from "formik";


// const Table = ({ users, header }) => {
//   //validation form on formik and yup start
//   const initialValues ={
//     NAME:'',
//     Email_address:'',
//     Address:'',    
//   };
//   const validationSchema=Yup.object().shape({
//     NAME:Yup.string()
//     .required('Name is required')
//     .matches(/^[A-Za-z].*/,'Enter vaild name'),
//     Email_address:Yup.string()
//     .required("Email_id is required")
//     .matches(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,'Enter valid Email'),
//     Address:Yup.string()
//     .required('Address is required')
//     .matches(/^[A-Za-z].*/,'Enter vaild Address')
//   })
//   // validation end 
//   const [dropdownValues, setDropdownValues] = useState({});
//   const [editShow, setEditShow] = useState(false);
//   const [show, setShow] = useState(false);
//   //input tag post Method
//   const [inputName,setInputName]=useState()
//   const [inputEmail,setInputEmail]=useState()
//   const [inputAddress,setInputAddress]=useState()
//   // input tag put Method 
//   const [putInputName,setPutInputName]=useState()
//   const [putInputEmail,setPutInputEmail]=useState()
//   const [putInputAddress,setPutInputAddress]=useState()
//   // input tag put Method
//   const editHandleClose = () => setEditShow(false);
//   const editaHandleShow = () => setEditShow(true);

//   //show or not button -get method
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   //dropdown button show
//   const handleClick = (val, item) => {
//     setDropdownValues((prevValues) => ({
//       ...prevValues,    //irukara value va apdiyai kattum..
//       [item.id]: val,
//     }));
//   };
//   //API Post value 
//   const postValue =()=>{
//     const data={
//       name:inputName,
//       email:inputEmail,
//       Address:inputAddress
//     }
//       axios.post("https://gorest.co.in/public/v2/users",data)
//   }
//   //API edit value
//   const putValue =()=>{
//     const PutData={
//       name:putInputName,
//       email:putInputEmail,
//       address:putInputAddress,
//     }
//       // axios.put("https://gorest.co.in/public/v2/users",PutData)
//   }
//   return (
//     <div className="col-lg-12 col-sm-12 col-md-12 ">
//       <div className="">
//         <div className="row ">
//           <div className="col-lg-12 col-sm-12 col-md-12">
//             <div className="row my-3">
//               <div className="col-6">
//                 <input
//                   type="text"
//                   placeholder="Search"
//                   className=" border-3 fw-bold rounded-2 px-2 py-1 mx-2"
//                 />
//                 {/* <input
//                     type="text"
//                     placeholder="Search"
//                     className=" border-3 fw-bold rounded-1"
//                     value={searchTerms}
//                     onChange={(e) => setSearchTeams(e.target.value)}
//                   /> */}
//               </div>
//               <div className="col-6">
//                 <div className="text-end me-3">
//                   <button className="px-3 py-2 rounded-2 border-0 bg-secondary-subtle text-emphasis-secondary"onClick={handleShow}>
//                     ADD USER
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-100">
//             <div className=" row">
//               <div className="col-lg-12 col-sm-12 col-md-12 ">
//                 <div className="table-responsive rounded-3 m-2">
//                   <div style={{ maxHeight: "300px", overflowY: "auto" }}>
//                     <table className="table table-striped table-hover ">
//                       <thead className="table-secondary sticky-top text-center">
//                         <tr>
//                           <th>EDIT</th>
//                           {header.map((item, i) => (
//                             <th key={i}>
//                               <th>{item}</th>
//                             </th>
//                           ))}
//                           {/* Add more table headers as needed */}
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {users.map((user, i) => (
//                           <tr key={i}>
//                             <td>
//                               <button className="border-0 bg-transparent" onClick={editaHandleShow}>
//                                 <Icon icon="fluent:edit-24-filled" />
//                               </button>
//                             </td>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.gender}</td>
//                             <td>
//                               <div class="dropdown">
//                                 <button
//                                   class="btn btn-secondary dropdown-toggle"
//                                   type="button"
//                                   data-bs-toggle="dropdown"
//                                   aria-expanded="false"
//                                 >
//                                   {dropdownValues[user.id] || "Select"}
//                                 </button>
//                                 <ul class="dropdown-menu">
//                                   <li>
//                                     <a
//                                       class="dropdown-item"
//                                       href="#"
//                                       onClick={() =>
//                                         handleClick("Active", user)
//                                       }
//                                     >
//                                       Active
//                                     </a>
//                                   </li>
//                                   <li>
//                                     <a
//                                       class="dropdown-item"
//                                       href="#"
//                                       onClick={() =>
//                                         handleClick("inActive", user)
//                                       }
//                                     >  InActive  </a>
//                                   </li>
//                                 </ul>
//                                 {/* <li><td>{user.status}</td></li> */}
//                               </div>
//                             </td>
//                             {/* Add more table cells with user data */}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-lg-12 col-sm-12 col-md-12 my-1 mb-0">
//               <nav aria-label="Page navigation example">
//                 <ul className="pagination justify-content-center">
//                   {/* {page.map((pageNumber) => (
//                     <li key={pageNumber} className="page-item">
//                       <button className="page-link" onClick={() => setPageChange(pageNumber)} >
//                         {pageNumber}
//                       </button>
//                     </li>
//                   ))} */}
//                 </ul>
//               </nav>
//             </div>
//           </div>
//         </div>
//       </div>
     
//       <Model
//         onClick={handleClose}
//         onHide={handleClose}
//         show={show}
//         title={"Add user"}
//         body={
//         <>
//          <Formik initialValues={initialValues}
//             validationSchema={validationSchema}>
//         <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label htmlFor="NAME">NAME</Form.Label>
//               <Form.Control
//                 type="type"
//                 placeholder="Enter your Name..."
//                 autoFocus
//                 onChange={(e)=>setInputName(e.target.value)} value={inputName}
//               />
//               <Form.Label htmlFor="Email_address">Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your Email..."
//                 autoFocus
//                 onChange={(e)=>setInputEmail(e.target.value)} value={inputEmail}
//                 required
//               />
//               <Form.Label htmlFor="Address">Address</Form.Label>
//               <Form.Control
//                 type="type"
//                 placeholder="Engter your Address..."
//                 autoFocus
//                 onChange={(e)=>setPutInputAddress(e.target.value)} value={inputAddress}
//               />
//           </Form.Group>
//           </Form>
//           </Formik>
//         </>}
//         button1={"Cancel"}
//         button2={"Add"}
//         onclick1={postValue}
//       />
      
//       <EditModel
//         editOnClick={editHandleClose}
//         editOnHide={editHandleClose}
//         editShows={editShow}
//         editTitle={"Edt user"}
//         editBody={
//         <>
//         <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>NAME</Form.Label>
//               <Form.Control
//                 type="type"
//                 placeholder="Enter your Name..."
//                 autoFocus
//                 onChange={(e)=>setPutInputName(e.target.value)} value={putInputName}
//               />
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your Email ID..."
//                 autoFocus
//                 onChange={(e)=>setPutInputEmail(e.target.value)} value={putInputEmail}
//               />
//               <Form.Label>Address</Form.Label>
//               <Form.Control
//                 type="type"
//                 placeholder="Engter your Address..."
//                 autoFocus
//                 onChange={(e)=>setPutInputAddress(e.target.value)} value={putInputAddress}
//               />
//           </Form.Group>
//           </Form>
//         </>}
//         editButton1={"Cancel"}
//         editButton2={"Submit"}
//         editOnclick1={putValue}

//       />
//     </div>
//   );
// };

// export default Table;

