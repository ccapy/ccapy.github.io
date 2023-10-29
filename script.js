document.addEventListener("DOMContentLoaded", function() {
    const localSwitch = document.getElementById("localSwitch");
    const switchStatus = document.getElementById("switchStatus");
    const buttons = document.querySelectorAll(".button");

    function updateButtonLinks(useLocalLinks) {
        buttons.forEach(button => {
            if (useLocalLinks) {
                const localLink = button.getAttribute("data-local-link");
                if (localLink) {
                    button.href = localLink;
                }
            } else {
                const remoteLink = button.getAttribute("data-remote-link");
                if (remoteLink) {
                    button.href = remoteLink;
                }
            }
        });

        // Update the text under the switch based on the state
        switchStatus.textContent = useLocalLinks ? "Local" : "Public";
    }

    localSwitch.addEventListener("change", function() {
        const useLocalLinks = localSwitch.checked;
        updateButtonLinks(useLocalLinks);
    });

    // Initialize with local links and "Local" text by default
    localSwitch.checked = true; // Set the switch to Local by default
    updateButtonLinks(true);
});
