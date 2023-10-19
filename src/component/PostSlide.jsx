import React, { useState, useContext, useEffect } from 'react'
import './ContentSlide.scoped.css'
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import { BsHeartFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSolidPencil } from "react-icons/bi";
import axios from 'axios';
import CheckDelete from './CheckDelete'
import { General } from '../App';



// const Data1 = () => {

//     const { supabase_for_use: supabase, session, user } = useContext(General);
//     axios.get("http://localhost:3300/posttoprofile", {
//         id: user?.id,
//         title: title,
//         category: category,
//         username: user?.user_metadata.username,
//     })

// const post = [
//     {
//         id_post : {id},
//         imgSrc : img1,
//         destTitle : {title},
//         writer : {username},
//         category: {category},
//     }
// ]

// }

// const Data = [
//     {
//         id_post: { id },
//         imgSrc: img1,
//         destTitle: { title },
//         writer: { username },
//         category: { category },
//     },
// ]


////////////แก้///////////////////////////////////////////
function PostSlide(props){
    const { supabase_for_use: supabase, session, user } = useContext(General);
    const [data, setData] = useState([]);
    console.log(props.id)
    // const [title, setTitle] = useState("")
    // console.log(user?.id)
    useEffect(() => {
        if (props.id) {
            axios.get("http://localhost:3300/posttoprofile?id=" + props.id)
            .then(res => {
                setData(res.data);
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
        } else {
            // ในกรณีที่ props.id เป็นค่าว่างหรือไม่ถูกต้อง
            console.log("props.id is empty or invalid");
            // สามารถดำเนินการอื่น ๆ ที่ต้องการในกรณีนี้
        }
    }, [props.id])

    return (
        <div className="content">
            <div className="main_content">
                {
                    data.map(({ id_post:id, title, category, user: { username }, image_link }, index) => {
                        return (
                            <div className="singleDest" key={index}>
                                <div className="dastImage">
                                    <img src={image_link??img1} alt="" />
                                </div>
                                <div className="destFooter">
                                    {/* <div className="delete"  >
                                        {/* {CheckDelete && <BsFillTrashFill size={25} type='submit' className='icon-delete'onSubmit={data}  onClick={handledelete}/>} */}
                                        {/* <CheckDelete/>
                                    </div> */} 
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/${category}/${id}`}>{title}</Link>
                                        </h4>
                                        <span className="userwrite">
                                            <span className="name"><BiSolidPencil size={20} className="icon_pencil" />
                                                {username}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default PostSlide;