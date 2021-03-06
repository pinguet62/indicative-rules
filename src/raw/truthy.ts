/**
 * @module indicative-rules
 */

/*
* indicative-rules
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { existy } from './existy'

/**
 * Returns a boolean telling if value is truthy or not.
 * All values except following yields `true`.
 *
 * - false
 * - 0
 * - null
 * - undefined
 * - empty string
 *
 * ```js
 * const { is } = require('indicative')
 *
 * is.truthy('') // false
 * is.truthy(null) // false
 * is.truthy(false) // false
 * is.truthy(true) // true
 * is.truthy(true) // true
 * is.truthy('hello world') // true
 * ```
 */
export const truthy = (input: any): boolean => existy(input) && input !== false && input !== 0
