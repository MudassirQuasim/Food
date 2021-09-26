import React from 'react';

const UseState = () => {
    const initialData = 15;
    const [myNum, setMyNum] = React.useState(initialData);

    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <button class="button2" onClick={()=> setMyNum(myNum+1) }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increase
                </button>
                <button class="button2" onClick={()=> myNum > 0 ? setMyNum(myNum-1) : setMyNum(0) }> 
                    <span></span>
                    <span></span>
                    <span></span>
                    Descrise
                </button>
            </div>
        </>
    );
};

export default UseState; 