import React from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const FormDatePicker = ({ field, form, ...props }) => {
    const {id, placeholder} = props;
    const {name, value} = field;
    return <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{width: '100%'}}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                name={name}
                id={id}
                label={placeholder}
                value={value}
                onChange={date => form.setFieldValue(name, new Date(date).valueOf(), false)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
        </>;
};
export default FormDatePicker