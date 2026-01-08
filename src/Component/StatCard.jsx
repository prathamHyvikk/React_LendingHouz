import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const StatCard = ({ title, value, bg }) => (
  <div style={{ backgroundColor: bg }} className="rounded-lg shadow-md p-3">
    <p className="text-[13px] text-[#4a5565] sora-medium">{title}</p>
    <p className="text-[25px] sora-semibold text-gray-600">{value}</p>
  </div>
);

const Th = ({ children, className = "" }) => (
  <th className={`text-start px-3 py-4 sora-semibold ${className}`}>
    {children}
  </th>
);

const Td = ({ children, center, className = "" }) => (
  <td className={`px-6 py-4 ${center ? "text-center" : ""} ${className}`}>
    {children}
  </td>
);

const IconBtn = ({ icon, onClick, href }) => {
  const content = (
    <div className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center shadow cursor-pointer hover:bg-gray-300 ">
      {/* <img className=" w-4 h-4 " src={img} alt="img" /> */}

      <div className="text-xl ">{icon}</div>
    </div>
  );

  return href ? (
    <Link to={href}>{content}</Link>
  ) : (
    <button onClick={onClick}>{content}</button>
  );
};

export { StatCard, Th, Td, IconBtn };
