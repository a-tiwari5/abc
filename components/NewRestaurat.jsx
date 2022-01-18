import React from "react";
// import { useState } from "react";
import { Field, reduxForm } from 'redux-form'
import axios from "axios";
import { useHistory } from "react-router-dom";


const NewRestaurant = (props) => {
    const history=useHistory();
    const renderInput = (formProps) => {
        return (<>
            <label className="form-label" htmlFor={formProps.for}>{formProps.label}</label>
            <input {...formProps.input}
                className="form-control"
                type="text"
                name={formProps.input.name}
                id={formProps.input.name}
                placeholder={formProps.placeholder}
                required
                autoComplete="off"
            />
            {formProps.meta.touched ? <div className="alert-danger my-2">{formProps.meta.error}</div> : ''}
        </>
        )
    }
    const renderTextArea=(formProps)=> {
        return (
            <>
                <textarea {...formProps.input} className="form-control" name={formProps.input.name} id="description" cols="30" rows="5"
                    required></textarea>

                {formProps.meta.touched ? <div className="alert-danger my-2" role="alert"> {formProps.meta.error}</div> : ''}
            </>
        )
    }

    const onSumit=(formValues)=> {
        // console.log(formValues)
        const res = async () => {
            await axios.post('http://localhost:4000/restaurants', {
                name:formValues.name,
                neighborhood:formValues.neighborhood,
                address:formValues.address,
                description:formValues.description,
                image:formValues.image
            })
        }
        res();
        console.log(res.data)
        if (res.status === 422 || !res) {
            window.alert("INVALID REGISTRATION")
            console.log('Invalid Registeration')
        } else {
            // window.alert("Regiteration Successfull")
            // setData(res.data)
            // console.log(data)
            history.push('/restaurants')
        }
    }


    return (
        <>
            <div className="row my-4">
                <div className="col-md-6 offset-3">
                    <h1 className="text-center">Add A New Restaurant</h1>
                    <form method="POST" onSubmit={props.handleSubmit(onSumit)}>
                        <div className="mb-3">
                            <Field name="name"
                                component={renderInput}
                                label="Name:"
                                for="name"
                                placeholder='Name' />
                        </div>
                        <div className="mb-3">
                            <Field name="neighborhood"
                                component={renderInput}
                                label='Neighborhood:'
                                for='neighborhood'
                                placeholder='Neighborhood'
                            />
                        </div>
                        <div className="mb-3">
                            <Field name="address"
                                component={renderInput}
                                label='Address:'
                                for='address'
                                placeholder='Address'
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="description">Description:</label>
                            <Field name='description'
                                component={renderTextArea}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Image:</label>
                            <div className="input-group">
                                <span className="input-group-text" id="price-label">URL</span>
                                <Field name="image"
                                    component={renderInput}
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

// class NewRestaurant extends React.Component {

//     renderInput = (formProps) => {
//         return (<>
//             <label className="form-label" htmlFor={formProps.for}>{formProps.label}</label>
//             <input {...formProps.input}
//                 className="form-control"
//                 type="text"
//                 name={formProps.input.name}
//                 id={formProps.input.name}
//                 placeholder={formProps.placeholder}
//                 required
//                 autoComplete="off"
//             />
//             {formProps.meta.touched ? <div className="alert-danger my-2">{formProps.meta.error}</div> : ''}
//         </>
//         )
//     }
//     renderTextArea(formProps) {
//         return (
//             <>
//                 <textarea {...formProps.input} className="form-control" name={formProps.input.name} id="description" cols="30" rows="5"
//                     required></textarea>

//                 {formProps.meta.touched ? <div className="alert-danger my-2" role="alert"> {formProps.meta.error}</div> : ''}
//             </>
//         )
//     }

//     onSumit(formValues) {
//         console.log(formValues)
//         const res = async () => {
//             await axios.post('http://localhost:4000/restaurants', {
//                 formValues
//             })
//         }
//         if (res.status === 422 || !res) {
//             window.alert("INVALID REGISTRATION")
//             console.log('Invalid Registeration')
//         } else {
//             // window.alert("Regiteration Successfull")
//             // setData(res.data)
//             // console.log(data)
//             history.push('/')
//         }
//     }

//     render() {
//         const history = useHistory();
//         return (
//             <>
//                 <div className="row my-4">
//                     <div className="col-md-6 offset-3">
//                         <h1 className="text-center">Add A New Restaurant</h1>
//                         <form method="POST" onSubmit={this.props.handleSubmit(this.onSumit)}>
//                             <div className="mb-3">
//                                 <Field name="name"
//                                     component={this.renderInput}
//                                     label="Name:"
//                                     for="name"
//                                     placeholder='Name' />
//                             </div>
//                             <div className="mb-3">
//                                 <Field name="neighborhood"
//                                     component={this.renderInput}
//                                     label='Neighborhood:'
//                                     for='neighborhood'
//                                     placeholder='Neighborhood'
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <Field name="address"
//                                     component={this.renderInput}
//                                     label='Address:'
//                                     for='address'
//                                     placeholder='Address'
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label" htmlFor="description">Description:</label>
//                                 <Field name='description'
//                                     component={this.renderTextArea}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label" htmlFor="image">Image:</label>
//                                 <div className="input-group">
//                                     <span className="input-group-text" id="price-label">URL</span>
//                                     <Field name="image"
//                                         component={this.renderInput}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mb-3">
//                                 <button className="btn btn-success">Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

const validate = (formValues) => {
    const errors = {}
    if (!formValues.name) {
        errors.name = "You must enter a Name"
    }
    if (!formValues.neighborhood) {
        errors.neighborhood = "You must enter a Neighborhood."
    }
    if (!formValues.address) {
        errors.address = "You must enter an Address ."
    }
    if (!formValues.description) {
        errors.description = "You must enter a description."
    }
    if (!formValues.image) {
        errors.image = "You must give an image."
    }
    return errors;
}

export default reduxForm({
    form: 'NewRestaurant',
    validate: validate
})(NewRestaurant)