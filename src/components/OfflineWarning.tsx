import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus"
const OfflineWarning = () => {
    const isOnline = useOnlineStatus();
    if(isOnline){
        return null;
    }
    const warningStyle: React.CSSProperties = { 
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
    }
    return (
        <div style={warningStyle}>
            OfflineWarning
        </div>
    )
}
export default OfflineWarning