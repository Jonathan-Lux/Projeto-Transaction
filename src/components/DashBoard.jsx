import Summary from "./Summary"
import {useContext} from"react"
import TransactionTable from "./TransactionTable"
import {TransactionContext} from"./TransactionContext"

    function DashBoard(props){
        const [transactions,setTransactions] = useContext(TransactionContext)
        function deleteTransaction(transaction){
            let delTransaction = transactions.filter(item=> item.id !== transaction.id)
            setTransactions(delTransaction)
          }
          
    return(
        <>        
        <Summary></Summary>
        <TransactionTable deleteTransaction={deleteTransaction}></TransactionTable>
        </>

    )
}

export default DashBoard