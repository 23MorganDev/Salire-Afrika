# Plan: Update Co-founder Image

The user wants to replace the image of Michael Kinyua (Co-founder) in the 'About' section with a new one and ensure it's not cropped.

## Proposed Changes

### 1. Update `src/components/home/About.tsx`
- Replace the image URL for Michael Kinyua in the `team` array.
- New URL: `https://storage.googleapis.com/dala-prod-public-storage/attachments/b51397a8-5aff-4f34-8617-20fb234d9db9/1777450775746_Michael_Kinyua_co-founder.jpg`
- Ensure the image is fully visible. I will use `object-contain` instead of `object-cover` to satisfy the "without cropping" requirement, or ensure the container styling is appropriate. Given the "without cropping" explicit request, `object-contain` is the safest bet to show the full image content, even if it adds some letterboxing within the `aspect-square` container.

## Verification Plan
- Verify the image URL is updated.
- Verify the image styling ensures full visibility.
- Run `validate_build` to ensure everything is correct.
