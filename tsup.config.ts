import { defineConfig } from 'tsup';

export default defineConfig({
  outDir: 'dist',
  format: ["esm"],
  target: "esnext",
  dts: true
});