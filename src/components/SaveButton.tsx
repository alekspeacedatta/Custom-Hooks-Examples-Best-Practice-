import { useOnlineStatus } from "../hooks/useOnlineStatus"
const SaveButton = () => {
    const isOnline = useOnlineStatus();
    const handleSaveClick = () => {
        alert('Progress Saved');
    }
    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save Progress' : 'Recconetcting...'}
        </button>
    )
}
export default SaveButton