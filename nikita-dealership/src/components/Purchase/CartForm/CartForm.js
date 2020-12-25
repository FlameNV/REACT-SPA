import React from "react";
import {Formik} from "formik";
import {useHistory} from "react-router-dom";
import * as Yup from "yup";
import {StyledCartForm, StyledField, StyledFieldPlace, StyledForm} from "./CartForm.styled";

const CartForm = () => {

    const history = useHistory();

    const addressRegex = /^.+\,{1}\s{1}.+\,{1}\s{1}[0-9]+$/

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "Name is too short")
            .max(100, "Name is too long")
            .required("Required field"),
        surname: Yup.string()
            .min(2, "Surname is too short")
            .max(100, "Surname is too long")
            .required("Required field"),
        email: Yup.string().email("Email is incorrect").required("Required field"),
        phone: Yup.number()
            .typeError("Phone number is incorrect")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required("Required field"),
        address: Yup.string().matches(addressRegex, "Address is incorrect").required("Required field")
    });

    return (
        <StyledCartForm>
            <Formik initialValues={{
                firstName: "",
                surname: "",
                email: "",
                phone: "",
                address: "",
            }} validationSchema={SignupSchema} onSubmit={(values => {
                history.push("/success");
                console.log(values);
            })}>
                {({errors, touched}) => (
                    <StyledForm>
                        <StyledFieldPlace>
                            First name
                            <StyledField placeholder="Name" name="firstName"/>
                            {errors.firstName && touched.firstName ? (
                                <div>{errors.firstName}</div>
                            ) : null}
                        </StyledFieldPlace>

                        <StyledFieldPlace>
                            Surname
                            <StyledField placeholder="Surname" name="surname"/>
                            {errors.surname && touched.surname ? (
                                <div>{errors.surname}</div>
                            ) : null}
                        </StyledFieldPlace>

                        <StyledFieldPlace>
                            Email
                            <StyledField placeholder="example@mail.com" name="email" type="email"/>
                            {errors.email && touched.email ? (
                                <div>{errors.email}</div>
                            ) : null}
                        </StyledFieldPlace>

                        <StyledFieldPlace>
                            Phone
                            <StyledField placeholder="+380xxxxxxxxx" name="phone"/>
                            {errors.phone && touched.phone ? (
                                <div>{errors.phone}</div>
                            ) : null}
                        </StyledFieldPlace>

                        <StyledFieldPlace>
                            Address
                            <StyledField placeholder="City, Street, House number" name="address"/>
                            {errors.address && touched.address ? (
                                <div>{errors.address}</div>
                            ) : null}
                        </StyledFieldPlace>
                        <button type="submit">Submit</button>
                    </StyledForm>
                )}
            </Formik>
        </StyledCartForm>
    )
}

export default CartForm;