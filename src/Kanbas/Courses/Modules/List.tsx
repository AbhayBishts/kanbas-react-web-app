import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
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
        <div className="wd-buttons edit-modules">
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </div>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => {
              if (module.lessons) {
                setSelectedModule(module);
              }
            }}>
            <div>
              <span>
                <FaEllipsisV className="me-2" />
                {module.name}
              </span>
              <span className="float-end">
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="modify-module">
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="modify-module">
                  Delete
                </button>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group module-items">
                {module.lessons.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
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