import React from 'react';
import { removeContacts } from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import s from '../app.module.css';

const ContactList = () => {
  const filterName = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contactsList.contacts);
  const dispatch = useDispatch();
  console.log(filterName);
  const filterContacts = () => {
    if (filterName.length > 0) {
      const filterLow = filterName.toLowerCase().trim();
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterLow)
      );
    } else {
      return contacts;
    }
  };
  const filteredContacts = filterContacts();
  return (
    <>
      <ul className={s.items}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <span>{name}: </span>
              <span>{number}</span>

              <button
                className={s.buttonDel}
                onClick={() => dispatch(removeContacts(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
