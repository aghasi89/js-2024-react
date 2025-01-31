import { useEffect, useState } from "react";

const Header = (props) => {
    const [count, setCount] = useState(0);
    const handleCountChnage = () => {
        return () => {
            console.log("clean up");
            
        }
    }

    useEffect(handleCountChnage, [])
    return (
        <div className="header">
            Count:{count}
            <h1>Header {props.arg}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Header;