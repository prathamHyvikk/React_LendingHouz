import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import useMeta from "../useMeta";
import ReCAPTCHA from "react-google-recaptcha";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  useMeta(
    "Become a Partner | Lending Houz",
    "Join Lending Houz as a partner and grow your business. Fill out the form to get started and connect with our team for flexible financing solutions."
  );

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "", // optional
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const stateOptions = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District of Columbia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").substring(0, 10);
    const part1 = digits.substring(0, 3);
    const part2 = digits.substring(3, 6);
    const part3 = digits.substring(6, 10);
    if (digits.length <= 3) return part1;
    if (digits.length <= 6) return `(${part1}) ${part2}`;
    return `(${part1}) ${part2}-${part3}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));

    if (name === "city") {
      const sanitized = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      return;
    }

    if (name === "zip") {
      const sanitized = value.replace(/\D/g, "").substring(0, 5);
      setFormData((prev) => ({ ...prev, [name]: sanitized }));
      return;
    }

    if (name === "phone") {
      const formatted = formatPhone(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
    if (error) setError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const { businessName, ownerName, email, phone, address, city, state, zip, website } = formData;

    if (!businessName.trim()) newErrors.businessName = "Business Name is required.";
    if (!ownerName.trim()) newErrors.ownerName = "Owner Name is required.";

    if (!email.trim()) newErrors.email = "Email is required.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = "Invalid email format.";
    }

    if (!phone.trim()) newErrors.phone = "Phone number is required.";
    else if (phone.replace(/\D/g, "").length !== 10)
      newErrors.phone = "Phone number must be 10 digits.";

    if (!address.trim()) newErrors.address = "Address is required.";
    if (!city.trim()) newErrors.city = "City is required.";
    if (!state.trim()) newErrors.state = "State is required.";

    if (!zip.trim()) newErrors.zip = "ZIP code is required.";
    else if (zip.length !== 5) newErrors.zip = "ZIP code must be 5 digits.";

    // WEBSITE: optional, but must be valid if provided
    if (website.trim()) {
      const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;
      if (!urlRegex.test(website.trim())) {
        newErrors.website = "Enter a valid URL that starts with http:// or https://";
      }
    }

    if (!captchaToken) newErrors.captcha = "Please verify that you're not a robot.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const payload = {
        business_name: formData.businessName,
        owner_name: formData.ownerName,
        business_email: formData.email,
        business_phone: formData.phone,
        business_address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        business_website: formData.website,
        "g-recaptcha-response": captchaToken,
      };

      const response = await fetch(
        "https://apiv2.prepaidiq.com/api/lending-houz/become-partner",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result?.success) {
        toast.success(result?.message || "Partner request submitted successfully!");
        setSuccess(result?.message || "Partner request submitted successfully!");
        setFormData({
          businessName: "",
          ownerName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          website: "",
        });
        setCaptchaToken("");
      } else {
        setError(result?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-4 py-2 focus:ring-1 focus:outline-none ${
      errors[field] ? "border-red-500" : "border-gray-300"
    }`;

  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />

      <section className="flex justify-center py-6 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
          <h2 className="sm:text-4xl text-2xl font-bold text-center mb-8 text-gray-800">
            Become a Partner
          </h2>

          {success && <p className="text-green-600 mb-4 text-center">{success}</p>}
          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 text-gray-700">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter your business name"
                  value={formData.businessName}
                  onChange={handleChange}
                  className={inputClass("businessName")}
                />
                {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  placeholder="Enter owner's name"
                  value={formData.ownerName}
                  onChange={handleChange}
                  className={inputClass("ownerName")}
                />
                {errors.ownerName && <p className="text-red-500 text-sm mt-1">{errors.ownerName}</p>}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block font-medium mb-2 text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(XXX) XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2 text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  className={inputClass("address")}
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputClass("city")}
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">State</label>
                  <Select
                    id="state"
                    name="state"
                    options={stateOptions}
                    value={stateOptions.find((opt) => opt.value === formData.state) || null}
                    onChange={(selected) => {
                      setFormData((prev) => ({ ...prev, state: selected?.value || "" }));
                      setErrors((prev) => ({ ...prev, state: selected?.value ? "" : "State is required." }));
                    }}
                    placeholder="Select State"
                    isSearchable
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        padding: "2px",
                        borderRadius: "8px",
                        borderColor: errors.state ? "#ef4444" : "#d1d5db",
                        boxShadow: state.isFocused ? "0 0 0 1px #000" : "none",
                        "&:hover": { borderColor: "#000" },
                      }),
                    }}
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>

                <div className="flex-1">
                  <label className="block font-medium mb-2 text-gray-700">ZIP</label>
                  <input
                    type="text"
                    name="zip"
                    placeholder="Enter 5-digit zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className={inputClass("zip")}
                  />
                  {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium mb-2 text-gray-700">
                  Business Website (Optional)
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={handleChange}
                  className={inputClass("website")}
                />
                {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
              </div>

              <div className="md:col-span-2 text-start origin-left scale-[0.80] sm:scale-100">
                <ReCAPTCHA
                  sitekey="6Ld-HwQsAAAAAHjp-oWWUZVRqGTn8fG2W2tjjH6l"
                  onChange={handleCaptcha}
                />
                {errors.captcha && <p className="text-red-500 text-sm mt-1">{errors.captcha}</p>}
              </div>
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="primary-bg hover:bg-black text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Form;
