/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { skippable, getValue } from 'indicative-utils'
import { ValidationDefination } from 'indicative-compiler'

import { ipv6 } from '../../raw/ipv6'
import { RulesConfig } from '../../Contracts'

/**
 * Enforces the field value is a valid `ipv6` address.
 *
 * ```ts
 * import { validations } from 'indicative/validator'
 *
 * const rules = {
 *   ip_address: 'ipv6'
 * }
 *
 * // or
 * const rules = {
 *   ip_address: [
 *     validations.ipv6()
 *   ]
 * }
 * ```
 */
const validation: ValidationDefination = {
  async: false,

  validate: (data, field, _args, config: RulesConfig) => {
    const fieldValue = getValue(data, field)
    return skippable(fieldValue, field, config) || ipv6(fieldValue)
  },
}

export { validation as default }
