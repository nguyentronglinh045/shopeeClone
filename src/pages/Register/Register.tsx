import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/input'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)

  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    (data) => {
      const password = getValues('password')
      console.log(password)
    }
  )

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
                rules={rules.email}
              />
              <Input
                name='password'
                placeholder='Password'
                className='mt-2'
                type={'password'}
                errorMessage={errors.password?.message}
                register={register}
                rules={rules.password}
              />
              <Input
                name='confirm_password'
                placeholder='Confim Password'
                className='mt-2'
                type={'password'}
                errorMessage={errors.confirm_password?.message}
                register={register}
                rules={rules.confirm_password}
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
