// Uso: node scripts/copiar-www.js <pasta-da-nova-versao>   (copia os arquivos do app para www/)
const fs = require('fs'), path = require('path');
const src = process.argv[2];
if (!src) { console.log('Informe a pasta da nova versão do app. Ex.: node scripts/copiar-www.js ../VetFlowCare_v10.18'); process.exit(1); }
fs.rmSync('www', { recursive: true, force: true }); fs.cpSync(src, 'www', { recursive: true });
console.log('www/ atualizado com', src);
