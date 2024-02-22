import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="margin-right-15" id="courseHome">
      <div className="wd-buttons">
          <button type="button">Collapse All</button>
          <button type="button">View Progress</button>
          <select className="fit-content">
              <option selected>Publish All</option>
          </select>
          <button type="button" id="module-button"><FaPlus /> Module</button>
          <button type="button">
            <FaEllipsisV />
          </button>
      </div>
      <hr className="clear"/>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <span>
                <FaEllipsisV className="me-2" />
                {module.name}
              </span>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group module-items">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <span>
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                    </span>
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;