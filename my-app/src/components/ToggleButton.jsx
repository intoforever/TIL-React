import { memo, useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { activeOnState, completeOnState } from '../recoil/atoms'

import 'styles/components/ToggleButton.css'

function ToggleButton({ id, text, type, handleToggleClick }) {
    const inputRef = useRef(null);
    const activeOn = useRecoilValue(activeOnState);
    const completeOn = useRecoilValue(completeOnState);

    // 체크 상태에 따라서 토글 모양 변경
    useEffect(() => {
        const input = inputRef.current;
        const isChecked = (type === 'active') ? activeOn : completeOn;
        if (input) {
            input.style.backgroundImage = isChecked
            ? 'url("/images/triangle-down.svg")'
            : 'url("/images/triangle-right.svg")';
            input.style.backgroundSize = 'contain';
            input.style.backgroundRepeat = 'no-repeat'
        }
    }, [activeOn, completeOn]);

    return (
        <>
            <div className="toggle-area">
                <input
                    id={id}
                    className="toggle-switch"
                    type="checkbox"
                    ref={inputRef}
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