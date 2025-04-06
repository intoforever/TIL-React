import { useState } from 'react'
import 'styles/components/TodoItem.css'

function TodoItem({ onItemClick }) {
    return (
        <>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
            <div className="item" onClick={() => onItemClick()}>하이12345678  작성중</div>
        </>
    );
}

export default TodoItem