import * as Yup from "yup";

export const maxLengthCreator = (maxLength) => (value) => {
    return (Yup.object({
        value: Yup.string()
            .max(maxLength, `Must be ${maxLength} characters or less`)
            .required("Required")
    }))
}
