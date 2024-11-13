import vine from '@vinejs/vine'


/**
 * Validates the creation of a user
 */
export const createValidator = vine.compile(
  vine.object({
    username: vine.string().trim().minLength(3),
    password: vine.string().trim().minLength(6),
    email: vine.string().trim().email()
  })
)
  
export const loginValidator = vine.compile(
  vine.object({
    username: vine.string(),
    password: vine.string(),
  })
)

/**
 * Validates the update of a user
 */
export const updateUserValidator = vine.object({
    username: vine.string()
      .trim()
      .minLength(3)
      .optional() // Le nom d'utilisateur est optionnel lors de la mise à jour.
      ,

    password: vine.string()
      .trim()
      .minLength(6)
      .optional(), // Le mot de passe est également optionnel lors de la mise à jour.

    email: vine.string()
      .trim()
      .email()
      .optional() // L'email est optionnel mais doit rester valide s'il est fourni.
      
  })