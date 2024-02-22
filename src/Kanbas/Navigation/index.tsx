import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaChalkboard, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />     },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />     },
    { label: "Courses",   icon: <FaBook className="fs-2" />              },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" />    },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />             },
    { label: "History",   icon: <FaRegClock className="fs-2" />          },
    { label: "Studio",    icon: <FaChalkboard className="fs-2" />        },
    { label: "Commons",   icon: <FaArrowRight className="fs-2" />        },
    { label: "Help",      icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li id="university-logo-item">
        <Link to="http://northeastern.edu">
          <img src="/images/northeastern.png" className="university-logo" alt="University Logo"/>
        </Link>
      </li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`} id={(link.label.includes("Account") && !pathname.includes(link.label)) ? "account-item" : ""}> 
            {link.icon} {link.label} 
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;