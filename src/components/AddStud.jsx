import React, { useState } from 'react'
import NaviBar from './NaviBar'

const AddStud = () => {
    const[data,setData]=useState(
        {
            "id":"",
            "firstname":"",
            "lastname":"",
            "college":"",
            "dob":"",
            "course":"",
            "mobile":"",
            "email":"",
            "address":""
        }
    )

    const inputHandler=(event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }

  return (
    <div>
        <NaviBar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">firstname</label>
                    <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">lastname</label>
                    <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">college</label>
                    <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">date of birth</label>
                    <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">course</label>
                    <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">mobile</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">address</label>
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddStud
