
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    
    return (
        <div >
            <label>
               <span >Find contacts by name</span> 
                <input type="name" value={value} onChange={onChange}
                />
            </label>
        </div>
    );
};

Filter.protoType = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;