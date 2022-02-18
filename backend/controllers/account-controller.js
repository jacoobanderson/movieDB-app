import { User } from '../models/user.js'

/**
 * The account controller
 */
export class AccountController {
  /**
   * Registers a new user.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   */
  async register (req, res) {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      await user.save()
      res.status(200).json({ type: 'success', text: 'Your account was created.' })
    } catch (error) {
      res.status(500).json({ type: 'danger', text: error.message })
    }
  }

  /**
   * Generates session and the user logs in.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   * @param {Function} next - Express next middleware function.
   */
  async login (req, res, next) {
    try {
      const user = await User.authenticate(req.body.username, req.body.password)
      req.session.regenerate((err) => {
        if (err) {
          next(err)
        } else {
          req.session.username = user.username
          res.status(200).json({ type: 'success', text: 'You are now logged in.' })
        }
      })
    } catch (error) {
      res.status(500).json({ type: 'danger', text: error.message })
    }
  }

  /**
   * Checks if the user is anonomyous or not.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   * @param {Function} next - Express next middleware function.
   */
  anonymousCheck (req, res, next) {
    const error = new Error('Not Found')
    error.status = 404
    !req.session.username ? next() : next(error)
  }

  /**
   * Checks if the user is logged in or not.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   * @param {Function} next - Express next middleware function.
   */
  loggedInCheck (req, res, next) {
    const error = new Error('Not Found')
    error.status = 404
    req.session.username ? next() : next(error)
  }

  /**
   * Destroys the session cookie and logs the user out.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   * @param {Function} next - Express next middleware function.
   */
  async logout (req, res, next) {
    req.session.destroy((error) => {
      error ? next(error) : res.status(200).json({ type: "success", text: "You have successfully logged out." })
    })
  }
}