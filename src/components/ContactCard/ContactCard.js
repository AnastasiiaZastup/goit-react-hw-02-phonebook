
export const ContactCard = ({ id, number, name }) => {
    return (
        <li>
            <span>{name}</span> : <span>{number}</span>{' '}
        </li>
    );
};