import { use } from "react"
import { useOnlineStatus } from "../hooks/useOnlineStatus"

const StatusBar = () => {
    const isOnline = useOnlineStatus();
    return (
        <h1>
            {isOnline ? 'connected is successful' : 'connection is lost'}
        </h1>
    )
}
export default StatusBar