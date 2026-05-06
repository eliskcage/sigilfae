// SIGILFAE NOTAE renderer · base species · amber pentagon chest
// Token: .

export function drawChest(host, opts = {}){
  // host = parent DOM element (the fairy body)
  // opts: { state, hasFile, z, isPurple }
  const pent = document.createElement('div');
  pent.className = 'pent';
  pent.style.cssText = `
    position:absolute;left:50%;top:38%;transform:translateX(-50%);
    width:7px;height:7px;
    background:${opts.state === 'complete' ? '#52a86b' : '#d4a544'};
    clip-path:polygon(50% 0,100% 38%,82% 100%,18% 100%,0 38%);
    box-shadow:0 0 ${opts.state === 'in-progress' ? '16px' : '10px'} #ffc04a;
    animation:pentPulse 2s infinite ease-in-out;
  `;
  host.appendChild(pent);
  return pent;
}

export const meta = {
  binomial: 'SIGILFAE NOTAE',
  glyph: '.',
  parent: null,
  author: 'UNKLE_ROAL_DAHL',
  born: '2026-05-06'
};
