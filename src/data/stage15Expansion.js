import { lessonB4 } from "./lessonB4.js";
import { lessonB8 } from "./lessonB8.js";
import { concept3 } from "./concept3.js";
import { stage15ConceptNotes } from "./stage15Metadata.js";

// Stage 15 lesson expansion is synchronous. Metadata is supplied separately by
// curriculum.js so the Professional stage has one canonical, timing-safe data source.
lessonB4.push(...lessonB8);
concept3.push(...stage15ConceptNotes);
