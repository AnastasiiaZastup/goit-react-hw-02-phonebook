
export const FilterContact = ({ filter , onUpdateContact}) => {
    return (
        <div>
            Filter contacts by name:
            <input type="text"
                value={filter}
                onChange={evt => onUpdateContact(evt.target.value)} />
        </div>
    );
};