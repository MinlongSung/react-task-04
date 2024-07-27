import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    organization: [
      {
        validator: Validators.required,
        message: 'Introduce una organización',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);
