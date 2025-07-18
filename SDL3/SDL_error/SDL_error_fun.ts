/**
 * https://wiki.libsdl.org/SDL3/CategoryError
 *
 * list them using this sequence
 SDL_ClearError
SDL_GetError
SDL_OutOfMemory
SDL_SetError
SDL_SetErrorV
 */
export const SDL3_ffi_error = {
  /**
   * https://wiki.libsdl.org/SDL3/SDL_ClearError
   * ```c
   * bool SDL_ClearError(void);
   * ```
   */
  SDL_ClearError: {
    parameters: [],
    result: "bool",
  },
  /**
   * https://wiki.libsdl.org/SDL3/SDL_GetError
   * ```c
   * const char * SDL_GetError(void);
   * ```
   */
  SDL_GetError: {
    parameters: [],
    result: "buffer",
  },
  /**
   * https://wiki.libsdl.org/SDL3/SDL_OutOfMemory
   * ```c
   * bool SDL_OutOfMemory(void);
   * ```
   */
  SDL_OutOfMemory: {
    parameters: [],
    result: "bool",
  },
  // /**
  //  * https://wiki.libsdl.org/SDL3/SDL_SetError
  //  * ```c
  //  * bool SDL_SetError(const char *fmt, ...);
  //  * ```
  //  * 
  //  * TODO check fmt
  //  */
  // SDL_SetError: {
  //   parameters: ["buffer"],
  //   result: "bool",
  // },
  // /**
  //  * https://wiki.libsdl.org/SDL3/SDL_SetErrorV
  //  * ```c
  //  * bool SDL_SetErrorV(const char *fmt, va_list ap);
  //  * ```
  //  */
  // SDL_SetErrorV: {
  //   parameters: ["buffer", "pointer"],
  //   result: "bool",
  // },
} as const satisfies Deno.ForeignLibraryInterface;
