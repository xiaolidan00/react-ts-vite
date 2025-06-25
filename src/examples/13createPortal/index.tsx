import {useEffect, useRef, type ReactNode, useState} from "react";
import {createPortal} from "react-dom";
import styles from "./index.module.scss";
const modalRoot = document.createElement("div");
modalRoot.id = "modalRoot";
document.body.appendChild(modalRoot);
type ModalProps = {
  children: ReactNode;
};

function Modal({children}: ModalProps) {
  // create div element only once using ref
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) elRef.current = document.createElement("div");

  useEffect(() => {
    const el = elRef.current!; // non-null assertion because it will never be null
    el.className = styles.dialog;
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, []);

  return createPortal(children, elRef.current);
}

const CreatePortalComp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>showDialog</button>
      {showModal && (
        <Modal>
          <div className={styles["dialog-body"]} style={{width: "50%", top: "10%", left: "25%"}}>
            <h1>
              Hello World
              <i style={{float: "right"}} onClick={() => setShowModal(false)}>
                X
              </i>
            </h1>
            <p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello World</p>
          </div>
        </Modal>
      )}
    </>
  );
};
export default CreatePortalComp;
