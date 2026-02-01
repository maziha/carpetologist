import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable smooth scroll immediately to prevent fighting with the transition
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';

        // Force scroll to top
        window.scrollTo(0, 0);

        // A second check slightly later to handle async layout shifts or browser restoration
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, 0);

            // Re-enable smooth scroll after the transition is likely done
            document.documentElement.style.scrollBehavior = '';
            document.body.style.scrollBehavior = '';
        }, 150);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
};
