import React from 'react';

const reducer = (state,action) => {
    if (action.type==="INCR"){
        state += 1;
    }
    if (state>0 && action.type==="DECR"){
        state -= 1;
    }
    return state;
};

const UseReducer = () => {
    // const initialData = 15;
    // const [myNum, setMyNum] = React.useState(initialData);

    const initialData = 10;
    const [state,dispatch] = React.useReducer(reducer,initialData);


    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <button class="button2" onClick={()=> dispatch({type:"INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increase
                </button>
                <button class="button2" onClick={()=> dispatch({type:"DECR"})}> 
                    <span></span>
                    <span></span>
                    <span></span>
                    Descrise
                </button>
            </div>
        </>
    );
};

export default UseReducer; 