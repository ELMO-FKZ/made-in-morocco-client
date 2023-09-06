export function validateEmail(value, refEmail, setErrors) {
    if(!new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/).test(value)){
        if (value === '') {
            setErrors('Email is required');
        } else {
            setErrors('Enter a valid email');
        }
        refEmail.current.classList.remove("newsletter__input--valid");
        refEmail.current.classList.add("newsletter__input--error");
    } else {
        setErrors('');
        refEmail.current.classList.add("newsletter__input--valid");
        refEmail.current.classList.remove("newsletter__input--error");
    }
}