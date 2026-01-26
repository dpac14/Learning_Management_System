
import React from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import HomeST from './pages/student/HomeST';
import CoursesList from './pages/student/CoursesList';
import Coursedetails from './pages/student/Coursedetails';
import MyEnrollment from './pages/student/MyEnrollment';
import Player from './pages/student/Player';
import Loading from './Components/Student/Loading';
import Trainer from './pages/trainer/Trainer';
import DashBord from './pages/trainer/DashBord';
import AddCourses from './pages/trainer/AddCourses';
import MyCourses from './pages/trainer/MyCourses';
import StudentEnroll from './pages/trainer/StudentEnroll';
import Navbar_2 from './Components/Student/Navbar_2';
const App = () => {

  const isEducatorRout = useMatch('/trainer/*')
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRout &&  <Navbar_2 />}
     
      <Routes>
        <Route path='/' element={<HomeST />} />
        <Route path='/course-list' element={<CoursesList />} />
        <Route path='/course-list/:input' element={<CoursesList />} />
        <Route path='/course/:id' element={<Coursedetails />} />
        <Route path='/my-enrollments' element={< MyEnrollment />} />
        <Route path='/player/:courseId' element={< Player />} />
        <Route path='/loading/:path' element={< Loading />} />
        <Route path='/trainer' element={<Trainer />} >
          <Route path='trainer' element={<DashBord />} />
          <Route path='add-course' element={<AddCourses />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentEnroll />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
