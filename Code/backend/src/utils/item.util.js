import Joi from "joi";

// Função regex para garantir pelo menos uma letra
const hasLetter = /[a-zA-Z]/;
const alphanumericSpace = /^[a-zA-Z0-9\s]+$/;

const unit_of_measurement = [
  "quilogramas",
  "gramas",
  "miligramas",
  "litros",
  "mililitros",
  "unidades",
];
const validCategories = [
  "comida",
  "bebida",
];

export const createItemSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(20)
    .pattern(hasLetter, "letra")
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "O nome deve ter pelo menos 2 caracteres",
      "string.max": "Nome muito longo",
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
    .valid(...validCategories)
    .required()
    .messages({
      "any.only": "Categoria inválida",
      "string.empty": "A categoria é obrigatória",
      "any.required": "A categoria é obrigatória",
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

  unit: Joi.string()
    .valid(...unit_of_measurement)
    .required()
    .messages({
      "any.only": "Unidade de medida inválida",
      "string.empty": "A unidade de medida é obrigatória",
      "any.required": "A unidade de medida é obrigatória",
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
