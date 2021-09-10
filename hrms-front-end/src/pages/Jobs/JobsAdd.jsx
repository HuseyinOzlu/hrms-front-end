import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {Button, Dropdown,} from 'semantic-ui-react';
import CityService from '../../services/cityService';
import WorkTypesService from '../../services/workTypesService';
import jobService from '../../services/jobService';


    const validationSchema = yup.object({
        cityName: yup
            .string('Enter City')
            .required('City is required'),
        companyName: yup
            .string('Enter your Company')
            .required('Company is required'),
        jobTitle: yup
            .string('Enter Job Title')
            .required('Job Title is required'),
        position: yup
            .string('Enter Work')
            .required('Work is required'),
        date: yup
            .string('Enter Date')
            .required('Last date is required'),
        minSalary: yup
            .string('Enter Min. Salary')
            .required('Min. Salary is required'),
        maxSalary: yup
            .string('Enter Max. Salary')
            .required('Max. Salary is required'),
        jobStatus: yup
            .string('Enter Job Status')
            .required('Job Status is required'),
        age: yup
            .string('Enter age')
            .required('age is Required'),
        });

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            },
    },
}));

export default function JobsAdd() {

    const [cities, setCities] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        let workTypeService = new WorkTypesService();
        cityService.getCity().then(result => setCities(result.data.data))
        workTypeService.getWorkType().then(result => setWorkTypes(result.data.data))
    }, [])
    
    const getCities = cities.map((city, index) => ({
        key: index,
        text: city.city_name,
        value: city.city_name,
    }));

    const getWorkType = workTypes.map((workType, index) => ({
        key: index,
        text: workType.workerTypeName,
        value: workType.id,
    }));

    const formik = useFormik({
            initialValues: {
            city_id: '',
            companyName: '',
            jobTitle: '',
            position: '',
            date: '',
            minSalary: '',
            maxSalary: '',
            jobStatus: '',
            age: '',
            WorkType: '',
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                let jobsAdd = {
                city:        { cityName: values.city_id},
                companyName: { companyName: values.companyName},
                jobTitle:    { jobTitle: values.jobTitle},
                position:    { position: values.position},
                date:        {date: values.date},
                minSalary:   {minSalary: values.minSalary},
                maxSalary:   {maxSalary: values.maxSalary},
                isJobOpen:   {isJobOpen: values.jobStatus},
                workType:     {workTypeId: values.workType},
            };
            console.log(jobsAdd);
                    jobService.addJob(jobsAdd).then((result) => console.log(result.data.message));
                
            },
        });
    const classes = useStyles();
    return (
        /* (JSON.stringify(values, null, 2));*/
            <div>
                
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div>
                <label>City</label>
                <br/>
            <Dropdown
            button
            search
            fullWidth
            selection
            id="cityName"
            name="cityName"
            label="City"
            variant="outlined"
            style={{margin: "auto", width: "100%"}}
            options={getCities}
            value={formik.values.city_id}
            required
            onChange={(event, data) =>
                formik.setFieldValue("city_id", data.value)
            }
            error={formik.touched.cityName && Boolean(formik.errors.cityName)}
            helperText={formik.touched.cityName && formik.errors.cityName}
            /></div>
            <br/><br/>
            <div>
                <label>Position Type</label>
                <Dropdown 
                button
                search
                selection
                fullWidth
                variant="outlined"
                placeholder='Select Position Type'
                fluid
                style={{margin: "auto", top: "50%"}}
                id='id'
                options={getWorkType}
                value={formik.values.workTypes}
                onChange={(event, data) =>
                formik.setFieldValue("id", data.value)
                }
                required
                />
            </div>
            <div>
            <label>Company Name</label>
                <br/>
            <TextField
            fullWidth
            id="companyName"
            style={{margin: "auto"}}
            name="companyName"
            label="Company Name"
            variant="outlined"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            helperText={formik.touched.companyName && formik.errors.companyName}
            /></div>
            <br/><br/>
            <label>Job Title</label>
                <br/>
            <TextField
            fullWidth
            id="jobTitle"
            name="jobTitle"
            label="Job Title"
            variant="outlined"
            value={formik.values.jobTitle}
            onChange={formik.handleChange}
            error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
            helperText={formik.touched.jobTitle && formik.errors.jobTitle}
            />
            <br/><br/>
            <label>Work</label>
                <br/>
            <TextField
            fullWidth
            id="position"
            name="position"
            label="Work"
            variant="outlined"
            value={formik.values.position}
            onChange={formik.handleChange}
            error={formik.touched.position && Boolean(formik.errors.position)}
            helperText={formik.touched.position && formik.errors.position}
            />
            <br/><br/>
            <label>Date</label>
                <br/>
            <TextField
            fullWidth
            id="date"
            name="date"
            label="Date"
            type="number"
            variant="outlined"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            />
            <br/><br/>
            <label>Min. Salary</label>
                <br/>
            <TextField
            fullWidth
            id="minSalary"
            name="minSalary"
            label="Min. Salary"
            type="number"
            variant="outlined"
            value={formik.values.minSalary}
            onChange={formik.handleChange}
            error={formik.touched.minSalary && Boolean(formik.errors.minSalary)}
            helperText={formik.touched.minSalary && formik.errors.minSalary}
            />
            <br/><br/>
            <label>Max Salary</label>
            <TextField
            fullWidth
            id="maxSalary"
            name="maxSalary"
            label="Max. Salary"
            type="number"
            variant="outlined"
            value={formik.values.maxSalary}
            onChange={formik.handleChange}
            error={formik.touched.maxSalary && Boolean(formik.errors.maxSalary)}
            helperText={formik.touched.maxSalary && formik.errors.maxSalary}
            />
            <br/><br/>
            <label>Job Status</label>
                <br/>
            <TextField
            fullWidth
            id="jobStatus"
            name="jobStatus"
            label="Job Status"
            type="Boolean"
            variant="outlined"
            value={formik.values.jobStatus}
            onChange={formik.handleChange}
            error={formik.touched.jobStatus && Boolean(formik.errors.jobStatus)}
            helperText={formik.touched.jobStatus && formik.errors.jobStatus}
            />
            <br/><br/>
            <Button color="primary" className="submit" variant="contained" fullWidth type="submit">
            Submit
            </Button>
        </form>
        </div>
    )
}
