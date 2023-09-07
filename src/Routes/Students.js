import React, { useState} from 'react'
import "../App.css";
import {  Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
function Students() {

  const [data] = useState([
      {name : "John", age : 26, course : "MERN", batch : "October"},
      {name : "Doe", age : 25, course : "MERN", batch : "November"},
      {name : "Biden", age : 26, course : "MERN", batch : "September"},
      {name : "Barar", age : 22, course : "MERN", batch : "September"},
      {name : "Christ", age : 23, course : "MERN", batch : "October"},
      {name : "Elent", age : 24, course : "MERN", batch : "November"},
      {name : "Harshita Sharma", age : 24, course : "MERN", batch : "October"},
  ])
  return (
    <div>
      <div className='studentbutton'>
      <h1>Students Details</h1>
      <button className='button'>Add new student</button>
      </div>

      <table className='table'>
        <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
              <th>Remove</th>
            </tr>
        </thead>

        {data.map((item,index) => {
            return(
            <tbody key={index}>
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.course}</td>
                <td>{item.batch}</td>
                <td>
                  <Link>Edit</Link>
                </td>
                <td>
                <FontAwesomeIcon icon={faTrash} />
                </td>
              </tr>
            </tbody>
              )
        })}

      </table>
    </div>

    
  )
}

export default Students

