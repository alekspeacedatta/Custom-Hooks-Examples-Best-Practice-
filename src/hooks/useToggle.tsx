import { useState } from 'react';
export const useToggle = (initialValue: boolean = true) => {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue((prev) => !prev);
    }
    return { value, toggle}; 
}