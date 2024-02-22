import React, { useState } from "react";
import { FaAngleDown, FaCheckCircle, FaEllipsisV, FaList, FaNotesMedical, FaPagelines, FaPlus, FaPlusCircle, FaShoppingBasket } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../Home/index.css";
import "./index.css";
import { Collapse } from 'react-bootstrap';
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);

  const [open, setOpen] = useState(true);

  const toggleCollapse = () => {
    setOpen(!open);
  };
  
  return (
    <>
      <div className="wd-buttons assignment-buttons">
        <input id="student-names" placeholder="Search for Assignments" className="assignment-search"/>
        <button type="button"><FaPlus /> Group</button>
        <button type="button" id="assignment-button"><FaPlus /> Assignment</button>
        <select id="select-assignment-global-settings">
            <option value="EDIT-ASSIGNMENT-DATES">Edit Assignment Dates</option>
        </select>
      </div>
      <hr className="clear"/>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div 
            onClick={toggleCollapse}
            aria-controls="collapse-example"
            aria-expanded={open}
          >
            <span><FaEllipsisV className="me-2" /><FaAngleDown /> ASSIGNMENTS</span>
            <span className="float-end">
              <span className="grade-percent">
                <span>40% of Total</span>
              </span>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <Collapse in={open}>
            <ul className="list-group" id="collapse-example">
              {assignmentList.map((assignment) => (
                <li className="list-group-item flex-horizontal">
                  <span>
                    <FaEllipsisV className="me-2" />
                    <FaNotesMedical className="green"/>
                  </span> 
                  <span className="flex-vertical">
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <span>
                      <button className="multiple-modules">Multiple Modules</button> | Due {assignment.due} | {assignment.score}pts
                    </span>
                  </span>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                </li>))}
            </ul>
          </Collapse>
        </li>
      </ul>
    </>
);}
export default Assignments;