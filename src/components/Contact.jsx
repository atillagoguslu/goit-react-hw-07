import styles from "./Contact.module.css";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/contactsSlice";

function Contact({ name, number, onDelete }) {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={styles.contact}>
      <div className={styles.contactCard}>
        <div className={styles.userInfo}>
          <div className={styles.name}>
            <span>{name}</span>
          </div>
          <div className={styles.phone}>
            <span>{number}</span>
          </div>
        </div>
        {isLoading ? (
          <button className={styles.deleteBtn} onClick={onDelete}>
            Deleting...
          </button>
        ) : (
          <button className={styles.deleteBtn} onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Contact;
