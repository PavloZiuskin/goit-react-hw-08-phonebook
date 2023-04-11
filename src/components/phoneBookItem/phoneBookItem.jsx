import PropTypes from 'prop-types'; 
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { Container } from "components/phoneBookItem/phoneItem.styled"
export const ContactsItem = ({item}) => {
    const dispatch = useDispatch();
    return (<Container>
        <span>{item.name}: {item.number}</span>
                <button type="button" onClick={()=>dispatch(deleteContact(item.id))}>delete</button>
    </Container>)
}

ContactsItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,}
    ),
} 