import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Field, Formik, FieldArray} from "formik";
import FormSelect from "../components/Form/FormSelect";
import FormInput from "../components/Form/FormInput";
import FormDatePicker from "../components/Form/FormDatePicker";
import FieldArrayItem from '../components/Form/FieldArrayItem'
import Wrapper from '../components/Wrapper'
import {validateArray, required, minLength} from "../helpers/validate";
import {initialValues, findingItem, statuses} from "../helpers/initialData";
import {submitReport} from "../api/reports";
import {useStore} from "../store/useStore";

const CreateReportPage = () => {
    const {dispatch} = useStore();
    return (
        <Wrapper>
            <Formik initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        submitReport(values).then(data =>
                            dispatch({type: 'addReport', data})
                        );
                    }}
            >
                {({
                      values,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Field
                                    name='repositoryName'
                                    label="Repository Name"
                                    value={values.repositoryName}
                                    onChange={handleChange}
                                    component={FormInput}
                                    validate={validateArray([
                                        required, minLength(2)
                                    ])}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Field
                                    placeholder="Status"
                                    name="status"
                                    id="status"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.status}
                                    items={statuses}
                                    component={FormSelect}
                                    validate={required}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <h3>Findings</h3>
                                <FieldArray name='findings'
                                            render={arrayHelpers => (
                                                <Grid container spacing={3}>
                                                    <Grid item xs={12}>
                                                        {values.findings.map((item, index) => (
                                                            <FieldArrayItem
                                                                key={index}
                                                                index={index}
                                                                arrayHelpers={arrayHelpers}
                                                            />
                                                        ))}
                                                    </Grid>
                                                    <Grid item xs={12} style={{textAlign: 'right'}}>
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => arrayHelpers.push(findingItem)}
                                                        >
                                                            Add
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            )}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Field
                                    placeholder="Queued At"
                                    name="queuedAt"
                                    id="queuedAt"
                                    value={values.queuedAt}
                                    component={FormDatePicker}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Field
                                    placeholder="Scanning At"
                                    name="scanningAt"
                                    id="scanningAt"
                                    value={values.scanningAt}
                                    component={FormDatePicker}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Field
                                    placeholder="Finished At"
                                    name="finishedAt"
                                    id="finishedAt"
                                    value={values.finishedAt}
                                    component={FormDatePicker}
                                />
                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Wrapper>
    )
};
export default CreateReportPage