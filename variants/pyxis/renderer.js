// SIGILFAE PYXIS renderer · upload-box chest with real file-input
// Token: ,

export function drawChest(host, opts = {}){
  const box = document.createElement('div');
  box.className = 'pyxis-box';
  const colour = opts.hasFile ? '#52a86b' : '#b9a4f5';
  const bgColour = opts.hasFile ? 'rgba(82,168,107,0.3)' : 'rgba(185,164,245,0.15)';
  box.style.cssText = `
    position:absolute;left:50%;top:32%;transform:translateX(-50%);
    width:14px;height:14px;
    border:1.5px solid ${colour};background:${bgColour};
    box-shadow:0 0 8px ${colour};border-radius:1px;cursor:pointer;
  `;
  box.innerHTML = `
    <span style="position:absolute;left:50%;top:2px;transform:translateX(-50%);width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;border-bottom:4px solid ${colour}"></span>
    <span style="position:absolute;left:50%;top:6px;transform:translateX(-50%);width:1.5px;height:5px;background:${colour}"></span>
  `;
  host.appendChild(box);
  return box;
}

export function attachBehaviour(fairy, opts = {}){
  // fairy = the {el, idx, sp, ...} instance
  // Add a hidden file input
  const input = document.createElement('input');
  input.type = 'file';
  input.style.display = 'none';
  fairy.el.appendChild(input);
  input.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    fairy.hasFile = true;
    fairy.fileName = file.name;
    fairy.el.classList.add('has-file');
    if (opts.onFile) opts.onFile(fairy, file);
  });
  // wire the box to the input
  const box = fairy.el.querySelector('.pyxis-box');
  if (box){
    box.addEventListener('click', e => {
      e.stopPropagation();
      input.click();
    });
  }
}

export const meta = {
  binomial: 'SIGILFAE PYXIS',
  glyph: ',',
  parent: 'NOTAE',
  author: 'UNKLE_DAVID_BOWIE',
  born: '2026-05-06'
};
