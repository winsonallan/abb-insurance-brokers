'use client';
import { type Dispatch, type SetStateAction, useState } from 'react';

interface newsSmallBoxProps {
	title: string;
	status: string;
	id: number;
	pickedArticle: number;
	setPickedArticle: Dispatch<SetStateAction<number>>;
}

export default function NewsItem({
	title,
	status,
	id,
	pickedArticle,
	setPickedArticle,
}: newsSmallBoxProps) {
	return (
		<button
			className={
				pickedArticle === id ? 'border-2 border-solid border-(--darkblue)' : ''
			}
			style={{
				borderRadius: '.5rem',
				background: 'var(--superlightblue)',
				color: 'var(--foreground)',
				cursor: 'pointer',
			}}
			type="button"
			onClick={() => {
				setPickedArticle(id);
			}}
		>
			<div
				className="mt-4 ml-4 mb-2 font-bold w-[80px] p-1 text-center"
				style={{
					fontSize: '.8rem',
					backgroundColor: 'var(--lighterskyblue)',
					color: 'var(--darkblue)',
					borderRadius: '5px',
				}}
			>
				{status}
			</div>
			<div className="pt-2 pb-4 font-bold text-center w-full">
				<span style={{ whiteSpace: 'wrap' }}>{title}</span>
			</div>
		</button>
	);
}
