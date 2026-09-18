// Centralized side-effect loading for the curriculum's expansion modules.
// Keep this import order stable until the expansion modules are converted to
// explicit data composition. The order preserves the existing initialization
// chain while making the dependency entry point visible in one place.
import "./stage10Expansion.js";
import "./stage11Expansion.js";
import "./stage12Gaps.js";
import "./stage12Expansion.js";
import "./stage14Expansion.js";
import "./stage13Expansion.js";
