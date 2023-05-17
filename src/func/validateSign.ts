export function validateSign(
  validate: string,
  validateText: string,
  type: string
) {
  const validateComponent = document.getElementById(
    `${validate}`
  ) as HTMLInputElement | null;
  const errorNextBox = document.getElementById(
    `${validateText}`
  ) as HTMLSpanElement | null;
  const EMAIL_PATTERN =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{0,3}$/i;
  const PASSWORD_PATTERN = /^(?=.*?[0-9a-zA-Z])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const USERNAME_PATTERN = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  const PATTERNS = [EMAIL_PATTERN, PASSWORD_PATTERN, USERNAME_PATTERN];
  const TYPES = ['email', 'password', 'username'];
  if (validateComponent !== null && errorNextBox !== null) {
    for (let i = 0; i < 3; i++) {
      if (type === TYPES[i]) {
        !validateComponent.value.match(PATTERNS[i])
          ? errorNextBox.classList.remove('hide')
          : errorNextBox.classList.add('hide');
      }
    }
  }
}
