import styles from "./Contact.module.css";
import { useSelector } from "react-redux";
import { selectLoadingStates } from "../redux/contactsSlice";

function Contact({ name, number, onDelete }) {
  const loadingStates = useSelector(selectLoadingStates);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      onDelete();
    }
  };

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
        {loadingStates.delete ? (
          <button className={styles.deleteBtn} onClick={handleDelete}>
            Deleting...
          </button>
        ) : (
          <button className={styles.deleteBtn} onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Contact;
