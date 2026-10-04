const ZIP_URL = "./downloads/MERN_Practicals_Full.zip";
const modal = document.getElementById("modal");
const countdownText = document.getElementById("countdownText");
const progressBar = document.getElementById("progressBar");
let timer = null;

function startDownload(){
  const a=document.createElement("a");
  a.href=ZIP_URL;
  a.download="MERN_Practicals_Full.zip";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function openDownload(){
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  let n=3;
  progressBar.style.width="0%";
  countdownText.innerHTML=`Starting download in <strong>${n}</strong>…`;
  clearInterval(timer);
  timer=setInterval(()=>{
    n--;
    progressBar.style.width=`${((3-n)/3)*100}%`;
    if(n>0) countdownText.innerHTML=`Starting download in <strong>${n}</strong>…`;
    else {
      clearInterval(timer);
      countdownText.innerHTML="Starting download…";
      startDownload();
      progressBar.style.width="100%";
    }
  },1000);
}

document.getElementById("downloadBtn").addEventListener("click",openDownload);
document.getElementById("downloadNow").addEventListener("click",()=>{clearInterval(timer);startDownload();modal.classList.remove("open");});
document.getElementById("closeBtn").addEventListener("click",()=>{clearInterval(timer);modal.classList.remove("open");});
modal.addEventListener("click",e=>{if(e.target===modal){clearInterval(timer);modal.classList.remove("open");}});
