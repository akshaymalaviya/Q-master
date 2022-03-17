import React from 'react';
// import Form from './forms/Form'
// import Posts from './posts/Posts'
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signUp';
import Footer from './components/footer';
import QuizQueue from './components/quizQueue';
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/quizQueue" element={<QuizQueue />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
