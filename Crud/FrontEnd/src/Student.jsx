
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function Student() {
    const [student,setStudent]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res => setStudent(res.data))
        .catch(err => console.error(err))
    },[])

        const handleDelete  = async (id)=>{
            try{
                await axios.delete('http://localhost:8081/student/'+id)
                window.location.reload()
            }catch(err){
                console.log(err)
            }
        }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to = "/create" className="btn btn-success">Add+</Link>
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
                                    <Link to={`update/${item.id}`} className="btn btn-primary">Update</Link>
                                    <button className="btn btn-danger" onClick= {e => handleDelete(item.id)}>Delete</button>
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
