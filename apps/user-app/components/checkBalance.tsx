
"use client"
import { useBalance } from "@repo/store/useBalance"; 


export default function getBalance(){
    const balance = useBalance();
    return (<div>
        Hi Nishan total balance left is : {balance}
    </div>)
}
