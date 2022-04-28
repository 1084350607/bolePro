import Validations from "@/src/utils/validations"

export interface ErrorType {
  email?: string
  psw?: string
}

class SignupValidations {
  email: string
  psw: string
  pswMinLength: number

  constructor(email: string, psw: string, pswMinLength: number) {
    this.email = email
    this.psw = psw
    this.pswMinLength = pswMinLength
  }

  checkSignupValidations() {
    let errors: ErrorType = {}
    if (!Validations.checkMail(this.email)) {
      errors["email"] = "invaild email"
    }

    if (!Validations.checkMinLength(this.psw, this.pswMinLength)) {
      errors["psw"] = `password should be of ${this.pswMinLength} characters at least`
    }

    return errors
  }
}

export default SignupValidations
