import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextCoreWebVitals,
  eslintConfigPrettier,
  globalIgnores(['.next/**', 'dist/**', 'src/**', 'node_modules/**']),
])
