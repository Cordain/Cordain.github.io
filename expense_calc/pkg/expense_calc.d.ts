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
* @param {string} currency
* @param {boolean} buyer_included
* @param {any[]} owers
* @returns {boolean}
*/
  add_expense(buyer: string, amount: number, currency: string, buyer_included: boolean, owers: any[]): boolean;
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
* @returns {string}
*/
  get_result(): string;
/**
* @returns {string}
*/
  get_currencies(): string;
/**
* @param {string} currency
* @returns {string | undefined}
*/
  confirm_currency(currency: string): string | undefined;
/**
* @param {string} target_currency
* @returns {Promise<any>}
*/
  calculate(target_currency: string): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_calculator_free: (a: number) => void;
  readonly calculator_new: () => number;
  readonly calculator_add_expense: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
  readonly calculator_add_ower_to_expense: (a: number, b: number, c: number, d: number) => number;
  readonly calculator_print_expenses: (a: number, b: number) => void;
  readonly calculator_get_result: (a: number, b: number) => void;
  readonly calculator_get_currencies: (a: number, b: number) => void;
  readonly calculator_confirm_currency: (a: number, b: number, c: number, d: number) => void;
  readonly calculator_calculate: (a: number, b: number, c: number) => number;
  readonly greet: () => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he30a1ff07f570f6c: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__hafa1e32533bc30ec: (a: number, b: number, c: number, d: number) => void;
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
