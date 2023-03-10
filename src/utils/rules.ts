import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: { value: true, message: 'Email là bắt buộc' },
    pattern: {
      value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài thiểu 5 ký tự'
    }
  },
  password: {
    required: { value: true, message: 'Password là bắt buộc' },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài thiểu 6 ký tự'
    }
  },
  confirm_password: {
    required: { value: true, message: 'Nhập lại password là bắt buộc' },
    maxLength: {
      value: 160,
      message: 'Độ dài tối đa 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài thiểu 6 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Xác nhận password không khớp'
        : undefined
  }
})
