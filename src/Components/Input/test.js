import React from 'react';
import { shallow } from 'enzyme';
import Input from './';

describe('Input Field', () => {
    it('should render an input field with correct props', () => {
        const testInputField = shallow(<Input value="mock value" type="text" onChange={() => null} />);
        console.log(testInputField.debug())
        expect(testInputField.prop('value')).toBe('mock value');
        expect(testInputField.prop('type')).toBe('text');
    });

    it('should call onChange handler when user types into the field', () => {
        const mockOnChangeHandler = jest.fn();
        const testInputField = shallow(<Input value="mock value" type="text" onChange={mockOnChangeHandler} />);

        expect(mockOnChangeHandler).not.toHaveBeenCalled();
        testInputField.simulate('change');
        expect(mockOnChangeHandler).toHaveBeenCalled();
    });

});