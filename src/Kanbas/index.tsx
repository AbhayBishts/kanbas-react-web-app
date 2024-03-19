import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courseList, setCourseList] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourseList([...courseList, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourseList(courseList.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourseList(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courseList={courseList}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>
            } />
            <Route path="Courses/:courseId/*" element={<Courses courseList={courseList} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;