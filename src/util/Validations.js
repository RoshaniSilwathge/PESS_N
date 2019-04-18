export const required = value => (value ? undefined : 'Required')
export const selectRequired = value => value && value !== 'default' ? undefined : 'Required';
export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const telephone = value => value && !/^[0][0-9]{9}$/i.test(value) ? 'Invalid telephone number' : undefined;