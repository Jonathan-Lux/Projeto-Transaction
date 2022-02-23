import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import {useState} from"react"
import TransactionModal from "./components/TransactionModal"
import Modal from "react-modal"
import { TransactionProviver } from "./components/TransactionContext";

Modal.setAppElement("#root")


function App() {
  const [isNewtransactionModal, setInNewtransactionModal] = useState(false);

  const isOpenModal = () => {
    setInNewtransactionModal(true);
  };

  function isCloseModal() {
    setInNewtransactionModal(false);
  }

 
  return (
    <TransactionProviver>
    <div className="container">
      <Header isOpenModal={isOpenModal}></Header>
      <DashBoard></DashBoard>
      <TransactionModal  isNewtransactionModal={isNewtransactionModal} isCloseModal={isCloseModal}/>
      </div>
      </TransactionProviver>
      )

}

export default App;
