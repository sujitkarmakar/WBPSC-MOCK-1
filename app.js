const SET=new URLSearchParams(location.search).get("set")==="2"?2:1;
const Q=MOCKS[SET];
document.getElementById("ttl").textContent="WBPSC Misc Prelims · Mock "+SET;
document.title="WBPSC Misc Prelims Mock "+SET;
const N=Q.length,a=Array(N).fill(-1);let i=0,left=90*60,done=false;
const L="ABCD",$=id=>document.getElementById(id);
function draw(){if(done)return;const x=Q[i],ans=a[i];
let h=`<div class="card"><small>Q.${i+1} / ${N} · ${i<75?"Section A":"Section B · Arithmetic"} · +2 / −⅔</small><p style="font-weight:600;margin:6px 0">${i+1}. ${x.t}</p>`;
x.o.forEach((o,k)=>{let c="opt";if(ans>=0){if(k==x.c)c+=" g";else if(k==ans)c+=" r"}h+=`<button class="${c}" onclick="pick(${k})">(${L[k]}) ${o}</button>`});
if(ans>=0&&x.n)h+=`<div class="note">📝 ${x.n}</div>`;
h+=`</div><div class="nav"><button onclick="go(-1)">← Prev</button><button onclick="go(1)">Next →</button></div><div class="card" style="margin-top:10px"><div class="pal">`;
Q.forEach((y,k)=>{let c=a[k]<0?"":(a[k]==y.c?"g":"r");if(k==i)c+=" cur";h+=`<button class="${c}" onclick="i=${k};draw()">${k+1}</button>`});
h+=`</div></div><button class="sub" onclick="fin()">Submit Test</button>`;$("app").innerHTML=h}
function pick(k){if(a[i]>=0)return;a[i]=k;draw()}
function go(d){i=Math.max(0,Math.min(N-1,i+d));draw()}
function fin(){done=true;let c=0,w=0;a.forEach((v,k)=>{if(v>=0){v==Q[k].c?c++:w++}});
const s=(c*2-w*2/3).toFixed(2);
$("app").innerHTML=`<div class="card"><h2>Result</h2><p>Correct: <b>${c}</b> · Wrong: <b>${w}</b> · Skipped: <b>${N-c-w}</b></p><p>Score: <b>${s}</b> / ${N*2}</p><p><small>+2 per correct, −⅔ per wrong.</small></p><button class="sub" onclick="location.reload()">Retake</button></div>`}
setInterval(()=>{if(done)return;if(--left<=0){fin();return}$("tm").textContent=String(left/60|0).padStart(2,"0")+":"+String(left%60).padStart(2,"0")},1000);
draw();
