import { useDispatch, useSelector } from 'react-redux';
import css from './Contactlist.module.css';
import { getFilter, selectContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilter);

  const visibleContactList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const visibleContacts = visibleContactList();
  return (
    <ul className={css.list}>
      {visibleContacts?.map(contact => (
        <li key={contact.id} className={css.item}>
          {contact.name} - {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
