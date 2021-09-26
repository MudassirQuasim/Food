import React, { useState, useEffect } from 'react';

const UseEffect = () => {
    // const initialData = 15;
    const [myNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Chat(${myNum})`
    });

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <button class="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increase
                </button>
            </div>
        </>
    );
};

export default UseEffect;