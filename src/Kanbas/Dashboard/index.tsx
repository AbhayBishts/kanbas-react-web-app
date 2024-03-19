import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css";

function parseDate(date: String) {
    const dateParts = date.split('-').map(part => parseInt(part, 10));
    let dateString = ""

    if (dateParts[1] >= 1 && dateParts[1] <= 4) {
        dateString = "Spring"
    } else if (dateParts[1] >= 5 && dateParts[1] <= 8) {
        dateString = "Summer"
    } else if (dateParts[1] >= 9 && dateParts[1] <= 12) {
        dateString = "Fall"
    }

    dateString += " " + dateParts[0] + " Semester"

    return dateString
}

function Dashboard(
  { courseList, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courseList: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; })
  {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course Details</h5>
      <div className="course-details-form">
        <input value={course.name} className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control" 
          onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date" 
          onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date" 
          onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button onClick={addNewCourse} className="btn btn-primary">
          Add
        </button>
        <button onClick={updateCourse} className="btn btn-primary">
          Update
        </button> 
      </div> <hr />
      <h2>Published Courses ({courseList.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courseList.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top course-banner"
                     style={{ height: 150 }} alt="course"/>
                <div className="card-body">
                  <Link className="card-title course-name" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    <p className="card-text course-details">{`${course.number}.${course._id}`}</p>
                    <p className="card-text course-details course-term">{parseDate(course.startDate)}</p>
                  </Link>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go 
                  </Link>
                  <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }} className="btn btn-primary middle-button">
                    Edit
                  </button>
                  <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} className="btn btn-primary">
                      Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;