# Maxfield Ma - Personal Website

A fun and interactive personal website showcasing my interests, projects, and ways to connect. Built with vanilla HTML, CSS, and JavaScript featuring smooth animations, particle effects, and engaging interactive elements.

## Features

### Interactive Elements
- **Typing Animation**: Dynamic hero text that types and erases
- **Time-Based Greeting**: Welcome message changes based on time of day
- **Particle Background**: Animated particle system with connection lines
- **Flip Cards**: Click-to-reveal interest cards with smooth 3D flip animations
- **Quiz Game**: Interactive quiz about my favorite things
- **Random Facts**: Generate random fun facts with button click
- **Copy to Clipboard**: One-click email copying with visual feedback
- **Smooth Animations**: Fade-in, slide-in, and scroll-triggered animations throughout

### Pages
- **Home** (`index.html`): Introduction, about me section, and call-to-action
- **Interests** (`interests.html`): Interactive cards for gaming, coding, music, and tennis
- **Contact** (`contact.html`): Email, LinkedIn, GitHub, and Discord links

### Design
- Modern dark theme with blue/purple gradient accents
- Fully responsive (mobile-friendly)
- Smooth transitions and hover effects
- Clean, minimalist aesthetic with thoughtful interactive touches

## Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styles, animations, flexbox, and grid
- **Vanilla JavaScript**: No frameworks, pure JS for all interactivity
- **Canvas API**: For particle background animation

## File Structure

```
/
├── index.html          # Home/About page
├── interests.html      # Interests page with quiz
├── contact.html        # Contact page
├── styles.css          # All styling and animations
├── script.js           # Main interactive features
├── particles.js        # Particle background system
└── README.md          # This file
```

## Getting Started

### Running Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required.

### Customization

To personalize this website for yourself:

1. **Update Personal Info**:
   - Replace "Maxfield Ma" with your name throughout all HTML files
   - Update the logo initials in the navigation (`MM` → your initials)
   - Modify the bio text in `index.html`

2. **Customize Interests** (`interests.html`):
   - Change the 4 interest cards (icons, titles, descriptions)
   - Update the quiz question and answers
   - Modify the `data-answer="correct"` attribute for the right answer

3. **Update Contact Info** (`contact.html`):
   - Replace email addresses
   - Update social media links (LinkedIn, GitHub, Discord/Twitter)
   - Change social platform icons if needed

4. **Personalize Fun Facts** (`script.js` line 127-138):
   - Replace the facts array with your own fun facts

5. **Adjust Typing Animation** (`script.js` line 79):
   - Modify the `textArray` with your custom messages

6. **Color Scheme** (`styles.css` :root variables):
   - Change CSS variables to customize colors

## Features Breakdown

### Particle System (`particles.js`)
- Lightweight canvas-based animation
- Responsive particle count (30 on mobile, 60 on desktop)
- Connected particles within 100px radius
- Smooth 60fps animation

### Navigation
- Sticky navbar with blur backdrop
- Active page highlighting
- Mobile-responsive hamburger menu
- Smooth transitions

### Animations
- CSS keyframe animations for fade-in effects
- Intersection Observer for scroll-triggered animations
- 3D card flip transforms
- Hover effects with scale and shadow changes
- Page transition effects on navigation

### Interactive Quiz
- Click-to-answer functionality
- Visual feedback (green for correct, red for wrong)
- Auto-reset after 3 seconds
- Disables options after selection

### Copy to Clipboard
- Modern Clipboard API
- Visual confirmation with popup
- Temporary button text change
- Graceful error handling

## Browser Compatibility

Works best on modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Requires JavaScript enabled for full functionality.

## Performance

- No external dependencies or libraries
- Minimal file sizes
- Optimized animations (GPU-accelerated where possible)
- Responsive particle system adjusts for device performance

## License

Feel free to use this template for your own personal website! Just update the content with your own information.

## Contact

- **Email**: maxfield.ma@example.com
- **LinkedIn**: [linkedin.com/in/maxfieldma](https://linkedin.com/in/maxfieldma)
- **GitHub**: [github.com/maxfieldma](https://github.com/maxfieldma)

---

Made with creativity and code by Maxfield Ma © 2026
