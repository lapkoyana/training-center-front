import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = () => {
    return <div className={style.navbar}>
        <NavLink className={style.link} to='/lections'>Лекции</NavLink>
        <NavLink className={style.link} to='/lections/{lessonId}/user/{user}/answers'>Проверить ответы</NavLink>
    </div>
}

export default Navbar;