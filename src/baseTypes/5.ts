/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number; // union type

union = 'union';
union = 12;


// ----------------------------------------------------------------
type enableOrDisable = 'enable' | 'disable'; // literal type

let literal: enableOrDisable; // literal type

literal = 'enable'
literal = 'disable'
