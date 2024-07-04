import { useContext, useEffect, useState } from 'react';
import { AutoContext } from '../Components/AuthContext';
import { useLoaderData } from 'react-router-dom';
import AddItemCard from './AddItemCard';

const MyAddList = () => {
  const { user, loading } = useContext(AutoContext);
  const data = useLoaderData();
  const [userAddData, setUserAddData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option

  useEffect(() => {
    if (!loading && user) {
      const filteredItems = data.filter((item) => item.email === user.email);
      setUserAddData(filteredItems);
    }
  }, [data, loading, user]);

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Set the selected option
  };

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  // Filter userAddData based on the selected option
  const filteredData = selectedOption ? userAddData.filter(item => item.customization === selectedOption) : userAddData;

  return (
    <div>
      <div className="flex items-center justify-center mb-8 mt-8">
        <h4 className='font-semibold text-[32px] text-center' >My Art & Craft List</h4>
      </div>
      <div className='flex justify-center py-4 bg-[#2b3440]' >
        <details className="dropdown">
          <summary className="m-1 btn">Customization</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className='btn' onClick={() => handleOptionClick('Yes')}><a>Yes</a></li>
            <li className='btn' onClick={() => handleOptionClick('No')}><a>No</a></li>
          </ul>
        </details>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4' >
        {filteredData.map((cardPass) => (
          <AddItemCard
            cardPass={cardPass}
            key={cardPass._id} // Use cardPass._id instead of data._id
          />
        ))}
      </div>
    </div>
  );
};

export default MyAddList;
