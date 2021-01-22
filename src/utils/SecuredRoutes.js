import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserRoute = (props) => {
  const { role } = useSelector((state) => state.auth.user);

  return role === null ? (
    <Navigate to="/signup" />
  ) : (
    <Route path={props.path} end={props.end} element={props.element} />
  );
};

export const AdminRoute = (props) => {
  const { role } = useSelector((state) => state.auth.user);

  return role !== "admin" ? (
    <Navigate to="/dashboard" />
  ) : (
    <Route path={props.path} end={props.end} element={props.element} />
  );
};

export const WithTokenRoute = (props) => {
  const { role } = useSelector((state) => state.auth.user);

  return role !== null ? (
    <Navigate to="/dashboard" />
  ) : (
    <Route path={props.path} end={props.end} element={props.element} />
  );
};

// import  React from  "react";
// import { Route, Redirect } from  "react-router-dom";

// const  PrivateRoute: React.FC<{
//         component: React.FC;
//         path: string;
//         exact: boolean;
//     }> = (props) => {

//     const condition = performValidationHere();

//     return  condition ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
//         (<Redirect  to="/page/login"  />);
// };
// export  default  PrivateRoute;
