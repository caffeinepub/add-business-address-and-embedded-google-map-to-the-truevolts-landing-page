# Specification

## Summary
**Goal:** Make the landing page slider use its own dedicated images (separate from the Training Environment gallery) and refresh the visual styling of the Services and Training Environment sections.

**Planned changes:**
- Add and reference a new set of dedicated slider images under `frontend/public/assets/generated`, ensuring the slider image filenames are not used by the Training Environment gallery.
- Update `frontend/src/components/landing/LandingSlider.tsx` to use the new slider images, keep auto-rotation and navigation (arrows + dots), and add appropriate English alt text for each slide.
- Restyle `frontend/src/components/landing/ServicesSection.tsx` with a more polished layout/presentation while keeping the four existing services’ icons, titles, and descriptions unchanged.
- Restyle `frontend/src/components/landing/GallerySection.tsx` with a more polished gallery presentation while keeping the title “Training Environment” and the same 9 gallery images unchanged.

**User-visible outcome:** The homepage slider shows a distinct set of banner images (not reused in the gallery), and the Services and Training Environment sections look noticeably more polished while preserving their existing content.
