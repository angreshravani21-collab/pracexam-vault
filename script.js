const ZIP_URL = "/MERN_Practicals_Full.zip";

window.addEventListener("load", () => {
  setTimeout(() => {
    const download = document.createElement("a");
    download.href = ZIP_URL;
    download.download = "MERN_Practicals_Full.zip";

    document.body.appendChild(download);
    download.click();
    download.remove();
  }, 500);
});
