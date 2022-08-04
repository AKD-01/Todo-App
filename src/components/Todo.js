import { useState } from 'react';
import Modal from "./Modal";
import Backdrop from "./Backdrop";


function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    props.deleteTodo(props.todo);
    setModalIsOpen(false);
  }
    
  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
      <button className='btn' onClick={deleteHandler}>Delete</button>
      </div>
      {/* {modalIsOpen ? <Modal />: null}  it is one way of doing it but the other way in the next line is way more simpler*/}
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
      </div>
    );
}

export default Todo;