export function Buttons({count, removeCount, reset, addCount}) {

    return (
        <div className="info-container">
            <h3 style={{color: "black"}}>COUNTER</h3>
            <h1 style={{color: "black"}}>{count}</h1>
            <button onClick={addCount}>add count</button>
            <button onClick={removeCount}>lower count</button>
            <button onClick={reset}>Reset</button>


        </div>
    )
}













