import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { schema, Schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'
import Input from 'src/components/input'
import { registerAccount } from 'src/apis/auth.api'

type FormData = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                name='email'
                placeholder='Email'
                className='mt-8'
                type={'email'}
                errorMessage={errors.email?.message}
                register={register}
              />
              <Input
                name='password'
                placeholder='Password'
                className='mt-2'
                type={'password'}
                errorMessage={errors.password?.message}
                register={register}
              />
              <Input
                name='confirm_password'
                placeholder='Confim Password'
                className='mt-2'
                type={'password'}
                errorMessage={errors.confirm_password?.message}
                register={register}
              />
              <div className='mt-2'>
                <button className='w-full bg-orange py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>

              <div className='mt-8 flex items-center justify-center gap-2'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
