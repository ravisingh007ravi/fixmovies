import Input from '../components/Input'
import { useState } from 'react'

const Auth = () => {

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')




    return (
        <div className="relative h-full w-full bg-[url('/Images/hero.jpg')] bg-no-repeat bg-center bf-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/Images/logo.png" alt="logo" className="h-7" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-2/5 lg:max-w-md rounded-md w-full ">
                        <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
                        <div className='flex flex-col gap-4'>

                            <Input
                                label='UserName'
                                onChange={(e:any) => setUserName(e.target.value)}
                                id="email"
                                type="UserName"
                                value={userName}
                            />

                            <Input
                                label='Email'
                                onChange={(e:any) => setEmail(e.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />

                            <Input
                                label='Password'
                                onChange={(e:any) => setEmail(e.target.value)}
                                id="email"
                                type="Password"
                                value={email}
                            />

                        </div>
                        
                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 trasition'>
                            Login
                        </button >
                        <p className="text-neutral-500" mt-12>
                            First time using FIXMOVIES ?
                            <span className='text-white ml-1 hover:underline cursor-pointer'>
                                Create account
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth
