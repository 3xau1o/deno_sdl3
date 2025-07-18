import { SDL_InitFlags_Type } from "./SDL_init_data.ts";

/**
 * https://wiki.libsdl.org/SDL3/CategoryInit#functions
 */
export const SDL3_ffi_init = {
  /**
   * https://wiki.libsdl.org/SDL3/SDL_GetAppMetadataProperty
   * ```c
   * const char * SDL_GetAppMetadataProperty(const char *name);
   * ```
   */
  SDL_GetAppMetadataProperty: {
    parameters: ["buffer"],
    result: "buffer",
  },
  /**
   * https://wiki.libsdl.org/SDL3/SDL_Init
   * ```c
   * bool SDL_Init(SDL_InitFlags flags);
   * ```
   */
  SDL_Init: {
    parameters: [SDL_InitFlags_Type],
    result: "bool",
  },
  /**
   * https://wiki.libsdl.org/SDL3/SDL_InitSubSystem
   * ```c
   * bool SDL_InitSubSystem(SDL_InitFlags flags);
   * ```
   */
  SDL_InitSubSystem: {
    parameters: [SDL_InitFlags_Type],
    result: "bool",
  },
  /**
   * https://wiki.libsdl.org/SDL3/SDL_IsMainThread
   * ```c
   * bool SDL_IsMainThread(void);
   * ```
   */
  SDL_IsMainThread: {
    parameters: [],
    result: "bool",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_Quit
   * ```c
   * void SDL_Quit(void);
   * ```
   */
  SDL_Quit: {
    parameters: [],
    result: "void",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_QuitSubSystem
   * ```c
   * void SDL_QuitSubSystem(SDL_InitFlags flags);
   * ```
   */
  SDL_QuitSubSystem: {
    parameters: [SDL_InitFlags_Type],
    result: "void",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_RunOnMainThread
   * ```c
   * bool SDL_RunOnMainThread(SDL_MainThreadCallback callback, void *userdata, bool wait_complete);
   * ```
   */
  SDL_RunOnMainThread: {
    parameters: ["function", "pointer", "bool"],
    result: "bool",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_SetAppMetadata
   * ```c
   * bool SDL_SetAppMetadata(const char *appname, const char *appversion, const char *appidentifier);
   * ```
   */
  SDL_SetAppMetadata: {
    parameters: ["buffer", "buffer", "buffer"],
    result: "bool",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_SetAppMetadataProperty
   * ```c
   * bool SDL_SetAppMetadataProperty(const char *name, const char *value);
   * ```
   */
  SDL_SetAppMetadataProperty: {
    parameters: ["buffer", "buffer"],
    result: "bool",
  },

  /**
   * https://wiki.libsdl.org/SDL3/SDL_WasInit
   * ```c
   * SDL_InitFlags SDL_WasInit(SDL_InitFlags flags);
   * ```
   */
  SDL_WasInit: {
    parameters: [SDL_InitFlags_Type],
    result: SDL_InitFlags_Type,
  },
} as const satisfies Deno.ForeignLibraryInterface;
