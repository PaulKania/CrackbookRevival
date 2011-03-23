function markAsJunk() {
  chrome.tabs.getSelected(null, function (tab) {
    var junkDomains = getJunkDomains();
    var domain = normalizedDomain(tab.url);
    junkDomains.push(domain);
    setJunkDomains(junkDomains);
    document.getElementById('mark_junk_button').style.display = "none";
    bgPage().updateIcon(true);
  });
}
