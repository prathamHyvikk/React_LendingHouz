const StatCard = ({ title, value, bg }) => (
  <div
    style={{ backgroundColor: bg }}
    className="rounded-lg shadow-md p-4"
  >
    <p className="text-[13px] text-[#4a5565]">{title}</p>
    <p className="text-2xl font-semibold text-gray-700">{value}</p>
  </div>
);

const Th = ({ children, className = "" }) => (
  <th className={`text-start px-4 py-3 font-semibold ${className}`}>{children}</th>
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

  return href ? <a href={href}>{content}</a> : <button onClick={onClick}>{content}</button>;
};

export { StatCard, Th, Td, IconBtn };