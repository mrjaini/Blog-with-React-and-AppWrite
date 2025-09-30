import React , {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import authService from '../appwrite/Auth'
import {Login as authLogin, login} from '../store/authSlice'
import {Button , Input , Logo} from './index'
function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    const [error , SetError] = useState("")

    const Signup = async(data) =>{
        SetError("")
        try {
            const userData =  await authService.createAccount(data)
            if(userData)
            {
                const currentUser = await authService.getCurrent()
                if(currentUser)dispatch(login(currentUser));
                navigate("/")
            }
        } catch (error) {
            SetError(error.message)
        }
    }
    return (
        <div>

        </div>
    )
}

export default SignUp
