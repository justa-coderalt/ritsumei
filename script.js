function showTab(tabId) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(section => {
    section.classList.remove('active');
  });
  
  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add('active');
  }
}
