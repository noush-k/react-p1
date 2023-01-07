import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
background: #2596be;
height: 75px;
margin-top: 0;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
display: flex;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 20px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: white;
justify-self: flex-start;
cursor: pointer;
font: "Roboto", sans-serif;
font-size: 1.7rem;
display: flex;
align-items: center;
margin-left: -20px;
font-weight: bold;
text-decoration: none;
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
`

export const NavIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 30px;
color: #fff;
margin-right: -20px;
margin-left: 60px;
margin-bottom: 30px;
`

export const Icon1 = styled.div`
display: block;
margin-right: 30px;
`
export const Icon2 = styled.div`
display: block;
`

export const Icon3 = styled.div`
display: block;
padding-right: 10px;
padding-top: 10px;
`

export const Icon4 = styled.div`
display: block;
padding-right: 10px;
padding-top: 10px;
padding-left: 500px;
color: #fff;
margin-top: -66px;
`

export const NavItem = styled.li`
height: 80px;
margin-left: 420px;
`

export const NavSearch = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
margin-right: 60px;
padding-right: 200px;
height: 100%;
cursor: pointer;

&.active {
    border-bottom: 0px solid #01bf71;
`

export const Profile = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: -50px;
font-color: #fff;
font: "Roboto", sans-serif;
font-size: 1.2rem;
margin-right: -40px;
margin-left: 190px;
padding left: 40px;
margin-bottom: 30px;
`