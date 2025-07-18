import { asCString } from "./cx.ts";
import { SDL3_ffi_error } from "./SDL3/SDL_error/index.ts";
import {
  SDL3_ffi_init,
  SDL_InitFlags,
  SDL_PROP_APP_METADATA,
} from "./SDL3/SDL_init/index.ts";

import { assertEquals } from "@std/assert";
import { expect } from "@std/expect";

const SDL3 = Deno.dlopen("/usr/local/lib/libSDL3.so", {
  ...SDL3_ffi_init,
  ...SDL3_ffi_error,
});

Deno.test("SDL3 Init", async (t) => {
  assertEquals(SDL3.symbols.SDL_Init(SDL_InitFlags.VIDEO), true);

  expect(SDL3.symbols.SDL_WasInit(SDL_InitFlags.VIDEO)).not.toBe(0);

  const was_init = SDL3.symbols.SDL_WasInit(SDL_InitFlags.VIDEO);
  console.log("SDL was initialized with VIDEO:", was_init);

  await t.step("Set app metadata", () => {
    const name = "DSDL3";
    const version = "1.0";
    const identifier = "com.example.demo";
    assertEquals(
      SDL3.symbols.SDL_SetAppMetadata(
        asCString(name),
        asCString(version),
        asCString(identifier),
      ),
      true,
    );
  });

  await t.step("Set prop metadata", () => {
    const prop = "author_test";

    const res = SDL3.symbols.SDL_SetAppMetadataProperty(
      SDL_PROP_APP_METADATA.CREATOR_STRING,
      asCString(prop),
    );

    const err: Deno.PointerValue<unknown> = SDL3.symbols.SDL_GetError();
    if (err !== null) {
      console.error("read Error:", err);
      // Decode the error message from the pointer
      const errorView = new Deno.UnsafePointerView(err);
      const errorMessage = errorView.getCString();
      console.log("SDL Error:", errorMessage);
    } else {
      console.log("No SDL Error", err, res);
    }
    assertEquals(
      res,
      true,
    );

    assertEquals(
      SDL3.symbols.SDL_GetAppMetadataProperty(
        SDL_PROP_APP_METADATA.CREATOR_STRING,
      ),
      asCString(prop) as any,
    );
  });

  assertEquals(SDL3.symbols.SDL_IsMainThread(), true);

  assertEquals(SDL3.symbols.SDL_Quit(), undefined);
});

addEventListener("unload", () => {
  SDL3.close();
  console.log("SDL library closed.");
});
