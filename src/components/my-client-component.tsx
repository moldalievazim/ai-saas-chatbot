// "use client";

// import { useState } from "react";
// import { myServerAction } from "@/actions/createUser";

// export default function MyClientComponent() {
//   const [message, setMessage] = useState("");

//   const handleClick = async () => {
//     const result = await myServerAction("data from client");
//     setMessage(result.message);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Trigger Server Action</button>
//       <p>{message}</p>
//     </div>
//   );
// }
