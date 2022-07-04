import { useField } from "formik";
import s from './TextArea.module.css';

const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {/* <label htmlFor={props.id || props.name}>{label}</label> */}
            <textarea className="textarea" {...field} {...props} />
            { hasError && (
                <div className={s.error}>{meta.error}</div>
            ) }
        </div>
    );
};

export default TextArea;