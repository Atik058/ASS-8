// Key name for storing IDs in local storage
const STORAGE_KEY = "savedIDs";

/**
 * Get all saved IDs from local storage
 * @returns {Array} IDs array
 */
function getSavedIDs() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
}

/**
 * Save a new ID to local storage
 * @param {string|number} id - The ID to save
 */
function saveID(id) {
    const ids = getSavedIDs();
    if (!ids.includes(id)) { // Avoid duplicates
        ids.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    }
}

/**
 * Remove an ID from local storage
 * @param {string|number} id - The ID to remove
 */
function removeID(id) {
    const ids = getSavedIDs().filter(savedId => savedId !== String(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

/**
 * Clear all saved IDs
 */
function clearAllIDs() {
    localStorage.removeItem(STORAGE_KEY);
}
export { getSavedIDs,saveID,removeID,clearAllIDs };