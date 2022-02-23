import Modal from "react-modal";
import {useContext, useState} from"react"
import api from "../Api/Api"
import closeImg from"../assets/close.svg"
import entradas from"../assets/Entradas.svg"
import saidas from"../assets/Saidas.svg"
import { TransactionContext } from "./TransactionContext";

export default function TransactionModal(props) {
  const [transactions,setTransactions] = useContext(TransactionContext)
  const [typeTransaction,setTypeTransaction] = useState("deposit")
  const [title,setTitle] = useState("")
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState("")

  async function HandleCreatNewTransaction(event) {
      event.preventDefault()

      const data = {
        title,
        amount,
        typeTransaction,
        category
      }
     
     const res = await api.post("/operations", {...data, date: new Date()})
     const {transaction} = res.data 

     setTransactions([...transactions,transaction])

      setTitle("")
      setAmount(0)
      setTypeTransaction("deposit")
      setCategory("")
      props.isCloseModal()
  }

  return (
    <>
      <Modal isOpen={props.isNewtransactionModal} onRequestClose={props.isCloseModal}
      overlayClassName="modal-overlay"
      className="modal-context">
        <form className="modal-form" onSubmit={HandleCreatNewTransaction}>
            <h2>Cadastar Transação</h2>
            <button className="close-modal-bt" type="button"><img src={closeImg} alt="fechar modal" onClick={props.isCloseModal}></img></button>
            <button></button>
            <input value={title} onChange={event=>setTitle(event.target.value)} type="text" placeholder="Título"></input>
            <input value={amount} onChange={event=>setAmount(+event.target.value)} type="number" placeholder="Valor"></input>

            <div className="type">
            <button className={typeTransaction === "deposit" ? "deposit" : ""} onClick={()=>{setTypeTransaction("deposit")}} type="button" > <img src={entradas} alt="Entradas" /> <span>Entradas</span></button>
            <button className={typeTransaction === "withdraw" ? "withdraw" : ""}onClick={()=>{setTypeTransaction("withdraw")}} type="button"> <img src={saidas} alt="saida"/><span>Saídas</span></button>
            </div>

            <input value={category} onChange={event=>setCategory(event.target.value)} placeholder="Categoria" type="text"></input>
            <button className="submit-bt" type="submit">Cadastrar</button>
        </form>
      </Modal>
    </>
  );
}
