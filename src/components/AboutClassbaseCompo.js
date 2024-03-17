import React, { Component } from 'react';
import { X, Insta, Git, Portfolio } from '../utils/constant';
import { GitHub, Instagram, Mail, Twitter, User } from 'react-feather';


class AboutClassbaseCompo extends React.Component {
    constructor(props) {
        super(props);
        this.email = 'mauryavipin30@gmail.com'

        this.state = {
            
            userInfo: {
                name: "UserName",
                mailId: "@gmail.com",
                bio: ""
            }
        }
        const handleClick = () =>{
            window.location.href = `mailto:${this.email}`;
        }

        console.log(this.state);
    }; 

    async componentDidMount() {
       
        const data = await fetch("https://api.github.com/users/vipin221");
        const json = await data.json();
        console.log(json);
       
        this.setState({
            userInfo: json
        }
        )  
    }
    
    render() {
        
        return (
            <div  className='flex w-screen h-screen justify-evenly items-center bg-blue-200 '>
               
                <div className='w-4/12 border flex flex-col gap-2  p-4 rounded-lg bg-white shadow-xl shadow-slate-400 bg-opacity-50'>
                    <h4 className='text-xl font-semibold'>{(this.state.userInfo.name)?.toUpperCase()} <span className='text-md text-gray-500 '> ({this.state.userInfo.login})</span></h4>
                    <h5 className='font-serif'>{this.state.userInfo.bio}</h5>
                    <div className='flex p-2 gap-10'>
                        <a className=' p-2 rounded-full bg-blue-600 text-white  shadow-blue-300 shadow-inner cursor-pointer ' href={X} > <Twitter /> </a>
                        <a className=' p-2 rounded-full bg-blue-600 text-white  shadow-blue-300 shadow-inner cursor-pointer ' href="#" onClick={this.handleClick}> <Mail/> </a>
                        <a className=' p-2 rounded-full bg-blue-600 text-white  shadow-blue-300 shadow-inner cursor-pointer ' href={Insta}> <Instagram /> </a>
                        <a className=' p-2 rounded-full bg-blue-600 text-white  shadow-blue-300 shadow-inner cursor-pointer ' href={Git} > <GitHub/> </a>
                        <a className=' p-2 rounded-full bg-blue-600 text-white  shadow-blue-300 shadow-inner cursor-pointer ' href={Portfolio} > <User/> </a>
                        

                    </div>
                </div>
                <div className='w-96 h-96 rounded-full shadow-xl shadow-slate-400'>
                    <img
                        alt='user Image'
                        src='https://avatars.githubusercontent.com/u/115896995?v=4'
                        className='w-96 h-96 rounded-full shadow-xl  shadow-slate-400'
                    />

                </div>
               
               
            </div>
        );
    }

}
export default AboutClassbaseCompo;