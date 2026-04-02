import { defineConfig } from "tsdown";

const tsdownConfig = defineConfig({
	entry: ["./src/index.tsx"],
	dts: true,
});

export default tsdownConfig;
