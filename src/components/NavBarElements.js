import stylied from  'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



export const Nav = styled.Nav `
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc ((100w - 1000px) / 2);
z-index: 10;
`