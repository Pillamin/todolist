import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TeacherLogin from './pages/TeacherLogin';
import StudentSignup from './pages/StudentSignup';
import TodoList from './pages/TodoList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home (Todo List)</Link></li>
            <li><Link to="/teacher/login">Teacher Login</Link></li>
            <li><Link to="/student/signup">Student Signup</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/teacher/login" element={<TeacherLogin />} />
          <Route path="/student/signup" element={<StudentSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
