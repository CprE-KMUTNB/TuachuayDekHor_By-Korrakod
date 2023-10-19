import React,{useEffect,useState,useContext} from 'react'
import "./Blogger.scoped.css"
import Navbar from '../component/Nav'
import img1 from '../../src/Assets/person-circle-outline.svg'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { General } from '../App';

// const Data = [
//   {
//     imgSrc: img1,
//     writer: 'Pikachu',
//   },

//   {
//     imgSrc: img1,
//     writer: 'PumZaZa',
//   },

//   {
//     imgSrc: img1,
//     writer: 'Narak',
//   },

//   {
//     imgSrc: img1,
//     writer: 'WinterThePooh',
//   },

//   {
//     imgSrc: img1,
//     writer: 'AllinOne',
//   },

//   {
//     imgSrc: img1,
//     writer: 'Nov20',
//   },

// ]

function Blogger() {
  const [data, setData] = useState([]);
  const { supabase_for_use: supabase, session, user } = useContext(General);
  useEffect(() => {
      axios.post("http://localhost:3300/blogger",{

      })
      .then(res => {
        console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
          alert(err)
      })
  }, [])
  return (
    <div className="Blogger">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="main">
        <h1 className='title'>
          Our Blogger
        </h1>
        {/* <p>Something</p> */}
        <div className="blogger_wrapper">
        {
            data.map(({user: { username, id }, image: {avatar_url}},index) => {
              return (
                <div className="box">
                  <Link to={`/profile/${id}`}>
                    <div className="singleDest" key={index}>
                      <img src={avatar_url??img1} alt=""/>
                    </div>
                    <div className="userwrite">
                      <Link to={`/profile/${id}`}>{username}</Link>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blogger