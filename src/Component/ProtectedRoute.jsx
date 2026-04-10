import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.value);

  if (!auth) {
    return (
      <>
        {toast.error("Session expired. Please login again.")}
        <Navigate to="/app/signin" replace />
      </>
    );
  }

  return children;
};

export default ProtectedRoute;
