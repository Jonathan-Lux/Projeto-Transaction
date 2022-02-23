import { TransactionContext } from "./TransactionContext";
import {useContext} from"react"
import entradas from"../assets/Entradas.svg"
import saidas from"../assets/Saidas.svg"
import total from"../assets/Total.svg"


export default function Summary() {
  const [transactions] = useContext(TransactionContext)
  

  const summaryTotal = transactions.reduce((acc, transaction) =>{

    if(transaction.typeTransaction === "deposit"){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else if (transaction.typeTransaction === "withdraw"){
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

  },{
    deposits:0,
    withdraws:0,
    total:0,
  })


  return (
    <div className=" main">
        <div className="main-context">
        <div className="context">
          <p>Entradas</p>
          <img alt="entrada" src={entradas} />
        </div>
        <span>{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(summaryTotal.deposits)}</span>
      </div>

        <div className="main-context">
        <div className="context">
          <p>Saídas</p>
          <img alt="saida" src={saidas} />
        </div>
        <span>-{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(summaryTotal.withdraws)}</span>
      </div>
      
      <div className="main-context total">
        <div className="context">
          <p>Total</p>
          <img alt="total" src={total} />
        </div>
        <span>{new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(summaryTotal.total)}</span>
      </div>
    </div>
  );
}
