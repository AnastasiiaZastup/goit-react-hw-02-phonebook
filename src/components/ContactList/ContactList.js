import { ContactCard } from "components/ContactCard/ContactCard"

export const ContactList = ({ items }) => {
    return (
        <div>
            <h2>Contacts</h2>
        <ul>
                {items.map(item => {
                    return (
                        <ContactCard
                            name={item.name}
                            phone={item.phone}
                            id={item.id}
                            key={item.id}
                        />
                    );
                })}
            </ul>
            </div>
    );
};