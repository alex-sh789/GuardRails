import React from 'react';
import {Field} from "formik";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormInput from "./FormInput";
import Name from '../Name'
import {required, validateArray, minLength} from "../../helpers/validate";

const FieldArrayItem = ({index, arrayHelpers})=>{
    return(
        <Grid container spacing={3} key={index}
              style={{borderBottom: '1px solid #ccc'}}>
            <Grid item container spacing={3} xs={12} md={11}>
                <Grid item xs={12} md={6}>
                    <Field
                        label="Type"
                        name={`findings[${index}].type`}
                        component={FormInput}
                        validate={validateArray([
                            required, minLength(2)
                        ])}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Field
                        label="Rule Id"
                        name={`findings[${index}].ruleId`}
                        component={FormInput}
                        validate={validateArray([
                            required, minLength(2)
                        ])}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{
                        border: '1px dotted #ddd',
                        borderRadius: '10px',
                        padding: 5
                    }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Name>Location</Name>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    label="Path"
                                    name={`findings[${index}].location.path`}
                                    component={FormInput}
                                    validate={validateArray([
                                        required, minLength(2)
                                    ])}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    label="Begin line"
                                    name={`findings[${index}].location.positions.begin.line`}
                                    component={FormInput}
                                    validate={validateArray([
                                        required, minLength(2)
                                    ])}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div style={{
                        border: '1px dotted #ddd',
                        borderRadius: '10px',
                        padding: 5
                    }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Name>Metadata</Name>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    label="Description"
                                    name={`findings[${index}].metadata.description`}
                                    component={FormInput}
                                    validate={validateArray([
                                        required, minLength(2)
                                    ])}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    label="Severity"
                                    name={`findings[${index}].metadata.severity`}
                                    component={FormInput}
                                    validate={validateArray([
                                        required, minLength(2)
                                    ])}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Grid item  container xs={12} md={1} alignContent='flex-end'>
                <Grid item style={{textAlign: 'center'}}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => arrayHelpers.remove(index)}
                    >
                        Remove
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};
export default FieldArrayItem