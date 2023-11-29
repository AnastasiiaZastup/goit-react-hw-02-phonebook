

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <div>
            <h2>Contacts</h2>
        <ul>
                {contacts.map(item => {
                    return (
                        <li key={item.id}>
                            <p>
                                {item.name} : {item.number}
                            </p>
                            <button onClick={() => onDelete(item.id)}>Delete</button>
                        </li>
                    );
                })}
            </ul>
            </div>
    );
};