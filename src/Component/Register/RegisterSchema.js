import * as Yup from 'yup'

const RegisterSchema = () => {
  return Yup.object ({
      name: Yup.string().required("Enter a Name").min(3,"Name is to Short").max(15,"Name is to long"),
      email: Yup.string().required("Enter a Email").min(8,"Minimum eight digit").max(25,"email is to long").email("invalid email"),
      password: Yup.string().required("Enter a password").min(6,"minimum six character ").max(15,"Maxmimum 15 character"),
      confirmpassword:Yup.string().required('Confirm passwrd').oneOf([Yup.ref("password"), null], "password not  match")

  }
   
   
  )
}

export default RegisterSchema