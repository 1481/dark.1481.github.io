var loadingMsg = document.createElement("div");
loadingMsg.style.display = "none";
loadingMsg.style.position = "fixed";
loadingMsg.style.top = "0.1rem";
loadingMsg.style.left = "0.1rem";
loadingMsg.style.zIndex = "9999";
loadingMsg.innerHTML = "Loading...";
document.body.appendChild(loadingMsg);
window.addEventListener("pageshow", function() {loadingMsg.style.display = "none";});
function goPage(url) {
    loadingMsg.style.display = "";
    location.href = url;
}
