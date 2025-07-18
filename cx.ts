const enc = new TextEncoder()

export function asCString(str: string): Uint8Array {
  return enc.encode(`${str}\0`);
}

export function asJsString(buffer: BufferSource): string {
    return new TextDecoder().decode(buffer).replace(/\0/g, '');
}