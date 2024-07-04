import { useDarkreader } from 'react-darkreader';

const DarkModeToggle = () => {
    const { darkreader, setDarkreader } = useDarkreader();
    
    const toggleDarkMode = () => {
        setDarkreader(!darkreader);
    };

    return (
        <button
            className="btn btn-sm"
            onClick={toggleDarkMode}
        >
            {darkreader ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
