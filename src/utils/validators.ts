import v8n from 'v8n'
import { HANDLE_MAX_CHARS, HANDLE_MIN_CHARS, PASSWORD_MAX_CHARS, PASSWORD_MIN_CHARS } from '../settings'

const validatePassword = (password: string): boolean => {
    return v8n()
        .not.null()
        .not.empty()
        .not.undefined()
        .string()
        .minLength(PASSWORD_MIN_CHARS)
        .maxLength(PASSWORD_MAX_CHARS)
        .pattern(/^([a-zA-Z0-9_-]+)$/)
        .test(password)
}

const validateUsername = (handle: string): boolean => {
    return v8n()
        .not.null()
        .not.empty()
        .not.undefined()
        .string()
        .minLength(HANDLE_MIN_CHARS)
        .maxLength(HANDLE_MAX_CHARS)
        .pattern(/^([a-zA-Z0-9_-]+)$/)
        .test(handle)
}

const validateName = (name: string): boolean => {
    return v8n()
        .not.null()
        .not.empty()
        .not.undefined()
        .string()
        .minLength(HANDLE_MIN_CHARS)
        .maxLength(HANDLE_MAX_CHARS)
        .pattern(/^([a-zA-Z0-9-]+)$/)
        .test(name)
}

const validateEmail = (email: string): boolean => {
    return v8n()
        .not.null()
        .not.empty()
        .not.undefined()
        .string()
        .pattern(/^(([^<>()\[\]\.,:\s@\"]+(\.[^<>()\[\]\.,:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,:\s@\"]+\.)+[^<>()[\]\.,:\s@\"]{2,})$/i)
        .test(email)
}

export { validatePassword, validateUsername, validateEmail, validateName }