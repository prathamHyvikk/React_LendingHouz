import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return (
      <>
        {toast.error(" Please login .")}
        <Navigate to="/app/signin" replace />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
