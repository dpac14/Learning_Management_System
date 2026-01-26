
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard1 from "./Dashboard1"
import User1 from "./User1";
import Course1 from "./Couser1";
import LiveSession1 from "./LiveSession1";
import ContentDow1 from "./ContentDow1";
import Certifi1 from "./Certifi1";
import Messages1 from "./Messages1";
import Report1 from "./Report1";
import Setting1 from "./Setting1";
import Sidebar1 from "../Sidebar1";
import Header1 from "../Header1";


///
function Main_admin1() {
  return (
    <BrowserRouter>
       <Sidebar1 />
      <Header1 />
      <Routes>
        <Route path="/" element={<Dashboard1 />} />
        <Route path="/users" element={<User1 />} />
        <Route path="/courses" element={<Course1 />} />
        <Route path="/live" element={<LiveSession1 />} />
        <Route path="/content" element={<ContentDow1 />} />
        <Route path="/certificates" element={<Certifi1 />} />
        <Route path="/messages" element={<Messages1 />} />
        <Route path="/reports" element={<Report1 />} />
        <Route path="/settings" element={<Setting1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main_admin1;
