import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css";
import { FaAngleDown, FaAngleRight, FaArrowRight, FaBars, FaBook, FaBullhorn, FaBullseye, FaCalendar, FaChalkboard, FaCircle, FaClipboard, FaClock, FaCog, FaComments, FaEyeSlash, FaFileAlt, FaFolder, FaGlasses, FaHome, FaInbox, FaLinode, FaNode, FaObjectGroup, FaPager, FaPen, FaPlug, FaPlus, FaQuestionCircle, FaRocket, FaTachometerAlt, FaUser, FaXing } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";

function Courses({ courseList }: { courseList: any[]; }) {
  const { courseId } = useParams();
  const course = courseList.find((course) => course._id === courseId);
  const location = useLocation();
  const locationArray = location.pathname.split('/')
  const currentModule = locationArray[locationArray.length - 1]

  const [kanbasNavCollapse, setKanbasNavCollapse] = useState(true);
  const toggleKanbasNavCollapse = () => {
    if (kanbasNavCollapse === true) {
      setCourseNavCollapse(true);
    }
    setKanbasNavCollapse(!kanbasNavCollapse);
  };

  const [courseNavCollapse, setCourseNavCollapse] = useState(true);
  const toggleCourseNavCollapse = () => {
    if (courseNavCollapse === true) {
      setKanbasNavCollapse(true);
    }
    setCourseNavCollapse(!courseNavCollapse);
  };

  const miniCourseMenu = [
    {label: "Home", icon: <FaHome />, visible: true},
    {label: "Modules", icon: <FaLinode />, visible: true},
    {label: "Piazza", icon: <FaPlug />, visible: true},
    {label: "Zoom Meetings", icon: <FaPlug />, visible: true},
    {label: "Assignments", icon: <FaPen />, visible: true},
    {label: "Quizzes", icon: <FaRocket />, visible: true},
    {label: "Grades", icon: <FaBook />, visible: true},
    {label: "People", icon: <FaObjectGroup />, visible: true},
    {label: "Panopto Video", icon: <FaPlug />, visible: true},
    {label: "Discussions", icon: <FaComments />, visible: false},
    {label: "Announcements", icon: <FaBullhorn />, visible: false},
    {label: "Pages", icon: <FaPager />, visible: false},
    {label: "Files", icon: <FaFolder />, visible: false},
    {label: "Rubrics", icon: <FaClipboard />, visible: false},
    {label: "Outcomes", icon: <FaBullseye />, visible: false},
    {label: "Collaborations", icon: <FaCircle />, visible: false},
    {label: "Syllabus", icon: <FaFileAlt />, visible: false},
    {label: "Settings", icon: <FaCog />, visible: true},
  ]

  const miniKanbasSidebar = [
    {label: "Dashboard", icon: <FaTachometerAlt className="margin-bottom-4"/>, extended: false},
    {label: "Account", icon: <FaUser className="margin-bottom-4"/>, extended: true},
    {label: "Courses", icon: <FaBook className="margin-bottom-4"/>, extended: true},
    {label: "Calendar", icon: <FaCalendar className="margin-bottom-4"/>, extended: false},
    {label: "Inbox", icon: <FaInbox className="margin-bottom-4"/>, extended: false},
    {label: "Studio", icon: <FaChalkboard className="margin-bottom-4"/>, extended: false},
    {label: "Commons", icon: <FaArrowRight className="margin-bottom-4"/>, extended: false},
    {label: "History", icon: <FaClock className="margin-bottom-4"/>, extended: true},
    {label: "Help", icon: <FaQuestionCircle className="margin-bottom-4"/>, extended: true}
  ]

  return (
    <div>
      <div className="d-none d-md-block">
        <div className="breadcrumb-header">
          <span className="flex-buttons">
              <button className="center-flex menu-button">
                <HiMiniBars3 />
              </button>
              <span>
                  <a href={`/#/Kanbas/Courses/${course?._id}`} className="url">{course?.number}</a>
                  <FaAngleRight />
                  {currentModule}
              </span>
          </span>
          <span>
            <button type="button" className="student-view-button">
              <span>
                <FaGlasses /> Student View
              </span>
            </button>
          </span>
        </div>
        <hr className="hr-edges"/>
      </div>
      <div className="d-flex">
        <div className="d-none d-md-block">
        <CourseNavigation />
        </div>
        <div className="flex-fill" id="main-course-content">
          <div>
            {/* Hidden Nav Bar for Smaller Screens */}
            <header className="d-none d-sm-block d-md-none">
              <div className="new-nav">
                <button className="left-padding-20" 
                  onClick={toggleKanbasNavCollapse}
                  aria-expanded="false" 
                  aria-controls="kanbasNav courseHome"
                >
                  <FaBars />
                </button>
                <a href="/Kanbas/Courses/Home/screen.html" role="button" className="breadcrumb">
                  <div>{course?.number}.{course?._id}</div>
                  <div>Modules</div>
                </a>
                <span className="right-padding-20">
                  <a href="#" role="button">
                    <button type="button"><FaGlasses /></button>
                  </a>
                  <button className="left-padding-20" 
                    onClick={toggleCourseNavCollapse}
                    aria-expanded="false" 
                    aria-controls="courseNav courseHome"
                  >
                    <FaAngleDown />
                  </button>
                </span>
              </div>
            </header>
            {/* Mini menu for Kanbas Nav */}
            <div className={`collapse multi-collapse mini-kanbas-nav d-md-none ${kanbasNavCollapse ? '' : 'show'}`} id="kanbasNav">
                {/* X button */}
                <div className="flex-justified">
                  <div className="flex-right-align">
                    <button className="left-padding-20 close-kanbas"
                      onClick={toggleKanbasNavCollapse}
                      aria-expanded="false" 
                      aria-controls="kanbasNav courseHome"
                    >
                      X
                    </button>
                  </div>
                </div>
                {/* Menu Items */}
                {miniKanbasSidebar.map((link) => (
                  <div className="flex-justified">
                    <a href={`#/Kanbas/${link.label}`}>{link.icon} {link.label}</a>
                    {link.extended && <FaAngleRight />}
                  </div>
                ))}
            </div>
            <div className={`collapse multi-collapse2 flex-container small-line-height d-md-none ${courseNavCollapse ? '' : 'show'}`} id="courseNav">
              {miniCourseMenu.map((link) => (
                <a href={`#/Kanbas/Courses/${course?._id}/${link.label}`}>
                  {link.icon} {link.label} {!link.visible && <FaEyeSlash />}
                </a>
              ))}
            </div>
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;