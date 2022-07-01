import * as Yup from "yup";

const ValidationSchema = 
        Yup.object({
            login: Yup.string()
                .max(25, "Must be 25 characters or less")
                .required("Required"),
            password: Yup.string()
                .min(8, "Must be longer than 8 characters")
                .required("Required"),
            email: Yup.string()
                .email("Invalid email addresss`")
                .required("Required"),
            rememberMe: Yup.boolean(),
        })

export default ValidationSchema;