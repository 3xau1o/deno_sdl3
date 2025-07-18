import { asCString } from "../../cx.ts";

/**
 * https://wiki.libsdl.org/SDL3/SDL_InitFlags
 */
export enum SDL_InitFlags {
  /** SDL_INIT_AUDIO implies SDL_INIT_EVENTS */
  AUDIO = 0x00000010,
  /** SDL_INIT_VIDEO implies SDL_INIT_EVENTS, should be initialized on the main thread */
  VIDEO = 0x00000020,
  /** SDL_INIT_JOYSTICK implies SDL_INIT_EVENTS */
  JOYSTICK = 0x00000200,
  HAPTIC = 0x00001000,
  /** SDL_INIT_GAMEPAD implies SDL_INIT_JOYSTICK */
  GAMEPAD = 0x00002000,
  EVENTS = 0x00004000,
  /** SDL_INIT_SENSOR implies SDL_INIT_EVENTS */
  SENSOR = 0x00008000,
  /** SDL_INIT_CAMERA implies SDL_INIT_EVENTS */
  CAMERA = 0x00010000,
}

export const SDL_InitFlags_Type = "u32" satisfies Deno.NativeType;

/**
 * https://wiki.libsdl.org/SDL3/SDL_AppResult
 */
export enum SDL_AppResult {
  SDL_APP_CONTINUE, // 0
  SDL_APP_SUCCESS, // 1
  SDL_APP_FAILURE, // 2
}

/**
 * https://wiki.libsdl.org/SDL3/SDL_SetAppMetadataProperty#remarks
 */
export const SDL_PROP_APP_METADATA = {
  NAME_STRING: asCString("SDL.app.metadata.name"),
  VERSION_STRING: asCString("SDL.app.metadata.version"),
  IDENTIFIER_STRING: asCString("SDL.app.metadata.identifier"),
  CREATOR_STRING: asCString("SDL.app.metadata.creator"),
  COPYRIGHT_STRING: asCString("SDL.app.metadata.copyright"),
  URL_STRING: asCString("SDL.app.metadata.url"),
  TYPE_STRING: asCString("SDL.app.metadata.type"),
} as const satisfies Record<string, Uint8Array>;
