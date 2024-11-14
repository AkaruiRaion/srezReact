import s from './OrderModal.module.css'
import Modal from "react-modal";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="name" placeholder="Иван" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Номер телефона</Form.Label>
                        <Form.Control type="tel" placeholder="+7 (939) 390-31-37" />
                    </Form.Group>
                    <Button variant="outline-success" href="/catalog">Отправить</Button>
                </Form>
                <p onClick={closeModal} className={s.close}>x</p>
            </Modal>
        </>
    )
}