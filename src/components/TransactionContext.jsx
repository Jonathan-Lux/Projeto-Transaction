import { createContext,useState, useEffect } from "react";
import api from "../Api/Api";

export const TransactionContext = createContext()


export function TransactionProviver(props){
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      api
        .get("/operations")
        .then((res) => setTransactions(res.data.transactions));
    }, []);

    return (
    <TransactionContext.Provider value={[transactions, setTransactions]}> 
        {props.children}
        </TransactionContext.Provider>
    )
}