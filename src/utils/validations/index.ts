class Validations {
  static checkMail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true
    }
    return false
  }
  static checkMinLength(s: string, minLength: number) {
    return s.length > minLength ? true : false
  }
}

export default Validations
