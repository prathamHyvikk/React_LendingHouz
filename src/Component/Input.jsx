const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  max
}) => (
  <div>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      max={max}
      className={`w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 transition ${
        error
          ? "border-red-400 focus:ring-red-200"
          : "border-gray-300 focus:ring-blue-200"
      }`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default Input;
