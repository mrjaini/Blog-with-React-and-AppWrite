import React from 'react'
import { Container , LogoutBtn , Logo } from '../index'
import {Link , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import authService from '../../appwrite/Auth'

function Header() {
    const authStatus = useSelector((state) =>{state.auth.status})
    const navigate = useNavigate()

    const navItems = [
        {
        name:'Home',
        slug :'/',
        active: true
        },
        {
        name:'Login',
        slug :'/login',
        active: !authStatus
        },
        {
        name:'Signup',
        slug :'/signup',
        active: !authStatus
        },
        {
        name:'All Posts',
        slug :'/all-posts',
        active: authStatus
        },
        {
        name:'Add Post',
        slug :'/add-post',
        active: authStatus
        },
     ]
    return (
        <header className='py-4 shadow bg-gray-500'>

        </header>
    )
}

export default Header
