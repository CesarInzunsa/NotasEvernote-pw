import { useState } from 'react';

export default function Checkbox() {
    const [meGusta, setMeGusta] = useState(true);

    function handleChange(e) {
        setMeGusta(e.target.checked);
    }

    return (
        <>
            <label>
                <h3>Checkbox</h3>
                <input
                    type="checkbox"
                    checked={meGusta}
                    onChange={handleChange}
                />
                Me gustó esto
            </label>
            <p>{meGusta ? 'Te gustó' : 'No te gustó'} esto.</p>
        </>
    );
}