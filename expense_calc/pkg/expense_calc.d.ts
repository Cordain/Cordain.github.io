/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
* Handler for `console.log` invocations.
*
* If a test is currently running it takes the `args` array and stringifies
* it and appends it to the current output of the test. Otherwise it passes
* the arguments to the original `console.log` function, psased as
* `original`.
* @param {Array<any>} args
*/
export function __wbgtest_console_log(args: Array<any>): void;
/**
* Handler for `console.debug` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_debug(args: Array<any>): void;
/**
* Handler for `console.info` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_info(args: Array<any>): void;
/**
* Handler for `console.warn` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_warn(args: Array<any>): void;
/**
* Handler for `console.error` invocations. See above.
* @param {Array<any>} args
*/
export function __wbgtest_console_error(args: Array<any>): void;
/**
*/
export class Calculator {
  free(): void;
/**
* @returns {Promise<Calculator>}
*/
  static new(): Promise<Calculator>;
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
* @returns {Promise<Calculator>}
*/
  update_target_currency(target_currency: string): Promise<Calculator>;
/**
* @returns {any}
*/
  calculate(): any;
}
/**
* Runtime test harness support instantiated in JS.
*
* The node.js entry script instantiates a `Context` here which is used to
* drive test execution.
*/
export class WasmBindgenTestContext {
  free(): void;
/**
* Creates a new context ready to run tests.
*
* A `Context` is the main structure through which test execution is
* coordinated, and this will collect output and results for all executed
* tests.
*/
  constructor();
/**
* Inform this context about runtime arguments passed to the test
* harness.
*
* Eventually this will be used to support flags, but for now it's just
* used to support test filters.
* @param {any[]} args
*/
  args(args: any[]): void;
/**
* Executes a list of tests, returning a promise representing their
* eventual completion.
*
* This is the main entry point for executing tests. All the tests passed
* in are the JS `Function` object that was plucked off the
* `WebAssembly.Instance` exports list.
*
* The promise returned resolves to either `true` if all tests passed or
* `false` if at least one test failed.
* @param {any[]} tests
* @returns {Promise<any>}
*/
  run(tests: any[]): Promise<any>;
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
  readonly calculator_update_target_currency: (a: number, b: number, c: number) => number;
  readonly calculator_calculate: (a: number, b: number) => void;
  readonly greet: () => void;
  readonly __wbgt_should_create_request_0: (a: number) => void;
  readonly __wbg_wasmbindgentestcontext_free: (a: number) => void;
  readonly wasmbindgentestcontext_new: () => number;
  readonly wasmbindgentestcontext_args: (a: number, b: number, c: number) => void;
  readonly wasmbindgentestcontext_run: (a: number, b: number, c: number) => number;
  readonly __wbgtest_console_log: (a: number) => void;
  readonly __wbgtest_console_debug: (a: number) => void;
  readonly __wbgtest_console_info: (a: number) => void;
  readonly __wbgtest_console_warn: (a: number) => void;
  readonly __wbgtest_console_error: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha7a59fb1f64e9625: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke0_mut__h218690321d440258: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke3_mut__h2970a19e68ab198a: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h025189b833907f36: (a: number, b: number, c: number, d: number) => void;
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
