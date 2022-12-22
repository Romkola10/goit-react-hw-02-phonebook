import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div >
            <ul >
                {contacts.map(({ id, name, number }) => (
                    <li key={id} >
                        <p>{name} ------------ {number}</p>
                        {/* <p className={css.contact_number}>{number}</p> */}

                        <button  type='submit' onClick={() => onDeleteContact(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}


ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),

    onDeleteContact: PropTypes.func,
};

export default ContactList;