import { useEffect, useState } from "react";
export const useOnlineStatus = (): boolean => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
        const handleOnline = () => {
            console.log('Connected To Internet');
            setIsOnline(true);
        }
        const handleOffline = () => {
            console.log('Lost internet Connection');
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, [])
    return isOnline;
}