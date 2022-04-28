import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNote } from '../context';

export function useScrollToTop() {
	const { pathname } = useLocation();
    const {isNoteUpdate} = useNote();

	useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	}, [pathname, isNoteUpdate]);
}