import React, {useState} from 'react';
import {addDoc ,collection} from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Create_posts.css';
import Navbar2 from '../../navbar2/Navbar2';

const Create_posts = () => {
    const [title,setTitle]=useState("");
    const[textcontent,setTextcontent]=useState("");
    let navigate=useNavigate();

    const postscollectionref=collection(db,"posts");
    const create_post=async (e)=>{
        e.preventDefault();
        await addDoc(postscollectionref,{title:title, textcontent:textcontent, author:{email:auth.currentUser.email, id:auth.currentUser.uid}});
        setTitle("");
        setTextcontent("");
        navigate("/Community");
        console.log("successfully pushed");
    }

  return (
    <div >
        <Navbar2/>
        <div className="back-btn">
        <button> <Link to="/Community" style={{textDecoration: 'none', color: 'black'}}>Back</Link></button>
        </div>
        
        <div className="titles">
            <p className="title">Create Post</p>
        </div>
        <div className="content-area">
            <form action="">
                <div className="content-title">
                    <p className='content-area-title'>Title</p>
                    <input className='content-title-input' type="text" placeholder='Enter the Title...' required onChange={(event)=>{
                        setTitle(event.target.value);
                    }} />
                </div>
                <div className="content-text">
                    <p className='content-area-text'>Text</p>
                    <textarea className="content-text-area" id="" cols="50" rows="6" placeholder='Enter the text here...' required onChange={(event)=>{
                        setTextcontent(event.target.value);
                    }}></textarea>
                </div>
                <div className="submit-btn">
                    <button className="submiting-btn" onClick={create_post}>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Create_posts