import { FaArrowRight, FaBan, FaBell, FaBullhorn, FaCalendar, FaCheckCircle, FaCrosshairs, FaExclamationCircle, FaFileImport, FaRegChartBar } from "react-icons/fa";
import { todo, calendarevents, courses } from "../../Database";
import { useParams } from "react-router";

function CourseStatus() {
    const { courseId } = useParams();
    const todoList = todo.filter((todo) => todo._id === courseId);
    const calendarList = calendarevents.filter((event) => event._id === courseId);
    const courseNumber = courses.filter((course) => course._id === courseId)[0].number;

    return (
    <>
        <h6 className="top-padding-20">Course Status</h6>
        <div className="flex-buttons min-width-35">
            <button type="button" className="button-style" id="unpublish-course"><FaBan /> Unpublish</button>
            <button type="button" className="button-style" id="publish-course"><FaCheckCircle /> Published</button>
        </div>
        <br/>
        <span className="course-sidebar">
            <button type="button" className="button-style"><FaFileImport /> Import Existing Content</button><br/>
            <button type="button" className="button-style"><FaArrowRight /> Import From Commons</button><br/>
            <button type="button" className="button-style"><FaCrosshairs /> Choose Home Page</button><br/>
            <button type="button" className="button-style"><FaRegChartBar /> View Course Stream</button><br/>
            <button type="button" className="button-style"><FaBullhorn /> New Announcement</button><br/>
            <button type="button" className="button-style"><FaRegChartBar /> New Analytics</button><br/>
            <button type="button" className="button-style"><FaBell /> View Course Notifications</button><br/>
        </span>
        <div className="flex-justified top-padding-20">
            <h6><b>To Do</b></h6>
        </div>
        <hr className="no-margin"/>
        <br/>
        <ul className="list-group">
            {todoList.map((todo) => (
                <div className="flex-calendar">
                    <FaExclamationCircle className="course-status-icon url"/>
                    <a className="calendar-event url" href="">
                        <p>{todo.name}</p>
                        <p className="gray">{todo.desc}</p>
                    </a>
                    <button type="button" className="dismiss-todo">
                        X
                    </button>
                </div>
            ))}
        </ul>
        <div className="flex-justified top-padding-20">
            <h6><b>Coming Up</b></h6>
            <span className="margin-bottom">
                <a href="#" className="url small-text"><FaCalendar className="margin-bottom-3"/> View Calendar</a>
            </span>
        </div>
        <hr className="no-margin"/>
        <br/>
        <ul className="list-group">
            {calendarList.map((event) => (
                <div className="flex-calendar">
                    <FaCalendar className="course-status-icon"/>
                    <a className="calendar-event url" href="">
                        <p>{event.type}</p>
                        <p className="gray">{courseNumber}</p>
                        <p className="gray">{event.date}</p>
                    </a>
                </div>
            ))}
        </ul>
        <br/>
        <a href="#" className="url small-text">12 more in the next week...</a>
    </>
    )
}
export default CourseStatus;