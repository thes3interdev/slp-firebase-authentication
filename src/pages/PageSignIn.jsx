import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';
import TabTitle from '../utilities/UtilityTabTitle';

const PageSignIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { signin } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setError('');
			setLoading(true);
			await signin(emailRef.current.value, passwordRef.current.value);
			navigate('/');
		} catch {
			setError('Sign in attempt was unsuccessful.');
		}

		setLoading(false);
	}

	TabTitle('Sign In | Firebase Authentication | Superior Software Solutions');

	return (
		<section>
			<div className="mx-auto my-16 p-4 max-w-md bg-white rounded-lg border border-slate-200 shadow-md sm:p-6 lg:p-8 dark:bg-slate-800 dark:border-slate-700">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<h5 className="text-xl font-medium dark:text-white uppercase">Sign in</h5>
					{error && (
						<p className="bg-red-300 text-red-800 text-sm rounded p-2">{error}</p>
					)}
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
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
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
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							ref={passwordRef}
							required
						/>
					</div>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Forgot your password?{'  '}
						<Link
							to="/password-reset"
							className="text-sky-700 hover:underline dark:text-sky-500"
						>
							Reset Password
						</Link>
					</div>
					<button
						disabled={loading}
						type="submit"
						className="uppercase w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
					>
						Sign In
					</button>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Not signed up yet?{'  '}
						<Link
							to="/sign-up"
							className="text-sky-700 hover:underline dark:text-sky-500"
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
