import React from 'react';
import {
    string,
    func
} from 'prop-types';

const InputField =  ({type, value, onChange, name}) => { 
    return (<input name={name} value={value} type={type} onChange={onChange}></input>);
}

InputField.propTypes = {
    name: string.isRequired,
    value: string.isRequired,
    type: string.isRequired,
    onChange: func.isRequired
}

export default InputField;