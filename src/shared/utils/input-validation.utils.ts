export const nameValidation = {
  required: '입력값은 필수입니다.',
  minLength: {
    value: 1,
    message: '입력값은 최소 1자 이상이어야 합니다.',
  },
  maxLength: {
    value: 20,
    message: '입력값은 최대 20자 이하이어야 합니다.',
  },
} as const

export const descriptionValidation = {
  required: '입력값은 필수입니다.',
  minLength: {
    value: 10,
    message: '입력값은 최소 10자 이상이어야 합니다.',
  },
  maxLength: {
    value: 500,
    message: '입력값은 최대 500자 이하이어야 합니다.',
  },
} as const

export const categoryValidation = {
  required: '입력값은 필수입니다.',
} as const

export const imageValidation = {
  required: '입력값은 필수입니다.',
}
