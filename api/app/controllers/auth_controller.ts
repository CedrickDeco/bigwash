import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import { loginValidator, createValidator } from '#validators/userValidator'
import Hash from '@adonisjs/core/services/hash'

export default class AuthController {
  public async register(request: HttpContext['request'], response: HttpContext['response']) {
    try {
      // Validation des données d'entrée
      const payload = await request.validateUsing(createValidator)

      // Vérification de l'unicité du nom d'utilisateur
      const existingUserByUsername = await User.query().where('username', payload.username).first()
      if (existingUserByUsername) {
        return {
          msg: 'Username already exists',
          status: 'error',
        }
      }

      // Création de l'utilisateur
      const user = await User.create({
        username: payload.username,
        email: payload.email,
        password: payload.password,
      })

      return {
        msg: 'User registed',
        user: { id: user.id, username: user.username, email: user.email },
      }
    } catch (error) {
      return response.status(400).json({
        message: 'Validation failed',
        errors: error.messages, // Renvoie les messages d'erreur
      })
    }
  }

  public async login(request: HttpContext['request'], response: HttpContext['response']) {
    const payload = await request.validateUsing(loginValidator)

    // Récupérer l'utilisateur par son nom d'utilisateur
    const user = await User.findBy('username', payload.username)

    if (!user) {
      return response.status(401).send({ msg: 'Invalid credentials' });
    }

    // Vérifier le mot de passe
    const passwordVerified = await Hash.verify(user.password, payload.password)

    if (!passwordVerified) {
      return response.status(401).send({ msg: 'Invalid credentials' })
    }

    // Création du token
    const token = await User.accessTokens.create(user, ['*'], {
      expiresIn: '1d',
    })

    if (!token) {
      return response.status(500).send({ msg: 'Failed to create token' })
    }

    return {
      msg: 'User logged',
      token,
    }
  }

  public async me({ auth, response }: HttpContext) {
    return response.json(auth.use('api').user)
  }
}
