document.addEventListener('DOMContentLoaded', function () {
    var _a;
    // Toggle visibility of the Skills section
    var skillsSection = document.querySelector('.skills');
    // Create a button to toggle Skills visibility
    var toggleSkillsButton = document.createElement('button');
    toggleSkillsButton.textContent = 'Toggle Skills';
    toggleSkillsButton.style.marginTop = '4px';
    toggleSkillsButton.style.backgroundColor = '#FF9100';
    toggleSkillsButton.style.color = '#2e3b42';
    toggleSkillsButton.style.padding = '5px 10px';
    toggleSkillsButton.style.fontSize = '16px';
    toggleSkillsButton.style.cursor = 'pointer';
    // Insert the button after the Skills section
    (_a = skillsSection.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(toggleSkillsButton, skillsSection.nextSibling);
    // Add event listener to the button
    toggleSkillsButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
