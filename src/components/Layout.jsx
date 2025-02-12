import React from "react";
import { Outlet } from "react-router";

// function Layout() {
//   return (
//     <div className="flex flex-col h-screen">
      
//       <main className="flex-1 justify-center items-center">
//         <Outlet />
//       </main>

//     </div>
//   );
// }

// export default Layout;

function Layout() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-100">
      <Outlet />
    </div>
  );
}

export default Layout;