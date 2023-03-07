import RegisterHeader from '../components/RegisterHeader'
import Footer from '../components/Footer'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div className=''>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
