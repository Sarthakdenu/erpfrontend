import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Group5 from './Group 5.png'; 
import Group6 from './Group 6.png';

function Frontpage() {
  const [currentImage, setCurrentImage] = useState(Group5);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === Group5 ? Group6 : Group5));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(imageChangeInterval);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-800'>
      <div className="text-4xl my-3 text-white font-bold">
        <p>MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY</p>
      </div>
      <div className='py-2'>
        <img 
          id='manitlogog' 
          src="https://s3-alpha-sig.figma.com/img/d872/98c7/55c39ea856ab14bb42d7b0457174e958?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QUYq7~VScMeFJJjANoQExbKFuuUep6sx60GwxmIGdyuG~17cuNKuO22FVob7spXFgmLxvbAEaTDU4b3O8h0z7U~B4YfOLXns1tc5ddv4pLgqmIdzkhKoJsrDxN9EPF5-KAQiLhrwHGxnhSGa92t-zp9X0aCJyH77s5x46RM5yhJSlLSKRITu5T92UJQ37zNtwaW4~bgJSt7Oa0C3ImMr6lMZKqdCvlO3BMZvPfFPsuvZu780b9PKRvfR-~3gZ~zXVIfYYrvVKwOoUXDSCSU88wSzwOkdW7dns3T3hQ9za98eMNqHR3Vd5IbgOhBx4f1yeOBvFO7AtkOC4WONHEKdEQ__" 
          alt="MANIT Logo" 
        />
      </div>
      <div className="py-3">
        <img src={currentImage} alt="Smile Logo" id='smililog' />
      </div>
      <div className="flex flex-row gap-10 py-5">
        <div className="text-6xl text-cyan-500 my-3 font-bold shadow-lg shadow-cyan-500/50">
          <p>MANIT</p>
        </div>
        <div className='text-6xl text-cyan-400 my-3 shadow-lg shadow-cyan-500/50'>
          <p>SMILE</p>
        </div>
      </div>
      <div className="py-4">
      <Link to="/login">
        <button className="hover:bg-sky-700 bg-gradient-to-r from-yellow-300 to-yellow-500 py-4 px-6 text-2xl font-bold border-2 border-black rounded-lg hover:text-white">
          Continue
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Frontpage;
