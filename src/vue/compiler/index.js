/* @flow */

import { parse } from './parser/index'
import { optimize } from './optimizer'
import { generate } from './codegen/index'
import { createCompilerCreator } from './create-compiler'

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
/**
 * @func
 * @param {object} baseOptions
 * @return {object} {compile:{ast,render: string,staticRenderFns: funcs, errors: array ,tips: array}, compileToFunctions}
 */
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string, // templeate.trim()
  options: CompilerOptions
): CompiledResult {
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render, // string
    staticRenderFns: code.staticRenderFns
  }
})
