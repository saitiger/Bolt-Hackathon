Create a full-stack Recipe Finder web app using React + Vite + Tailwind CSS. Use the following HTML and CSS as the UI basis for the app. Ensure the landing page includes a full-screen video background with a centered call-to-action button that takes the user to the main recipe search experience.

--- START HTML ---

<html lang="en">
  <head>
    <!-- Meta, Fonts, Tailwind, Lucide, and Custom CSS omitted for brevity -->
  </head>

  <body class="font-inter bg-neutral-900 text-white selection:bg-emerald-500/30">

    <!-- Landing / Hero Section -->
    <section id="landing" class="relative h-screen w-full overflow-hidden">
      <video class="absolute inset-0 h-full w-full object-cover" 
             src="/hero.mp4" autoplay muted loop playsinline 
             poster="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&q=80"></video>

      <div class="absolute inset-0 bg-black/40"></div>

      <div class="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center space-y-6">
        <h1 class="sm:text-6xl lg:text-7xl text-4xl font-semibold tracking-tight">
          Turn What You Have into What You Crave
        </h1>
        <p class="text-lg sm:text-xl max-w-xl">
          Find real recipes using the ingredients you already have.
        </p>

        <!-- CTA Button -->
        <button id="startBtn" class="shiny-cta focus:outline-none">
          <span>Get Cooking <svg width="24" height="24" stroke="currentColor"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
        </button>
      </div>
    </section>

    <!-- Main App Section -->
    <section id="app" class="hidden min-h-screen bg-neutral-950 text-white">
      <!-- Sidebar for ingredients, sources -->
      <!-- Main content shows recipe results -->
      <!-- All from original HTML structure -->
    </section>

    <!-- Scripts -->
    <script>
      document.getElementById("startBtn").addEventListener("click", () => {
        document.getElementById("landing").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
      });
    </script>
  </body>
</html>

--- END HTML ---

**Requirements:**
- Convert this HTML into a React + Tailwind app using Bolt.
- Keep the `hero.mp4` video background (placed at `/public/hero.mp4`).
- Add state management for ingredients and trusted sources.
- Add ability to toggle between “Landing Page” and “Get Cooking” views via button.
- Use Tailwind classes for styling.
- Ensure the app is responsive (mobile + desktop).
- Use Lucide icons for visuals.
- Autoplay loading animation and mock recipe cards when 2+ ingredients are entered.

Optional: add fallback logic and smooth transitions.
