import python from "../images/tech/icons8-python-48.png";
import django from "../images/tech/icons8-django-48.png";
import js from "../images/tech/icons8-javascript-48.png";
import jquery from "../images/tech/icons8-jquery-48.png";
import react from "../images/tech/icons8-react-40.png";
import bootstrap from "../images/tech/icons8-bootstrap-48.png";
import postgresql from "../images/tech/icons8-postgresql-48.png";
import html from "../images/tech/icons8-html-5-48.png";
import css from "../images/tech/icons8-css3-48.png";
import shophub from '../images/shophub.png'
import ppoint from '../images/Programmers-Point-ERM.png'
import todo from '../images/todo.png'

let webData = [
    {
      website:'To-DO List',
      link:"https://tasktodo-1.herokuapp.com/",
      image:todo,
      technologies:[bootstrap,react],
      discription:'To do task listing and deleting functionality with using redux to hold the states.',
    },
    {
      website:'E-Commerce',
      link:"http://myshophub.herokuapp.com/",
      image:shophub,
      technologies:[python,css,bootstrap,jquery,python,django,postgresql],
      discription:' Signup using email verification , Change Password , Reset Password using email,Product search bar , Category wise product.filteration,Cart-checkout.',
    },
    {
      website:'Student Management Portal',
      link:"http://ppoint.herokuapp.com/",
      image:ppoint,
      technologies:[python,css,bootstrap,python,django],
      discription:' Signup using email verification , Change Password , Reset Password using email,Product search bar , Category wise product.filteration,Cart-checkout.',
    },
]
export default webData;