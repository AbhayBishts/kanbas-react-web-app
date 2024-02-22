import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill" id="main-course-content">
        <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block left-padding-20 right-padding-20 width-250">
        <CourseStatus />
      </div>
    </div>
  );
}
export default Home;