
import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Link} 
export default function Student() {
    const [student,setStudent]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res => setStudent(res.data))
        .catch(err => console.error(err))
    },[])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/" className="btn btn-success">Add+</Link>
            <table className="table">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((item,i) => (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className="btn btn-primary">Update</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
        </div>
      
    </div>
  )
}
