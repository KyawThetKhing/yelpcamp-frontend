import { useSelector } from "react-redux";
import { Navigate, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const { currentUser } = useSelector(state => state.user);

  //   if (loading) {
  //     return <p>Checking authenticaton..</p>;
  //   }

  if (!currentUser) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
