import { useTheme } from '../ThemeProvider/ThemeContext';
import {Moon, Sun} from 'lucide-react'

const DarkModeToggle = ({className}: {className: string}) =>    { 
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <button type="button" onClick={toggleDarkMode} className={className} style={{background: "transparent", border: "none"}}>
        {darkMode? <Sun stroke='#fff'/> : <Moon/>}
      </button>
    </>
  );
};

export default DarkModeToggle;
