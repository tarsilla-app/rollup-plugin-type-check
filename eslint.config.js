import { library } from '@tarsilla/eslint-config/library';

const config = library({
  ignores: ['**/.vscode/', '**/node_modules/', '**/lib/'],
});

export default config;
