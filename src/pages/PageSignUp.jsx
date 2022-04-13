import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';

const PageSignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { signUp } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();

		/** validation checks */
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('Passwords do not match.');
		}

		try {
			setError('');
			setLoading(true);
			await signUp(emailRef.current.value, passwordRef.current.value);
		} catch {
			setError('Account creation failure.');
		}

		setLoading(false);
	}

	return (
		<section>
			<div className="mx-auto my-16 p-4 max-w-md bg-white rounded-lg border border-slate-200 shadow-md sm:p-6 lg:p-8 dark:bg-slate-800 dark:border-slate-700">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<h5 className="text-xl font-medium dark:text-white uppercase">Sign Up</h5>
					{error && <p className="text-red-500 text-sm">{error}</p>}
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
							Password
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
					<div>
						<label
							htmlFor="password-confirm"
							className="block mb-2 text-sm font-medium dark:text-slate-300"
						>
							Confirm Password
						</label>
						<input
							type="password"
							name="password-confirm"
							placeholder="••••••••"
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							ref={passwordConfirmRef}
							required
						/>
					</div>
					<button
						type="submit"
						className="uppercase w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						disabled={loading}
					>
						Sign up
					</button>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Already have an account?{' '}
						<Link
							to="/signin"
							className="text-blue-700 hover:underline dark:text-blue-500"
						>
							Sign In
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default PageSignUp;
