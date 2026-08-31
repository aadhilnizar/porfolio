Loyaltri media for the Featured section
=======================================

These are real Loyaltri product screenshots shown as a swappable gallery
in the featured card:

  dashboard.jpg       -> main dashboard (Docme Cloud workspace)
  payroll.jpg         -> payroll overview
  attendance.jpg      -> employee attendance
  dashboard-dark.jpg  -> dark-mode dashboard

To change the set, edit app/data.ts -> featured.media.gallery
(each entry is { src, label }). The first entry is the default view.

Prefer a video? Add an .mp4 here and set featured.media.video =
"/loyaltri/demo.mp4" — it autoplays muted + loops and overrides the images.

If any referenced file is missing, the frame falls back to a styled mock,
so nothing looks broken.

Source of screenshots: softwaresuggest.com/loyaltri (public product listing).
Swap in your own captures anytime if you prefer.
