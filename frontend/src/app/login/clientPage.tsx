'use client';

import { useState } from 'react';
import '../../../public/support/css/contact-us.css';
import { apiURL } from '../../../public/support/js/webState.js';

export default function LoginClient() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const result = await fetch(`${apiURL}auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
				credentials: 'include',
			});

			const data = await result.json();

			if (!result.ok) {
				setError(data.message);
				return;
			}

			return data;
		} catch (error) {
			setError(`Something went wrong. Please try again later...: ${error}`);
		}
	};

	return (
		<div className="pageContent">
			<div className="page-container pl-12 pr-12">
				<main className="content-wrap">
					<div className="loginBox w-full md:w-1/3">
						<h1
							className=" text-2xl"
							style={{
								color: 'var(--darkblue)',
							}}
						>
							<b>Admin Login</b>
						</h1>
						<br />
						<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							<form onSubmit={handleLogin} className="col-span-5">
								<div className="sm:col-span-6 mb-8">
									<label
										htmlFor="username"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Username
									</label>
									<div className="mt-2">
										<input
											id="username"
											type="text"
											name="username"
											autoComplete="username"
											value={username}
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											onChange={(e) => setUsername(e.target.value)}
										/>
									</div>
								</div>

								<div className="sm:col-span-6">
									<label
										htmlFor="password"
										className="block text-sm/6 font-medium text-gray-900"
									>
										Password
									</label>
									<div className="mt-2">
										<input
											id="password"
											type="password"
											name="password"
											autoComplete="password"
											value={password}
											className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</div>

								<button type="submit" className="contactSubmit mb-8">
									Submit
								</button>
								{error && <p style={{ color: 'red' }}>{error}</p>}
							</form>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}
