var fleetyards_config = function () {
  return {
    details: true, // Set to false if you want to display a minimal version of the Ship Panel
    grouped: true, // Set to false if you want to display the same Ships multiple times in your Fleetview.
    fleetchart: false, // Set to true if you want to display a Fleetchart instead of the normal Ship Panels.
    fleetchartGrouped: false, // Set to true if you want to group the Ships on the Fleetchart View or not.
    fleetchartScale: 50, // Initial Scale of the Fleetchart
    groupedButton: false, // Allow the User to toggle Groupped Views
    fleetchartSlider: false, // Set to true to display a slider which allows users to scale the Fleetchart
    ships: ["100i", "300i", "600i-touring", "890-jump"], // Replace the Array with a List of Shipnames (slugs) you want to display,
    users: ["torlekmaru", "johndoe"], // Replace the Array with a list of Fleetyards.net usernames, alternative to the ships option.
  };
};
