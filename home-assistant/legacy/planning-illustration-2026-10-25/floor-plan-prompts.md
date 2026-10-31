# Floor plan editing prompts

Mode: built-in image generation tool (image edit).

## Presentation edit

Use case: style-transfer.
Asset type: floor plan presentation image for a GitHub Home Assistant project README.
Input image: edit target, the user's uploaded Floorplanner floor plan.
Create a polished, tightly framed, top-down 2D architectural presentation of this exact plan. Remove the vast unused outer blue grid margin; enlarge the home and detached garage together so they occupy most of a well-balanced portrait or near-square canvas. Use an off-white background, charcoal architectural wall strokes, pale neutral room surfaces, restrained warm natural furniture colors, crisp edges and subtle shadows. Preserve the precise arrangement, relative proportions, wall shapes, door openings, windows, furnishings, detached garage position to the lower left, car, and all existing architectural features. Do not invent new rooms, walls, labels, dimensions, appliances or landscaping. Preserve spatial relationships. Where tiny text is unreadable, omit it rather than fabricate measurements or room names. Omit tiny exterior dimension annotations for clarity. Keep recognizable source attribution in a small tasteful footer reading "Source: Floorplanner • Presentation edit". No other titles, UI, icons, control overlays or added objects. This is a visual cleanup of the existing floor plan, not a redesign.

## Kitchen correction

Use case: precise-object-edit. Image 1 is the edit target, a presentation floor plan. Image 2 is the original source for architectural reference. Correct the kitchen in image 1: the small alcove immediately below the two bathrooms, on the right side above the dining table, is a KITCHEN, not a bedroom or lounge. Replace the incorrectly drawn bed with plain light kitchen base cabinets and countertop along the top wall of this alcove. Replace the incorrectly drawn sofa immediately below it with plain light kitchen base cabinets and countertop along that lower horizontal edge. Keep the right-side cooking hob and countertop. The area should read as compact U-shaped kitchen counters opening toward the large living/dining space to the left. Do not add walls. Change ONLY those incorrectly interpreted kitchen furnishings. Keep all other geometry, walls, doors, furnishings, proportions, color palette, framing and source attribution footer exactly as image 1. Do not add labels or dimensions.
