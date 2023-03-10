import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/input'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string

}

export default function Login() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()
  const rules = getRules()

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
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập</div>
              {/* <div className='mt-8'>
                <input
                  autoComplete='on'
                  type='email'
                  name='email'
                  placeholder='Email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'>Email không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <input
                  autoComplete='on'
                  type='password'
                  name='password'
                  placeholder='Password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div> */}
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
                className='mt-3'
                type={'password'}
                errorMessage={errors.password?.message}
                register={register}
                rules={rules.password}
              />
              <div className='mt-3'>
                <button
                  type='submit'
                  className='w-full bg-orange py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center gap-2'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
