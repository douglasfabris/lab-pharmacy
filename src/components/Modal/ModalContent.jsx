import "./ModalStyle.css"

function ModalContent({ onClose }) {
  return ( 
    <div className="modal">
      <div className="modal-content">
        Cadastro realizado com sucesso
        <button type="button" onClick={onClose}>Fechar</button>
      </div>
  </div>
   );
}

export default ModalContent;