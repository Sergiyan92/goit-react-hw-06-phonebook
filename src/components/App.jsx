import { ContactForm } from './contactform/Contactform';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/Contactlist';
import css from './Phonebook.module.css';

export const App = () => {
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
