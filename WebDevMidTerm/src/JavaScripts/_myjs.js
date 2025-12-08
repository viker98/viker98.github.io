function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.style.display = 'none');

  // Show the selected section
  const selected = document.getElementById(sectionId);
  selected.style.display = 'block';
}