import React from "react";
import TextField from '@material-ui/core/TextField';

const FormInput = ({ field, form, ...props }) => {
    const { touched, errors } =form;
    return <TextField
        error={(!!touched[field.name] && !!errors[field.name])}
        helperText={errors[field.name]}
        {...field}
        {...props}
        style={{width: '100%'}}/>;
};
export default FormInput