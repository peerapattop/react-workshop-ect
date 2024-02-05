import React, { useContext } from "react";
import { DataContext } from "../App";

const Menu = () =>{
    const {setAppState} = useContext(DataContext)
    return (
        <div className='menu'>
            <h1>แบบทดสอบเบื้องต้น</h1>
            <button onClick={()=> setAppState("quiz")}>เริ่มทำแบบข้อสอบ</button>
        </div>
    )
}

export default Menu;