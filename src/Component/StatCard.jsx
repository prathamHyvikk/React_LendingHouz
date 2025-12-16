import { Link } from "react-router-dom";

const StatCard = ({ title, value, bg }) => (
  <div
    style={{ backgroundColor: bg }}
    className="rounded-lg shadow-md py-4 px-3"
  >
    <p className="text-[13px] text-[#4a5565] sora-medium">{title}</p>
    <p className="text-[25px] sora-semibold text-gray-600">{value}</p>
  </div>
);

const Th = ({ children, className = "" }) => (
  <th className={`text-start px-3 py-4 sora-semibold ${className}`}>{children}</th>
);

const Td = ({ children, center , className = ""}) => (
  <td className={`px-4 py-3 ${center ? "text-center" : ""} ${className}`}>
    {children}
  </td>
);

const IconBtn = ({ img, onClick, href }) => {
  const content = (
    <div >
      <img className=" bg-gray-200 rounded-full flex justify-center shadow cursor-pointer hover:bg-gray-300 p-2" src={img} alt="img" />
    </div>
  );

  return href ? <Link to={href}>{content}</Link> : <button onClick={onClick}>{content}</button>;
};

export { StatCard, Th, Td, IconBtn };