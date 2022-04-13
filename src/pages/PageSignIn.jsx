import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const PageSignIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	return (
		<section>
			<div className="mx-auto my-16 p-4 max-w-md bg-white rounded-lg border border-slate-200 shadow-md sm:p-6 lg:p-8 dark:bg-slate-800 dark:border-slate-700">
				<form className="space-y-6" action="#">
					<h5 className="text-xl font-medium dark:text-white uppercase">Sign in</h5>
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium dark:text-slate-300"
						>
							Your email
						</label>
						<input
							type="email"
							name="email"
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							placeholder="name@email.com"
							ref={emailRef}
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium dark:text-slate-300"
						>
							Your password
						</label>
						<input
							type="password"
							name="password"
							placeholder="••••••••"
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							ref={passwordRef}
							required
						/>
					</div>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Forgot your password?{'  '}
						<Link to="#" className="text-blue-700 hover:underline dark:text-blue-500">
							Reset Password
						</Link>
					</div>
					<button
						type="submit"
						className="uppercase w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Sign Up
					</button>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Not signed up yet?{'  '}
						<Link
							to="/signup"
							className="text-blue-700 hover:underline dark:text-blue-500"
						>
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default PageSignIn;
