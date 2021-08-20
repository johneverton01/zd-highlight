import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export function getDefaultConfig(pkg) {
  return {
    input: './src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
      },
      {
        file: pkg.main,
        format: 'umd',
        name: pkg.name,
        exports: 'named',
        globals: getGlobals(pkg),
      },
    ],
    external: Object.keys(getDependencies(pkg)),
    plugins: [
      commonjs(),
      vue({
        css: true,
        defaultLang: {
          script: 'ts',
          style: 'scss'
        }
      }),
      typescript({
        clean: true,
        useTsconfigDeclarationDir: true
      }),
    ],
  }
};

function getGlobals(pkg) {
  const dependencies = getDependencies(pkg);
  let obj = {};
  for (let key in dependencies) {
    obj[key] = key;
  }
  return obj;
}

function getDependencies(pkg) {
  return {
    ...(pkg.dependencies || {}),
    ...(pkg.devDependencies || {}),
    ...(pkg.peerDependencies || {}),
  };
}