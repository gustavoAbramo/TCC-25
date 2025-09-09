import Joi from "joi";

// Função regex para garantir pelo menos uma letra
const hasLetter = /[a-zA-Z]/;
const alphanumericSpace = /^[a-zA-Z0-9\s]+$/;

export const createItemSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .pattern(hasLetter, "letra")
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "O nome deve ter pelo menos 2 caracteres",
      "string.empty": "O nome é obrigatório",
      "string.pattern.name": "O nome deve conter pelo menos uma letra",
      "any.required": "O nome é obrigatório",
      "string.pattern.base": "O nome só pode conter letras, números e espaços",
    }),

  description: Joi.string().optional(),

  expiration: Joi.string()
    .custom((value, helpers) => {
      if (isNaN(Date.parse(value))) {
        return helpers.error("any.invalid");
      }
      return value;
    })
    .required()
    .messages({
      "any.invalid": "Data de validade inválida",
      "string.empty": "Data de validade é obrigatória",
      "any.required": "Data de validade é obrigatória",
    }),

  category: Joi.string()
    .min(2)
    .pattern(hasLetter, "letra")
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "A categoria deve ter pelo menos 2 caracteres",
      "string.empty": "A categoria é obrigatória",
      "string.pattern.name": "A categoria deve conter pelo menos uma letra",
      "any.required": "A categoria é obrigatória",
      "string.pattern.base": "A categoria só pode conter letras, números e espaços",
    }),

  quantity: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "A quantidade deve ser um número",
      "number.integer": "A quantidade deve ser um número inteiro",
      "number.positive": "A quantidade deve ser um número positivo",
      "any.required": "A quantidade é obrigatória",
    }),

  storageId: Joi.number()
    .integer()
    .positive()
    .required()
    .messages({
      "number.base": "Informe um estoque válido",
      "number.integer": "Informe um estoque válido",
      "number.positive": "Informe um estoque válido",
      "any.required": "Informe um estoque válido",
    }),
});
