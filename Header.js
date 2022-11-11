import {Link} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import '../../App.css';

export default function Header(){

    var userid = localStorage.getItem('userid');
    let [userdata,setUserdata] = useState([]);

    useEffect(()=>{
        load_user();
    },[]);

    const load_user = () => {
        var datastring = {userid:userid};
        var config = {headers : {"enctype":"multipart/form-data"}};
        axios.post('http://localhost:3004/userdetails',datastring,config)
        .then(function(res){
            setUserdata(res.data.status);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    return(
        <>
        <div className="row borders">
            <div className="col-lg-4">
                <label className="header_label"> Welcome </label>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                <ul className="list_data">
                    <li><span>{userdata}</span></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}