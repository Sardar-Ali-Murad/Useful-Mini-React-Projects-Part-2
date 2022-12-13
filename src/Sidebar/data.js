import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome style={{fontSize:"30px",marginRight:"20px"}}/>,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends  style={{fontSize:"30px",marginRight:"20px"}}/>,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen style={{fontSize:"30px",marginRight:"20px"}}/>,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt style={{fontSize:"30px",marginRight:"20px"}} />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms style={{fontSize:"30px",marginRight:"20px"}}/>,
  },
];


export default links