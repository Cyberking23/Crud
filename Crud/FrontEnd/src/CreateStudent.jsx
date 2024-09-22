import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function CreateStudent() {
    const[name,setName]= useState('')
    const [email,setEmail]=useState('')
    const navigate = useNavigate('');

    function handleSubmit(e){
        e.preventDefaul();
        axios.post('http://localhost:8081/create',{name,email})
        .then(res=>{
            console.log(res);
            navigate('/')
        }).catch(err => console.log(err))
    }
  return (
    <div>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control" onChange={e=> setName(e.target.value)} />
                </div>
                <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Name" className="form-control" onChange={e=> setEmail(e.target.value)} />
                </div>
                <button className="btn btn-success">Submit</button>

            </form>
        </div>
      </div>
    </div>
  )
}
