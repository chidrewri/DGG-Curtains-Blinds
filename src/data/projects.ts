/**
 * PROJECT GALLERY DATA
 *
 * To add a project photo:
 *   1. Put the photo in /public/projects/ (for example: public/projects/dagupan-living-room.jpg).
 *      Use a JPG or WebP about 1600px wide. The site resizes it automatically.
 *   2. Copy one of the examples below into the `projects` list and fill it in.
 *   3. Save, commit and push. Vercel redeploys the site on its own.
 *
 * Only add REAL DGG projects, and ask the customer's permission before posting
 * photos of their home or business. Do not add AI-generated images here.
 *
 * When the list is empty, the site shows "Our project gallery is being updated"
 * with a link to the Facebook page.
 */

export type ProjectCategory = "curtains" | "blinds" | "upholstery";
export type ProjectSetting = "residential" | "commercial";

export type Project = {
  /** Unique id, lowercase with dashes */
  id: string;
  /** Short title, e.g. "Zebra blinds for a clinic" */
  title: string;
  /** Optional Tagalog title. Falls back to `title`. */
  titleTl?: string;
  /** Town only, e.g. "Dagupan City". Never a customer's name or full address. */
  location?: string;
  setting: ProjectSetting;
  category: ProjectCategory;
  /** Main photo, path inside /public, e.g. "/projects/dagupan-living-room.jpg" */
  image: string;
  /** Describe what is in the photo, for screen readers and Google, e.g. "Navy zebra blinds on three office windows" */
  alt: string;
  /** Optional "before" photo. If set, the card shows Before and After side by side (image = after). */
  beforeImage?: string;
  beforeAlt?: string;
  /** Photo width and height in pixels (optional, helps the page load without jumping) */
  width?: number;
  height?: number;
};

export const projects: Project[] = [
  // EXAMPLE (remove the two slashes at the start of each line to use it):
  // {
  //   id: "mangaldan-living-room-curtains",
  //   title: "Living room curtains",
  //   titleTl: "Kurtina sa sala",
  //   location: "Mangaldan",
  //   setting: "residential",
  //   category: "curtains",
  //   image: "/projects/mangaldan-living-room-curtains.jpg",
  //   alt: "Cream pleated curtains on a wide living room window",
  // },
  //
  // BEFORE-AND-AFTER EXAMPLE:
  // {
  //   id: "dagupan-office-blinds",
  //   title: "Office zebra blinds",
  //   location: "Dagupan City",
  //   setting: "commercial",
  //   category: "blinds",
  //   image: "/projects/dagupan-office-blinds-after.jpg",
  //   alt: "Grey zebra blinds installed on office windows",
  //   beforeImage: "/projects/dagupan-office-blinds-before.jpg",
  //   beforeAlt: "The same office windows before, with no blinds",
  // },
];
