import React from "react";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      {/* here is gonna be the navigation */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
