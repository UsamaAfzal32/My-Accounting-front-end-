import * as Yup from 'yup'
const SignUpSchma = () => {
  return Yup.object({
         email: Yup.string().email().required('enter your email'),
         password:Yup.string().min(6,'minimum six charcter').required('enter your password')

  }
   
  )
}

export default SignUpSchma