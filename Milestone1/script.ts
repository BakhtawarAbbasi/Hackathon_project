document.addEventListener('DOMContentLoaded', () => {
    // Toggle visibility of the Skills section
    const skillsSection = document.querySelector('.skills') as HTMLElement;

    // Create a button to toggle Skills visibility
    const toggleSkillsButton = document.createElement('button');
    toggleSkillsButton.textContent = 'Toggle Skills';
    toggleSkillsButton.style.marginTop = '4px';
    toggleSkillsButton.style.backgroundColor = '#FF9100';
    toggleSkillsButton.style.color = '#2e3b42';
    toggleSkillsButton.style.padding = '5px 10px';
    toggleSkillsButton.style.fontSize = '16px';
    toggleSkillsButton.style.cursor = 'pointer';

    // Insert the button after the Skills section
    skillsSection.parentNode?.insertBefore(toggleSkillsButton, skillsSection.nextSibling);

    // Add event listener to the button
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills';
        }
    });
});
