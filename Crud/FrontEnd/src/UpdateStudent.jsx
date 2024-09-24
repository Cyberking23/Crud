import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateStudent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams(); // No necesitas pasar un argumento aquí
    const navigate = useNavigate();

    // Para cargar los datos del estudiante actual si es necesario
    useEffect(() => {
        axios.get('http://localhost:8081/update/' + id) // Suponiendo que tengas un endpoint para obtener los detalles
            .then(res => {
                setName(res.data.name);
                setEmail(res.data.email);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control"
                                value={name} // Establece el valor inicial con el estado
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Email</label>
                            <input
                                type="email" // Cambiado el tipo de campo a "email"
                                placeholder="Enter Email"
                                className="form-control"
                                value={email} // Establece el valor inicial con el estado
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
