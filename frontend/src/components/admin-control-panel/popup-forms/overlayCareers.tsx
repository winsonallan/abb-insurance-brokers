/** biome-ignore-all lint/suspicious/noExplicitAny: False Positive */
'use client';

import {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import TinyMCEEditor from '@/components/tinyMCEEditor';

export default function OverlayCareers({
	state,
	stateFunction,
}: {
	state: boolean;
	stateFunction: Dispatch<SetStateAction<boolean>>;
}) {
	const editorRefKR = useRef<any>(null);
	const editorRefKRID = useRef<any>(null);
	const editorRefReqEN = useRef<any>(null);
	const editorRefReqID = useRef<any>(null);

	return (
		<div
			className={`${state ? 'absolute' : 'hidden'} bg-white w-full lg:w-1/2 rounded-md border border-2 m-auto px-4 py-2 font-bold overflow-y-auto`}
			style={{
				borderColor: 'var(--lightskyblue)',
				top: '40px',
				right: '1rem',
				color: 'var(--foreground)',
				maxHeight: '600px',
			}}
		>
			<div className="p-4">
				<form action="" id="addJobForm">
					<div className="cancelButton flex justify-end">
						<button
							style={{
								color: 'darkred',
							}}
							className="w-full text-right font-bold cursor-pointer"
							type="button"
							onClick={() => {
								stateFunction(false);
							}}
						>
							<span
								style={{ border: '2px solid darkred', borderRadius: '5px' }}
								className="px-2 py-1"
							>
								Cancel&nbsp;<i className="fa-solid fa-x"></i>
							</span>
						</button>
					</div>
					{/* Job Title */}
					<div className="flex" style={{ alignItems: 'center' }}>
						Title
						<input
							type="text"
							name=""
							id=""
							className="p-1 ml-5 mb-2"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
						/>
					</div>
					{/* Department */}
					<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
						Department
						<select
							name=""
							id=""
							className="p-1 ml-5 mb-2"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
								alignContent: 'center',
								alignItems: 'center',
							}}
						>
							<option value="">IT Department</option>
							<option value="">Marketing Department</option>
						</select>
					</div>
					{/* Job Type */}
					<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
						Job Type
						<select
							name=""
							id=""
							className="p-1 ml-5 mb-2"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
								alignContent: 'center',
								alignItems: 'center',
							}}
							defaultValue="Full Time"
						>
							<option value="">Internship</option>
							<option value="">Contract</option>
							<option value="">Part-Time</option>
							<option value="">Full Time</option>
						</select>
					</div>
					{/* Location */}
					<div className="flex mt-2 mb-2" style={{ alignItems: 'center' }}>
						Location
						<select
							name=""
							id=""
							className="p-1 ml-5 mb-2"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
								alignContent: 'center',
								alignItems: 'center',
							}}
							defaultValue="On Site"
						>
							<option value="">On Site</option>
							<option value="">Hybrid</option>
							<option value="">Remote</option>
						</select>
					</div>
					{/* Email */}
					<div className="flex" style={{ alignItems: 'center' }}>
						Email
						<input
							type="email"
							name=""
							id=""
							className="p-1 ml-5 mb-2"
							style={{
								border: '2px solid var(--lightskyblue)',
								borderRadius: '5px',
							}}
						/>
					</div>
					{/* Key Responsibilities - EN */}
					<div className="flex flex-col mt-2 mb-4">
						Key Responsibilities (EN)
						<TinyMCEEditor ref={editorRefKR} />
					</div>
					{/* Key Responsibilities - ID */}
					<div className="flex flex-col mt-2 mb-4">
						Key Responsibilities (ID)
						<TinyMCEEditor ref={editorRefKRID} />
					</div>
					{/* Requirements - EN */}
					<div className="flex flex-col mt-2 mb-4">
						Requirements (EN)
						<TinyMCEEditor ref={editorRefReqEN} />
					</div>
					{/* Requirements - ID */}
					<div className="flex flex-col mt-2 mb-4">
						Requirements (ID)
						<TinyMCEEditor ref={editorRefReqID} />
					</div>
					<button
						type="submit"
						className="font-bold p-2 cursor-pointer m-auto"
						style={{
							backgroundColor: 'var(--darkblue)',
							color: 'white',
							borderRadius: '5px',
						}}
					>
						Publish Job Opening
					</button>
				</form>
			</div>
		</div>
	);
}
