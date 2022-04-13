import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/ContextAuth';
import TabTitle from '../utilities/UtilityTabTitle';

const PageHome = () => {
	const [error, setError] = useState('');
	const { currentUser, signout } = useAuth();
	const navigate = useNavigate();

	function handleProfileUpdate() {}

	async function handleSignOut() {
		try {
			setError('');
			await signout();
			navigate('/sign-in');
		} catch {
			setError('Sign out attempt was unsuccessful.');
		}
	}

	TabTitle('Home | Firebase Authentication | Superior Software Solutions');

	return (
		<section>
			<div className="mx-auto my-16 max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-slate-800">
				<div className="mt-2">
					<p className="uppercase text-2xl font-bold dark:text-white">
						Firebase Authentication Dashboard
					</p>
					{error && <p className="text-red-500 text-sm text-center">{error}</p>}
					<p className="mt-2 text-slate-600 dark:text-slate-300">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita
						dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
						reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione
						libero!
					</p>
				</div>

				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center">
						<p className="cursor-pointer dark:text-slate-200">
							<span className="font-semibold">Email Address: </span>
							{currentUser.email}
						</p>
					</div>
					<Link
						to="/update-profile"
						onClick={handleProfileUpdate}
						className="uppercase text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"
					>
						Update Profile
					</Link>
					<button
						variant="link"
						onClick={handleSignOut}
						className="uppercase text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
					>
						Sign Out
					</button>
				</div>
			</div>
		</section>
	);
};

export default PageHome;
