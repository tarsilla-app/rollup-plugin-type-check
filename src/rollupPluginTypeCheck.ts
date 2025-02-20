import { exec } from 'child_process';

import { Plugin } from 'rollup';

type RollupTypeCheckOptions = {
  tsconfig?: string;
};

function rollupPluginTypeCheck({ tsconfig }: RollupTypeCheckOptions = {}): Plugin {
  return {
    name: 'rollup-plugin-type-check',
    buildStart() {
      const command = tsconfig ? `tsc --noEmit --project ${tsconfig}` : 'tsc --noEmit';
      return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
          if (stdout) console.log(stdout);
          if (stderr) console.error(stderr);
          if (error) {
            reject(new Error('TypeScript type check failed', { cause: error }));
          } else {
            resolve();
          }
        });
      });
    },
  };
}

export { rollupPluginTypeCheck, type RollupTypeCheckOptions };
