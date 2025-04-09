import { memo } from 'react'

import 'styles/components/ToggleButton.css'

function ToggleButton({ id, text, type, handleToggleClick }) {
    return (
        <>
            <div className="toggle-area">
                <input
                    id={id}
                    className="toggle-switch"
                    type="checkbox"
                    onClick={() => handleToggleClick(type)}
                />
                <label htmlFor={id} className="font-20 bold">
                    {text}
                </label>
            </div>
        </>
    );
}

export default memo(ToggleButton)