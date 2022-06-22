import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useNote } from '../context';

export function useScrollToTop() {
	const { pathname } = useLocation();
    const {isNoteUpdate} = useNote();

	useEffect(() => {
		window.scrollTo(0,0);
	}, [pathname, isNoteUpdate]);
};
