import React from 'react';
import { bool, func, string } from 'prop-types';


const Checkbox = ({ label, name, checked, onChange }) => <label>{label}<input name={name} type="checkbox" checked={checked} onChange={onChange}/></label>

Checkbox.propTypes = {
    label: string.isRequired,
    name: string.isRequired,
    checked: bool,
    onChange: func.isRequired
}

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox;