import Joi from "joi";
const alphanumericSpace = /^[a-zA-Z0-9\s]+$/;

export const createStorageSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "Nome muito curto",
      "string.empty": "Nome é obrigatório",
      "any.required": "Nome é obrigatório",
      "string.pattern.base": "O nome só pode conter letras, números e espaços",
    }),
  location: Joi.string()
    .min(4)
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "Nome do local é muito curto",
      "string.empty": "Local é obrigatório",
      "any.required": "Local é obrigatório",
      "string.pattern.base": "O local só pode conter letras, números e espaços",
    }),
});

export const renameStorageSchema = Joi.object({
  newName: Joi.string()
    .min(2)
    .pattern(alphanumericSpace)
    .required()
    .messages({
      "string.min": "Nome muito curto",
      "string.empty": "Novo nome é obrigatório",
      "any.required": "Novo nome é obrigatório",
      "string.pattern.base": "O novo nome só pode conter letras, números e espaços",
    }),
});