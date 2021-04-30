import React from 'react'
import PropTypes from 'prop-types'

const Search = ({addSearchText}) => {
    const onChange = (event) => {
        const {value} = event.target;
        addSearchText(value);
        console.log(value);
    }
    return (
        <div className="Search">
            <input className="Search__input" type="text" onChange={onChange} placeholder="ค้นหา"/>
        </div>
    )
}

Search.propTypes = {
    addSearchText: PropTypes.func.isRequired,
}

export default Search;