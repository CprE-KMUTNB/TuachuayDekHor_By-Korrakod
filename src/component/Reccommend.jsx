import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContentSlide.scoped.css';
import img1 from '../../src/Assets/slide1.png';
import { BiSolidPencil } from 'react-icons/bi';
import axios from 'axios';

function Reccommend() {
  const [data, setData] = useState([]); 

  const countToShow = 6;
  const limitedData = data.slice(0, countToShow);

    useState(()=>{
        axios.post('http://localhost:3300/randompost',{
        
        })
        .then((res) => {
        setData(res.data);
        })
        .catch((error) => {
        console.error(error);
        });

    },[])


  return (
    <div className="content">
      <div className="main_content">
        {limitedData.map(({ id_post: id, title, category, user: { username }, image_link }, index) => {
          return (
            <div className="singleDest" key={index}>
              <div className="dastImage">
                <img src={image_link??img1} alt="" />
              </div>
              <div className="destFooter">
                <div className="destText">
                  <h4>
                    <Link to={`/${category}/${id}`}>{title}</Link>
                  </h4>
                </div>
              </div>
              <div className="userwrite">
                <div className="name">
                  <BiSolidPencil size={20} className="icon_pencil" />
                  {username}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reccommend;
