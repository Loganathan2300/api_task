import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../component/Table";

const ApiData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((res) => {
        setUsers(res.data);
        // Set the users array from the response data
      })
      .catch((error) => console.log(error));
  }, []);
  const header = ["ID", "NAME", "ADDRESS", "GENDER", "STATUS"];
  return (
    <div className="m-5 mt-0 mx-0">
      <div className="card  my-5 mx-2">
        <Table header={header} users={users} />
      </div>
    </div>
  );
};

export default ApiData;

// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const ApiData = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://gorest.co.in/public/v2/users")
//       .then((res) => {
//         setUsers(res.data); // Set the users array from the response data
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="container-fluid m-1 p-3">
//       <div className="row">
//         <div className="col-12">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 {/* Add more table headers as needed */}
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user,i) => (
//                 <tr key={i}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   {/* Add more table cells with user data */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApiData;
