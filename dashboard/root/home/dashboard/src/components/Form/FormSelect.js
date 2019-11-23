import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const FormSelect = ({ field, form: { touched, errors }, ...props }) => {
    const {id, items, placeholder} = props;
    const {name, value, onChange} = field;
    return <>
        <FormControl error={(!!touched[field.name] && !!errors[field.name])} style={{width: '100%'}}>
            <InputLabel id={`${id}-label`}>{placeholder}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                value={value}
                name={name}
                onChange={onChange}
                renderValue={value => `${value}`}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {items.map((item, i)=>{
                    return <MenuItem key={i} value={item}>{item}</MenuItem>
                })}
            </Select>
            {(touched[field.name] && errors[field.name]) && <FormHelperText>{errors[field.name]}</FormHelperText>}
        </FormControl>
        </>;
};
export default FormSelect