/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { cast, ensureLength, skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { under } from '../../raw/under'
import { ValidationRulesContract, RulesConfig } from '../../Contracts'

type ComparisonArg = Parameters<ValidationRulesContract['under']>[0]

const MISSING_VALUE = 'under:make sure to define max value'
const INVALID_TYPE = 'under:max value must be defined as an integer'

/**
 * Enforces the field value to be under the defined value.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   age: 'integer|under:60'
 * }
 *
 * // or
 * const rules = {
 *   age: [
 *     validations.integer(),
 *     validations.under(60)
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  compile (args): any[] {
    ensureLength(args, MISSING_VALUE, 1)
    const minValue = cast(args[0], 'float', INVALID_TYPE)
    return [minValue]
  },

  validate: (data, field, [maxValue]: ComparisonArg, config: RulesConfig) => {
    let fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || under(fieldValue, maxValue)
  },
}

export { validation as default }
