import { useRef } from "react";
const Form = ({ signin, onFormSubmit }) => {
    const emailRef = useRef();
    const passRef = useRef();
    // Submit Form Handler Function
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        onFormSubmit(email, password)
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{signin ? "Sign up to your account" : " Sign to your account"}</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit} >

                    {!signin && <div>
                        <label htmlFor="firstName"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            First Name </label>
                        <div className="mt-2">
                            <input id="firstName" name="firstName" type="firstName" minLength={2}  autoComplete="first_name" required className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>}
                    {!signin && <div>
                        <label htmlFor="lastName"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name</label>
                        <div className="mt-2">
                            <input id="lastName" name="lastName" type="lastName" minLength={1} maxLength={3} autoComplete="lastName" required className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>}
                    {/* Emil input  */}
                    <div>
                        <label htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900">
                            Email address</label>
                        <div className="mt-2">
                            <input ref={emailRef} id="email" name="email" type="email" autoComplete="email" required className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1  ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {/* End Email input  */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input ref={passRef} id="password" name="password" minLength={3} maxLength={6} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            className="flex w-full justify-center rounded-md
                          bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                          leading-6 text-white shadow-sm hover:bg-indigo-500 
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-indigo-600"> {signin ? "Sign in" : "Sign up"}</button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    {signin ? 'You are alredy signup? ' : "Do you have an account? "}
                    <a href={signin ? '/Forms/signup' : '/Forms/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">{signin ? "Sign up" : "Signin"}</a>
                </p>
            </div>
        </div>
    )
}

export default Form




