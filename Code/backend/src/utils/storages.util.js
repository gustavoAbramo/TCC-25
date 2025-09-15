import Joi from "joi";
const alphanumericSpace = /^[a-zA-Z0-9\s]+$/;
const hasLetter = /[a-zA-Z]/;

export const createStorageSchema = Joi.object({
  name: Joi.string()
    .min(5)
    .max(20)
    .pattern(hasLetter, "letra")
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "Nome muito curto",
      "string.max": "Nome muito longo",
      "string.empty": "Nome é obrigatório",
      "string.pattern.name": "O nome deve conter pelo menos uma letra",
      "any.required": "Nome é obrigatório",
      "string.pattern.base": "O nome só pode conter letras, números e espaços",
    }),
  location: Joi.string()
    .min(4)
    .max(20)
    .pattern(alphanumericSpace)
    .pattern(hasLetter, "letra")
    .required()
    .messages({
      "string.min": "Nome do local é muito curto",
      "string.max": "Nome do local é muito longo",
      "string.empty": "Local é obrigatório",
      "any.required": "Local é obrigatório",
      "string.pattern.name": "O nome do local deve conter pelo menos uma letra",
      "string.pattern.base": "O local só pode conter letras, números e espaços",
    }),
});

export const renameStorageSchema = Joi.object({
  newName: Joi.string()
    .min(2)
    .max(20)
    .pattern(alphanumericSpace)
    .pattern(hasLetter, "letra")
    .required()
    .messages({
      "string.min": "Nome muito curto",
      "string.max": "Nome muito longo",
      "string.pattern.name": "O nome deve conter pelo menos uma letra",
      "string.empty": "Novo nome é obrigatório",
      "any.required": "Novo nome é obrigatório",
      "string.pattern.base": "O novo nome só pode conter letras, números e espaços",
    }),
});