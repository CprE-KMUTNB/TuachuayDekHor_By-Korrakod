import React,{useState,useContext,useEffect} from 'react'
import './CheckDelete.scoped.css'
import { useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsFillTrashFill,BsXLg} from "react-icons/bs";
import axios from 'axios';
import { General } from '../App';

function CheckDelete(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams();
  const navigate = useNavigate();
  const { supabase_for_use: supabase, session, user } = useContext(General);
  const handledelete = () => {
  // const [data,setData] = useState([]);
    axios.delete("http://localhost:3300/deletepost?id_post=" + id)
    .then(res => {
      navigate(`/profile/${user?.user_metadata.username}`)
    })
    .catch((err) => {
        alert(err)
    })
  }

  

  return (
    <>
      <BsFillTrashFill size={25} onClick={handleShow}/>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header className='modal-header'closeButton> */}
        <Modal.Header className='modal-header'>
            <h1 className='text-wraning'>Warning!</h1>
            <BsXLg size={25} id="icon-close" nClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <p className='text-delete'>Confirm Delete?</p>
          </Modal.Body>
        <div className='btn_blog'>
          <button className='Close_btn' onClick={handleClose}>
            Close
          </button>
          <button className='Delete_btn'onClick={handledelete}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default CheckDelete;