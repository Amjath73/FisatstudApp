import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, setChange] = useState([])
    const fetchData = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                console.log(response.data)
                setChange(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <NaviBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    {/* <th scope="col">id</th> */}
                                    <th scope="col">name</th>
                                    <th scope="col">rollNo</th>
                                    <th scope="col">admNo</th>
                                    <th scope="col">college</th>
{/*                                     
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {data.map(
                                    (value, index) => {
                                        return <tr>
                                            {/* <th scope="row">{value._id}</th> */}
                                            <td>{value.name}</td>
                                            <td>{value.rollNo}</td>
                                            <td>{value.admNo}</td>
                                            <td>{value.college}</td>
                                            {/* <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td> */}
                                        </tr>
                                    }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll
