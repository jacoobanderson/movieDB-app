import { User } from '../models/user.js'

/**
 * The private controller.
 */
export class PrivateController {
  /**
   * Authorizes.
   *
   * @param {object} req - Express req object.
   * @param {object} res - Express res object.
   * @param {Function} next - Express next middleware function.
   * @returns {Function} Express next middleware function.
   */
  async auth (req, res, next) {
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        const user = await User.findOne({ _id: req.params.id })
        console.log(req.session.username)
        if (!user) {
            const error = new Error('Not found')
            error.status = 404
            return next(error)
        }
        // If the user is anonymous, throw 404.
        if (!req.session.username) {
            const error = new Error('Not found')
            error.status = 404
            return next(error)
        // If another user tries to access someone elses page throw 403.
        } else if (req.params.id && (user.username !== req.session.username)) {
            const error = new Error('Forbidden')
            error.status = 403
            return next(error)
        }
        next()
    } else {
        const error = new Error('Not found')
        error.status = 404
        next(error)
    }
  }

  async access (req, res, next) {
    res.status(200).json({success: true, text: "You got access to the private data in this route"})
  }
}