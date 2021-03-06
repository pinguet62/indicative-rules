/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, ensureLength, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { RulesConfig, ValidationRulesContract } from '../../Contracts'
type ComparisonArg = Parameters<ValidationRulesContract['includes']>[0]

const MISSING_VALUE = 'includes:make sure to define substring to match'

/**
 * Enforces the field value to include a given substring.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   url: 'includes:adonisjs.com'
 * }
 *
 * // or
 * const rules = {
 *   url: [
 *     validations.includes(['adonisjs.com'])
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): ComparisonArg {
    ensureLength(args, MISSING_VALUE, 1)
    return [String(args[0])]
  },

  validate: (data, field, [substring]: ComparisonArg, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    if (skippable(fieldValue, field, config)) {
      return true
    }

    if (typeof (fieldValue) !== 'string') {
      return false
    }

    return fieldValue.includes(substring)
  },
}

export { validation as default }
