import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';
import TabTitle from '../utilities/UtilityTabTitle';

const PageUpdateProfile = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, updateemail, updatepassword } = useAuth();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		/** validation checks */
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			return setError('The passwords do not match.');
		}

		const promises = [];

		setLoading(true);
		setError('');

		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateemail(emailRef.current.value));
		}

		if (passwordRef.current.value) {
			promises.push(updatepassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				navigate('/');
			})
			.catch(() => {
				setError('Profile update was not successful.');
			})
			.finally(() => {
				setLoading(false);
			});
	}

	TabTitle('Update Profile | Firebase Authentication | Superior Software Solutions');

	return (
		<section>
			<div className="mx-auto my-16 p-4 max-w-md bg-white rounded-lg border border-slate-200 shadow-md sm:p-6 lg:p-8 dark:bg-slate-800 dark:border-slate-700">
				<form className="space-y-6" onSubmit={handleSubmit}>
					<h5 className="text-xl font-medium dark:text-white uppercase">
						Update Profile
					</h5>
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
							defaultValue={currentUser.email}
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
							placeholder="Leave blank to keep same password"
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							ref={passwordRef}
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
							placeholder="Leave blank to keep same password"
							className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:text-white"
							ref={passwordConfirmRef}
						/>
					</div>
					<button
						disabled={loading}
						type="submit"
						className="uppercase w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
					>
						Update Profile
					</button>
					<div className="text-sm font-medium text-slate-500 dark:text-slate-300">
						Terminate update process?{' '}
						<Link to="/" className="text-sky-700 hover:underline dark:text-sky-500">
							Cancel
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default PageUpdateProfile;
