/**
 * A unidirectional transliteration algorithm which makes a set of substitutions on a string, and handles common edge cases.
 * @param  {String} [string='']        The String to transliterate
 * @param  {Object} [substitutions={}] The set of substitutions to make on the String. Each key should be the character(s) to replace, and its value should be the character(s) to replace it with.
 * @return {String}                    Returns a new String with the substitutions made
 */
const transliterate = (string = '', substitutions = {}) => {
  // save the string to a new variable for readability
  let str = string;

  // make a copy of the substitutions Object so that the original is not affected
  const subs = Object.assign({}, substitutions);

  // create an Object to hold any temporary substitutions
  const temps = {};

  // generates a random character from the geometric shapes block (U+25A0-25FF)
  const getRandomCodePoint = () => String.fromCodePoint(Math.floor(Math.random() * 95) + 9632);

  // save the list of inputs in order to check for feeding problems
  const inputs = Object.keys(substitutions);

  // get the list of substitutions
  Object.entries(substitutions)

    // sort the substitutions by longest string (avoids the substring problem)
    .sort(([a], [b]) => b.length - a.length)

    // for each substitution...
    .forEach(([input, replacement]) => {
      // check for feeding problem
      if (inputs.includes(replacement)) {
        // get a character to use as a temporary substitution
        let temp = getRandomCodePoint();

        // if that character has already been used, get another
        while (temp in temps) temp = getRandomCodePoint();

        // add the temporary substitution to the temps Object
        temps[temp] = replacement;

        // swap the original replacement with the temporary one
        subs[input] = temp;
      }

      // create a regular expression that searches globally for the string to replace
      const regexp = new RegExp(input, 'gu');

      // replace all matched instances of the regular expression with the new string
      // at this point, `subs` contains temporary substitutions, so those will be made
      str = str.replace(regexp, subs[input]);
    });

  // undo the temporary substitutions:
  // get the list of temporary substitutions

  Object.entries(temps)
    // for each temporary substitution that was made...
    .forEach(([temp, replacement]) => {
      // create a regular expression that searches globally for the temporary substitution to replace
      const regexp = new RegExp(temp, 'gu');

      // replace all matched instances of the temporary substitution with the original substitution
      str = str.replace(regexp, replacement);
    });

  // return the string with the substitutions made

  return str;
};
export default transliterate;
