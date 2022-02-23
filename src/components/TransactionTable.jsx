import {useContext} from "react"
import {TransactionContext} from"./TransactionContext"
import { RiDeleteBinLine } from "react-icons/ri"
function TransactionTable(props) {

const [transactions] = useContext(TransactionContext)



  return (
    <table className="table">
      <thead>
        <tr>
          <th> Título</th>
          <th> Preço</th>
          <th> Categoria</th>
          <th> Data</th>
     
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.typeTransaction}>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(transaction.date)
              )}
              <button className="deleteItem" onClick={()=>{props.deleteTransaction(transaction)}}><RiDeleteBinLine size={20}/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
