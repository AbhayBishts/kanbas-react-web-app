import React from "react";
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

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
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
                    Go </Link>
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