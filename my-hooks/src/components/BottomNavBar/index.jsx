import React from 'react'
import 'reactjs-bottom-navigation/dist/index.css'
import { IoIosHome, IoMdSettings, IoMdPower, IoIosSchool, IoMdNotifications, IoMdPerson } from "react-icons/io";
import {Link, useLocation} from 'react-router-dom';
import styles from './styles';


let userType = 'Admin';

function BottomNavBarAdmin()
{
  let location = useLocation();
  return (
    <div style={styles.bottomNav} >
      <Link to="/environmentsAdmin" style={styles.item}>
        <IoIosHome style={location?.pathname.includes('environment')  ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname.includes('environment')   ? styles.itemLabelActive : styles.itemLabel}>Ambientes</h1>
      </Link>
      <Link to="/subjectsadmin" style={styles.item}>
        <IoIosSchool style={location?.pathname.includes('subject') ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname.includes('subject') ? styles.itemLabelActive : styles.itemLabel}>Disciplinas</h1>
      </Link>
      <Link to="/users" style={styles.item}>
        <IoMdPerson style={location?.pathname === '/users' ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname === '/users' ? styles.itemLabelActive : styles.itemLabel}>Usuários</h1>
      </Link>
      <Link to="/settings" style={styles.item}>
        <IoMdSettings style={location?.pathname === '/settings' ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname === '/settings' ? styles.itemLabelActive : styles.itemLabel}>Configurações</h1>
      </Link>
    </div>
  )
}

function BottomNavBarTeacher() {
  let location = useLocation();
  return (
    <div style={styles.bottomNav} >
      <Link to="/environments" style={styles.item}>
        <IoIosHome style={location?.pathname.includes('environment')  ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname.includes('environment')   ? styles.itemLabelActive : styles.itemLabel}>Ambientes</h1>
      </Link>
      <Link to="/subjects" style={styles.item}>
        <IoIosSchool style={location?.pathname.includes('subject') ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname.includes('subject') ? styles.itemLabelActive : styles.itemLabel}>Disciplinas</h1>
      </Link>
      <Link to="/solicitations" style={styles.item}>
        <IoMdNotifications style={location?.pathname === '/solicitations' ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname === '/solicitations' ? styles.itemLabelActive : styles.itemLabel}>Solicitações</h1>
      </Link>
      <Link to="/settings" style={styles.item}>
        <IoMdSettings style={location?.pathname === '/settings' ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname === '/settings' ? styles.itemLabelActive : styles.itemLabel}>Configurações</h1>
      </Link>
    </div>
  )
}

function BottomNavBarStudent() {
  let location = useLocation();
  return (
    <div style={styles.bottomNav} >
      <Link to="/environments" style={styles.item}>
        <IoIosHome style={location?.pathname.includes('environment')   ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname.includes('environment')   ? styles.itemLabelActive : styles.itemLabel}>Ambientes</h1>
      </Link>
      <Link to="/subjects" style={styles.item}>
        <IoMdSettings style={location?.pathname === '/settings' ? styles.iconActive : styles.icon} />
        <h1 style={location?.pathname === '/settings' ? styles.itemLabelActive : styles.itemLabel}>Configurações</h1>
      </Link>
      <Link to="/" style={styles.item}>
        <IoMdPower style={styles.icon} />
        <h1 style={styles.itemLabel}>Sair</h1>
      </Link>
    </div>
  )
}

function BottomNavBar() {
  let bottomBar;
  switch(userType){
    case 'Teacher':
      bottomBar =  <BottomNavBarTeacher></BottomNavBarTeacher>;
      break
    case 'Admin':
      bottomBar =  <BottomNavBarAdmin></BottomNavBarAdmin>;
      break
    default:
      bottomBar = <BottomNavBarStudent></BottomNavBarStudent>;
  }
  return bottomBar;
}


export default BottomNavBar;