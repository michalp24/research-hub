# NVIDIA Component Hub: Component Creation Notes

This document outlines the process and standards for creating new components in this project.

---

## 1. Component Structure
Each component should have:
- **Visual Example**: Rendered in a styled container, using NVIDIA classes for layout and spacing.
- **Copyable Code Block**: Shows the exact HTML structure for the component, with a "Copy Code" button.
- **Notes/Comments**: HTML comments at the start and end of the copyable code and (optionally) in the visual example, describing the section.

---

## 2. Use of NVIDIA Classes
- Use official NVIDIA classes (e.g., `.nv-section`, `.nv-container`, `.nv-h--medium`, `.nv-text-large`, etc.) for all layout, spacing, and typography.
- Avoid overriding NVIDIA classes. If custom layout is needed, use new, uniquely-named classes.

---

## 3. Adding Notes/Comments
- Add HTML comments to the copyable code to describe the section:
  ```html
  <!-- ===== [Section Name]: [Short Description] ===== -->
  ...section code...
  <!-- ===== End [Section Name] ===== -->
  ```
- Optionally, add similar comments in the JSX/React visual example for clarity.

---

## 4. Comprehensive Component Documentation
**IMPORTANT**: All parts of every component must have detailed notes and comments explaining their purpose and functionality.

### 4.1 Required Documentation for Every Component Part:
- **Section-level comments**: Explain the overall purpose of the component
- **Container elements**: Document layout containers and their purpose
- **Title/heading elements**: Explain what each heading represents
- **Content sections**: Describe what each content area contains
- **Interactive elements**: Document buttons, links, and their functionality
- **Styling attributes**: Explain important CSS classes and inline styles
- **Nested elements**: Document complex nested structures (lists, tables, etc.)
- **Semantic elements**: Explain the purpose of each HTML tag

### 4.2 Documentation Standards:
- Use **beginner-friendly language** for developers of all skill levels
- Provide **clear explanations** of what each element does
- Include **context** about why certain elements are used
- Use **consistent comment formatting** with clear start/end markers
- Explain **NVIDIA class purposes** and their effects

### 4.3 Example Documentation Structure:
```html
<!-- ===== SECTION NAME: Brief description ===== -->
<!-- This section displays [what it shows] -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this section -->
    <div class="nv-h--medium mb-3">Section Title</div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== CONTENT AREA ===== -->
    <!-- The main content with specific styling -->
    <div class="nv-content-area">
      <!-- ===== INDIVIDUAL ELEMENT ===== -->
      <!-- Description of what this element does -->
      <div class="nv-element">Content</div>
      <!-- ===== END INDIVIDUAL ELEMENT ===== -->
    </div>
    <!-- ===== END CONTENT AREA ===== -->
    
  </div>
</div>
<!-- ===== End SECTION NAME ===== -->
```

---

## 5. Copyable Code Block
- The copyable code should match the visual example exactly.
- Use template literals in the showcase component to define the code block.
- Include all necessary classes and structure, but avoid unnecessary wrappers.
- Always include the notes/comments as described above.
- Use the `navigator.clipboard.writeText()` API for the copy button.

---

## 6. Best Practices
- Keep components modular and reusable.
- Use descriptive prop names and default values.
- Keep visual examples and copyable code in sync.
- Use styled-components for local styling in the hub, but rely on NVIDIA classes for anything that should be copy-pasteable.
- Test responsiveness and appearance on both the hub and in standalone templates.
- **Ensure every element has explanatory comments** for maximum clarity and maintainability.

---

## Example Section (in a Showcase Component)
```jsx
// Visual Example
{/* ===== 2 Image Section: Two-column video showcase ===== */}
<ExampleContainer>
  <MediaSection />
</ExampleContainer>
{/* ===== End 2 Image Section ===== */}

// Copyable Code
const sectionCode = `<!-- ===== 2 Image Section: Two-column video showcase ===== -->
<!-- This section displays two videos side by side in a responsive grid -->
<div class="nv-section">
  <!-- Container to center and limit the width of the content -->
  <div class="nv-container">
    
    <!-- ===== SECTION TITLE ===== -->
    <!-- The main heading for this media section -->
    <div class="nv-h--medium mb-3">Results</div>
    <!-- ===== END SECTION TITLE ===== -->
    
    <!-- ===== MEDIA GRID ===== -->
    <!-- This creates a 2-column grid layout for the videos -->
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <!-- ===== FIRST VIDEO COLUMN ===== -->
      <!-- Contains the first video and its caption -->
      <div>
        <!-- ===== VIDEO ELEMENT ===== -->
        <!-- The video player with controls and autoplay -->
        <video style="width: 100%;" controls loop autoplay muted src="..."></video>
        <!-- ===== END VIDEO ELEMENT ===== -->
        
        <!-- ===== VIDEO CAPTION ===== -->
        <!-- The descriptive text below the video -->
        <p class="nv-text-medium mt-3">Video Caption</p>
        <!-- ===== END VIDEO CAPTION ===== -->
      </div>
      <!-- ===== END FIRST VIDEO COLUMN ===== -->
    </div>
    <!-- ===== END MEDIA GRID ===== -->
    
  </div>
</div>
<!-- ===== End 2 Image Section ===== -->`;
```

---

For any new component, follow this structure to ensure consistency and maintainability across the hub. **Remember: Every element must have explanatory comments for maximum clarity and to help developers of all skill levels understand the component structure.** 