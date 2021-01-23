import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const Categories = () => {
  let location = useLocation();
  const path = location.pathname;
  const { slug } = useParams();
  console.log(path);
  console.log(slug);

  const itemPath = path.split("/")[3] && "/" + path.split("/")[3];
  return (
    <div>
      <h5 className="flex text-green-600  pt-40 mb-12 px-8 sm:px-12 xl:px-32 flex-wrap justify-center sm:justify-start">
        <Link to="/" className="trans-out hover:text-yellow-800">
          Home
        </Link>{" "}
        <span className="text-yellow-800">&nbsp;/&nbsp;</span>
        <Link
          to="/categories"
          className={`trans-out hover:text-yellow-800 ${
            path === "/categories" && "text-yellow-800"
          }`}
        >
          Solutions
        </Link>
        {path.includes("/categories/") && (
          <Link
            to={path.split("/")[2]}
            className={`trans-out capitalize hover:text-yellow-800 ${
              path === "/categories/prepared" && "text-yellow-800"
            }`}
          >
            <span className="text-yellow-800">&nbsp;/&nbsp;</span>
            {path.split("/")[2].replace("-", " ")}
          </Link>
        )}{" "}
        <p className="text-yellow-800">
          {" "}
          {itemPath && itemPath.replace(/%20/g, " ")}
        </p>
      </h5>
      <Outlet />
    </div>
  );
};

export default Categories;
