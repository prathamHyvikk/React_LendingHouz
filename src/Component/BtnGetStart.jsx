import React from 'react'
import '../Component/Utility.css'

function BtnGetStart({ category = "default" }) {


  const handleClick = () => {
    // const baseUrl = 'https://dealers.prepaidiq.com/customer/tfc/finance/application/eyJpdiI6IllxelIvYzhaU0pRYW9RNXFQR0tLRWc9PSIsInZhbHVlIjoiUktYb2hIVWlMNEVldkVsTUNYM1B1Zz09IiwibWFjIjoiYWU1MmZjMGI5YTVkZTg2OWYxMDgyZWMyMjExNzk1OGMxOWUwZWJlZDA4N2M5N2U1MGFkMWI1ZTk0NWJhOTM1NyIsInRhZyI6IiJ9';
    const baseUrl = 'https://dealers.prepaidiq.com/customer/tfc/finance/application/eyJpdiI6Imd5SHFKdVpzUm1ibFM4eHdINzFHSnc9PSIsInZhbHVlIjoickg4M3JKUzNJQ1FBcnhaZnZBaUZDZz09IiwibWFjIjoiNTA0MmU1MWMwMjEzZTkzMTE2OGEyYjJiNjgwOGE4Y2VmNjY3MjBkMTA4MTBlMzU2ZmExMWQ0YzMwNTE2YTgxMCIsInRhZyI6IiJ9';

    let urlToOpen = baseUrl;

    if (category && category.trim().toLowerCase() !== 'default') {
      urlToOpen += `?category=${encodeURIComponent(category.trim())}`;
    }

    window.open(urlToOpen, '_blank');
  };


  return (
    <div>
      <button onClick={handleClick} className=' cursor-pointer py-4 px-7  primary-bg rounded-xl sora-semibold text-white flex items-center gap-2 group transition-all duration-300 hover:shadow-lg'>
        Get Started
        <i className="ri-arrow-right-long-line transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-x-125"></i>
      </button>

    </div>
  )
}

export default BtnGetStart
