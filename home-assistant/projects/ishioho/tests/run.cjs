/* Isolated suites against public sources and synthetic examples; no HA connection. */
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),{spawnSync}=require('node:child_process');
const root=path.resolve(__dirname,'..'),tempRoot=fs.realpathSync(os.tmpdir());
const stage=fs.mkdtempSync(path.join(tempRoot,'ishioho-tests-'));
const sourceFiles={
 'pallet-panel.js':'pallet-house/pallet-panel.js',
 'ishioho-panel.js':'ishioho/ishioho-panel.js',
 'ishioho-directory.js':'ishioho/ishioho-directory.js',
 'ishioho-style.js':'ishioho/ishioho-style.js',
 'ishioho-environment.js':'ishioho/ishioho-environment.js',
 'ishioho-weather-visuals.js':'ishioho/ishioho-weather-visuals.js',
 'ishioho-dashboard.json':'examples/dashboard.json',
 'test-ishioho-panel.cjs':'tests/test-ishioho-panel.cjs',
 'test-ishioho-directory.cjs':'tests/test-ishioho-directory.cjs',
 'test-ishioho-environment.cjs':'tests/test-ishioho-environment.cjs',
 'test-pallet-panel.cjs':'tests/test-pallet-panel.cjs'
};
let failed=false;
try {
 for(const [name,relative] of Object.entries(sourceFiles))fs.copyFileSync(path.join(root,relative),path.join(stage,name));
 fs.writeFileSync(path.join(stage,'ishioho-catalog.json'),JSON.stringify(require('./fixtures/catalog.cjs')));
 fs.mkdirSync(path.join(stage,'ishioho-assets'));
 for(const name of fs.readdirSync(path.join(root,'ishioho')).filter(name=>/\.(svg|png)$/.test(name)))fs.copyFileSync(path.join(root,'ishioho',name),path.join(stage,'ishioho-assets',name));
 for(const test of ['test-ishioho-panel.cjs','test-ishioho-directory.cjs','test-ishioho-environment.cjs','test-pallet-panel.cjs']) {
  console.log('\n'+test);
  const result=spawnSync(process.execPath,[path.join(stage,test)],{cwd:stage,stdio:'inherit'});
  if(result.error||result.status!==0)failed=true;
 }
} finally {
 const resolved=fs.realpathSync(stage);
 if(path.dirname(resolved)!==tempRoot||!path.basename(resolved).startsWith('ishioho-tests-'))throw Error('Unexpected test directory');
 fs.rmSync(resolved,{recursive:true,force:true});
}
process.exitCode=failed?1:0;
