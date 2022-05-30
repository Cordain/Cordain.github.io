/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export class Calculator {
  free(): void;
/**
* @returns {Calculator}
*/
  static new(): Calculator;
/**
* @param {string} buyer
* @param {number} amount
* @returns {number}
*/
  add_expense(buyer: string, amount: number): number;
/**
* @param {string} ower
* @param {number} expense_idx
* @returns {boolean}
*/
  add_ower_to_expense(ower: string, expense_idx: number): boolean;
/**
* @returns {string}
*/
  print_expenses(): string;
/**
* @returns {string | undefined}
*/
  calculate(): string | undefined;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_calculator_free: (a: number) => void;
  readonly calculator_new: () => number;
  readonly calculator_add_expense: (a: number, b: number, c: number, d: number) => number;
  readonly calculator_add_ower_to_expense: (a: number, b: number, c: number, d: number) => number;
  readonly calculator_print_expenses: (a: number, b: number) => void;
  readonly calculator_calculate: (a: number, b: number) => void;
  readonly greet: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
