import 'styles/components/ToggleButton.css'

function ToggleButton({ id, text, type, onToggleClick }) {
    return (
        <>
            <div className="toggle-area">
                <input
                    id={id}
                    className="toggle-switch"
                    type="checkbox"
                    onClick={() => onToggleClick({type})}
                />
                <label htmlFor={id} className="font-20 bold">
                    {text}
                </label>
            </div>
        </>
    );
}

export default ToggleButton