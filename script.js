// Planet Data
const planetData = {
    mercury: {
        name: "Mercury",
        description: "Mercury is the closest planet to the Sun and the smallest planet in our solar system. It's only slightly larger than Earth's Moon. Mercury has extreme temperature variations, scorching hot during the day and freezing cold at night due to its lack of atmosphere.",
        distance: "58 million km from Sun",
        diameter: "4,879 km",
        temperature: "430°C (day) / -170°C (night)",
        moonCount: "0",
        dayLength: "176 Earth days",
        yearLength: "88 Earth days",
        research: "NASA's MESSENGER mission (2004-2015) provided detailed maps of Mercury's surface, revealing a heavily cratered world with evidence of past volcanic activity. The BepiColombo mission, launched in 2018, is currently en route to study Mercury's magnetic field and surface composition.",
        texture: "radial-gradient(circle at 30% 30%, #8c7853, #6f5f42, #5a4e35)",
        moons: []
    },
    venus: {
        name: "Venus",
        description: "Venus is the second planet from the Sun and the hottest planet in our solar system. Often called Earth's twin due to similar size, Venus has a thick, toxic atmosphere that traps heat in a greenhouse effect. Its surface is hot enough to melt lead.",
        distance: "108 million km from Sun",
        diameter: "12,104 km",
        temperature: "462°C",
        moonCount: "0",
        dayLength: "243 Earth days (retrograde)",
        yearLength: "225 Earth days",
        research: "Multiple missions have studied Venus, including the Soviet Venera program and NASA's Magellan orbiter. The Parker Solar Probe has provided new insights during its Venus flybys, and future missions like VERITAS and DAVINCI+ will further explore this mysterious world.",
        texture: "radial-gradient(circle at 30% 30%, #ffb649, #e5a342, #cc8f2b)",
        moons: []
    },
    earth: {
        name: "Earth",
        description: "Earth is the third planet from the Sun and the only known planet to harbor life. With its protective atmosphere and magnetic field, Earth maintains liquid water on its surface. About 71% of Earth's surface is covered by oceans, making it the 'Blue Planet'.",
        distance: "150 million km from Sun",
        diameter: "12,756 km",
        temperature: "15°C (average)",
        moonCount: "1",
        dayLength: "24 hours",
        yearLength: "365.25 days",
        research: "Earth is continuously studied through satellites, space stations, and ground-based observations. Current research focuses on climate change, biodiversity, and understanding Earth's systems to predict future changes and protect our planet's habitability.",
        texture: "radial-gradient(circle at 30% 30%, #4a90e2, #2c5aa0, #1a3d6b)",
        moons: [
            {
                name: "The Moon",
                description: "Earth's Moon is the fifth largest moon in the solar system and the largest relative to its host planet. It plays a crucial role in stabilizing Earth's axial tilt and creating ocean tides.",
                distance: "384,400 km from Earth",
                diameter: "3,474 km",
                orbitalPeriod: "27.3 days",
                facts: "The Moon is gradually moving away from Earth at about 3.8 cm per year. It's thought to have formed from debris after a Mars-sized object collided with early Earth."
            }
        ]
    },
    mars: {
        name: "Mars",
        description: "Mars, the Red Planet, is the fourth planet from the Sun. Its reddish appearance comes from iron oxide (rust) on its surface. Mars has the largest volcano in the solar system (Olympus Mons) and evidence suggests it once had flowing water.",
        distance: "228 million km from Sun",
        diameter: "6,792 km",
        temperature: "-80°C to 20°C",
        moonCount: "2",
        dayLength: "24.6 hours",
        yearLength: "687 Earth days",
        research: "Mars is actively explored by rovers including Perseverance and Curiosity, along with orbiters like Mars Reconnaissance Orbiter. Current research focuses on finding signs of past or present life and preparing for future human missions.",
        texture: "radial-gradient(circle at 30% 30%, #cd5c5c, #a0444e, #8b3a3a)",
        moons: [
            {
                name: "Phobos",
                description: "Phobos is the larger and inner moon of Mars. It's heavily cratered and appears to be a captured asteroid. Phobos orbits very close to Mars and is slowly spiraling inward.",
                distance: "9,376 km from Mars",
                diameter: "22.2 km",
                orbitalPeriod: "7.6 hours",
                facts: "Phobos will eventually crash into Mars or break apart into a ring system in about 50 million years due to tidal forces."
            },
            {
                name: "Deimos",
                description: "Deimos is the smaller and outer moon of Mars. Like Phobos, it's thought to be a captured asteroid. It has a smoother surface than Phobos due to being covered in loose debris.",
                distance: "23,463 km from Mars",
                diameter: "12.4 km",
                orbitalPeriod: "30.3 hours",
                facts: "From Mars' surface, Deimos would appear as a bright star rather than a typical moon due to its small size and distance."
            }
        ]
    },
    jupiter: {
        name: "Jupiter",
        description: "Jupiter is the largest planet in our solar system and a gas giant. It has a powerful magnetic field and acts as a cosmic vacuum cleaner, protecting inner planets from asteroids and comets. Jupiter has a dynamic atmosphere with the famous Great Red Spot storm.",
        distance: "778 million km from Sun",
        diameter: "142,984 km",
        temperature: "-110°C",
        moonCount: "95 (confirmed)",
        dayLength: "9.9 hours",
        yearLength: "12 Earth years",
        research: "The Juno mission is currently studying Jupiter's interior structure and magnetic field. Previous missions like Galileo and Voyager revealed Jupiter's complex moon system and atmospheric dynamics.",
        texture: "linear-gradient(0deg, #d8ca9d 0%, #c9b037 25%, #8b4513 50%, #deb887 75%, #d8ca9d 100%)",
        moons: [
            {
                name: "Io",
                description: "Io is the most volcanically active body in the solar system, with over 400 active volcanoes. Its yellow-orange surface is covered in sulfur compounds from volcanic activity.",
                distance: "421,700 km from Jupiter",
                diameter: "3,643 km",
                orbitalPeriod: "1.8 days",
                facts: "Io's volcanic activity is caused by tidal heating from Jupiter's immense gravity and orbital resonance with Europa and Ganymede."
            },
            {
                name: "Europa",
                description: "Europa has a smooth, icy surface covering a subsurface ocean that contains more water than all of Earth's oceans combined. It's considered one of the most promising places to search for life.",
                distance: "671,034 km from Jupiter",
                diameter: "3,122 km",
                orbitalPeriod: "3.5 days",
                facts: "Europa's subsurface ocean is kept liquid by tidal heating. Future missions plan to explore this ocean for signs of life."
            },
            {
                name: "Ganymede",
                description: "Ganymede is the largest moon in the solar system, even larger than Mercury. It has its own magnetic field and shows evidence of a subsurface ocean beneath its icy crust.",
                distance: "1,070,412 km from Jupiter",
                diameter: "5,268 km",
                orbitalPeriod: "7.2 days",
                facts: "Ganymede is the only moon known to have its own magnetic field, created by liquid iron in its core."
            }
        ]
    },
    saturn: {
        name: "Saturn",
        description: "Saturn is famous for its spectacular ring system, made of ice and rock particles. It's a gas giant with a density so low it would float in water. Saturn has a hexagonal storm at its north pole, a unique feature in the solar system.",
        distance: "1.4 billion km from Sun",
        diameter: "120,536 km",
        temperature: "-140°C",
        moonCount: "146 (confirmed)",
        dayLength: "10.7 hours",
        yearLength: "29 Earth years",
        research: "The Cassini mission (1997-2017) provided detailed studies of Saturn's rings and moons. It discovered geysers on Enceladus and lakes of liquid methane on Titan, revolutionizing our understanding of the Saturn system.",
        texture: "radial-gradient(circle at 30% 30%, #fad5a5, #deb887, #d2b48c)",
        moons: [
            {
                name: "Titan",
                description: "Titan is larger than Mercury and has a thick atmosphere and lakes of liquid methane and ethane. It's the only moon with a substantial atmosphere and weather patterns similar to Earth.",
                distance: "1,221,830 km from Saturn",
                diameter: "5,149 km",
                orbitalPeriod: "16 days",
                facts: "Titan has weather patterns, seasonal changes, and a hydrological cycle - but with methane instead of water."
            },
            {
                name: "Enceladus",
                description: "Enceladus has geysers of water ice erupting from its south pole, indicating a subsurface ocean. Its surface is covered in fresh ice, making it one of the most reflective bodies in the solar system.",
                distance: "238,020 km from Saturn",
                diameter: "504 km",
                orbitalPeriod: "1.4 days",
                facts: "The water geysers contain organic molecules and salts, making Enceladus a prime target in the search for extraterrestrial life."
            },
            {
                name: "Mimas",
                description: "Mimas looks like the Death Star from Star Wars due to the large Herschel crater on its surface. Despite its small size, it plays a crucial role in shaping Saturn's rings.",
                distance: "185,539 km from Saturn",
                diameter: "396 km",
                orbitalPeriod: "22.6 hours",
                facts: "Mimas creates the Cassini Division in Saturn's rings through gravitational resonance, despite being relatively small."
            }
        ]
    },
    uranus: {
        name: "Uranus",
        description: "Uranus is an ice giant that rotates on its side, likely due to a collision with an Earth-sized object long ago. It has a faint ring system and is composed mainly of water, methane, and ammonia ice. Its blue-green color comes from methane in its atmosphere.",
        distance: "2.9 billion km from Sun",
        diameter: "51,118 km",
        temperature: "-195°C",
        moonCount: "27 (confirmed)",
        dayLength: "17.2 hours",
        yearLength: "84 Earth years",
        research: "Uranus was last visited by Voyager 2 in 1986. Future missions are being planned to study this mysterious ice giant, including its unusual magnetic field and extreme axial tilt.",
        texture: "radial-gradient(circle at 30% 30%, #4fd0e7, #3bb0c4, #2e8b9e)",
        moons: [
            {
                name: "Miranda",
                description: "Miranda has one of the most varied and extreme terrains in the solar system, with cliffs up to 20 km high. It appears to have been shattered and reassembled multiple times.",
                distance: "129,390 km from Uranus",
                diameter: "471 km",
                orbitalPeriod: "1.4 days",
                facts: "Miranda's Verona Rupes cliff is about 20 times deeper than the Grand Canyon and would take 10 minutes to fall down in Miranda's low gravity."
            },
            {
                name: "Ariel",
                description: "Ariel is the brightest and possibly youngest moon of Uranus. Its surface shows evidence of geological activity with valleys and ridges, suggesting past tectonic activity.",
                distance: "190,900 km from Uranus",
                diameter: "1,158 km",
                orbitalPeriod: "2.5 days",
                facts: "Ariel has the youngest surface among Uranus's major moons, with evidence of past geological activity and possible cryovolcanism."
            },
            {
                name: "Umbriel",
                description: "Umbriel is the darkest of Uranus's major moons, with an ancient, heavily cratered surface. It has remained largely unchanged for billions of years.",
                distance: "266,000 km from Uranus",
                diameter: "1,169 km",
                orbitalPeriod: "4.1 days",
                facts: "Umbriel's dark surface reflects only 16% of sunlight, making it one of the darkest objects in the solar system."
            }
        ]
    },
    neptune: {
        name: "Neptune",
        description: "Neptune is the windiest planet in the solar system, with winds reaching up to 2,100 km/h. This ice giant is the most distant planet from the Sun and takes 165 Earth years to complete one orbit. Its deep blue color comes from methane in its atmosphere.",
        distance: "4.5 billion km from Sun",
        diameter: "49,528 km",
        temperature: "-200°C",
        moonCount: "16 (confirmed)",
        dayLength: "16.1 hours",
        yearLength: "165 Earth years",
        research: "Like Uranus, Neptune was only visited once by Voyager 2 in 1989. Future missions are being planned to study the ice giants and their unique properties, including Neptune's intense magnetic field and dynamic atmosphere.",
        texture: "radial-gradient(circle at 30% 30%, #4b70dd, #2e4bc6, #1e3a8a)",
        moons: [
            {
                name: "Triton",
                description: "Triton is the largest moon of Neptune and the only large moon in the solar system with a retrograde orbit. It's likely a captured Kuiper Belt object and has geysers of nitrogen gas.",
                distance: "354,759 km from Neptune",
                diameter: "2,707 km",
                orbitalPeriod: "5.9 days (retrograde)",
                facts: "Triton is slowly spiraling toward Neptune and will eventually be torn apart by tidal forces, forming a spectacular ring system around the planet."
            }
        ]
    }
};

// Scene management
class SceneManager {
    constructor() {
        this.currentScene = 'landing-page';
        this.scenes = {
            'landing-page': document.getElementById('landing-page'),
            'solar-system': document.getElementById('solar-system'),
            'planet-detail': document.getElementById('planet-detail'),
            'moon-detail': document.getElementById('moon-detail')
        };
        this.overlay = document.getElementById('overlay');
        this.currentPlanet = null;
        this.currentMoon = null;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        // Sun click to enter solar system
        document.getElementById('sun').addEventListener('click', () => {
            this.transitionTo('solar-system');
        });
        
        // Planet navigation clicks
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const planet = e.currentTarget.dataset.planet;
                this.selectPlanet(planet);
            });
        });
        
        // Planet clicks in solar system
        document.querySelectorAll('.planet').forEach(planet => {
            planet.addEventListener('click', (e) => {
                e.stopPropagation();
                const planetName = e.currentTarget.dataset.planet;
                this.showPlanetDetail(planetName);
            });
        });
        
        // Overlay click to go back
        this.overlay.addEventListener('click', () => {
            if (this.currentScene === 'moon-detail') {
                this.transitionTo('planet-detail');
            } else if (this.currentScene === 'planet-detail') {
                this.transitionTo('solar-system');
                this.clearPlanetSelection();
            }
        });
        
        // Escape key to go back
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.overlay.click();
            }
        });
    }
    
    transitionTo(sceneId) {
        // Hide current scene
        this.scenes[this.currentScene].classList.remove('active');
        
        // Show new scene after a brief delay
        setTimeout(() => {
            this.scenes[sceneId].classList.add('active');
            this.currentScene = sceneId;
            
            // Manage overlay
            if (sceneId === 'planet-detail' || sceneId === 'moon-detail') {
                this.overlay.classList.add('active');
            } else {
                this.overlay.classList.remove('active');
            }
        }, 300);
    }
    
    selectPlanet(planetName) {
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to selected planet
        document.querySelector(`[data-planet="${planetName}"]`).classList.add('active');
        
        // Scroll/animate to planet
        this.animateToPlanet(planetName);
    }
    
    animateToPlanet(planetName) {
        const targetPlanet = document.querySelector(`.solar-system-container .planet[data-planet="${planetName}"]`);
        const container = document.querySelector('.solar-system-container');
        
        if (targetPlanet && container) {
            const containerRect = container.getBoundingClientRect();
            const planetRect = targetPlanet.getBoundingClientRect();
            
            // Calculate offset to center the planet
            const offsetX = (containerRect.width / 2) - (planetRect.left - containerRect.left) - (planetRect.width / 2);
            const offsetY = (containerRect.height / 2) - (planetRect.top - containerRect.top) - (planetRect.height / 2);
            
            // Apply transform
            container.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
            container.style.transition = 'transform 1s ease-in-out';
            
            // Reset after animation
            setTimeout(() => {
                container.style.transform = '';
                container.style.transition = '';
            }, 2000);
        }
    }
    
    showPlanetDetail(planetName) {
        this.currentPlanet = planetName;
        const planet = planetData[planetName];
        
        if (!planet) return;
        
        // Populate planet information
        document.getElementById('planet-name').textContent = planet.name;
        document.getElementById('planet-description').textContent = planet.description;
        document.getElementById('distance').textContent = planet.distance;
        document.getElementById('diameter').textContent = planet.diameter;
        document.getElementById('temperature').textContent = planet.temperature;
        document.getElementById('moon-count').textContent = planet.moonCount;
        document.getElementById('day-length').textContent = planet.dayLength;
        document.getElementById('year-length').textContent = planet.yearLength;
        document.getElementById('research-info').textContent = planet.research;
        
        // Set planet visual
        const detailPlanet = document.getElementById('detail-planet-sphere');
        detailPlanet.style.background = planet.texture;
        
        // Create moons in detail view
        this.createDetailMoons(planet.moons);
        
        // Transition to detail view
        this.transitionTo('planet-detail');
    }
    
    createDetailMoons(moons) {
        const moonsContainer = document.getElementById('detail-moons');
        moonsContainer.innerHTML = '';
        
        moons.forEach((moon, index) => {
            const moonElement = document.createElement('div');
            moonElement.className = 'moon detail-moon-orbit';
            moonElement.style.width = '15px';
            moonElement.style.height = '15px';
            moonElement.style.position = 'absolute';
            moonElement.style.borderRadius = '50%';
            moonElement.style.background = 'radial-gradient(circle at 30% 30%, #d3d3d3, #a9a9a9)';
            moonElement.style.cursor = 'pointer';
            moonElement.style.top = '50%';
            moonElement.style.left = '50%';
            moonElement.style.transformOrigin = `${150 + index * 30}px 0`;
            moonElement.style.animation = `orbit ${20 + index * 10}s linear infinite`;
            moonElement.style.zIndex = '10';
            
            // Add click event for moon detail
            moonElement.addEventListener('click', (e) => {
                e.stopPropagation();
                this.showMoonDetail(moon);
            });
            
            moonsContainer.appendChild(moonElement);
        });
    }
    
    showMoonDetail(moon) {
        this.currentMoon = moon;
        
        // Populate moon information
        document.getElementById('moon-name').textContent = moon.name;
        document.getElementById('moon-description').textContent = moon.description;
        document.getElementById('moon-distance').textContent = moon.distance;
        document.getElementById('moon-diameter').textContent = moon.diameter;
        document.getElementById('orbital-period').textContent = moon.orbitalPeriod;
        document.getElementById('moon-facts').textContent = moon.facts;
        
        // Set moon visual
        const detailMoon = document.getElementById('detail-moon-sphere');
        detailMoon.style.background = 'radial-gradient(circle at 30% 30%, #d3d3d3, #a9a9a9, #808080)';
        
        // Transition to moon detail view
        this.transitionTo('moon-detail');
    }
    
    clearPlanetSelection() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        this.currentPlanet = null;
        this.currentMoon = null;
    }
}

// Particle system for background stars
class StarField {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.init();
    }
    
    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.appendChild(this.canvas);
        
        this.resize();
        this.createStars();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createStars() {
        const numStars = 200;
        this.stars = [];
        
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random() * 0.8 + 0.2,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.stars.forEach(star => {
            // Twinkle effect
            star.opacity += Math.sin(Date.now() * star.twinkleSpeed) * 0.01;
            star.opacity = Math.max(0.1, Math.min(1, star.opacity));
            
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Enhanced animations
class AnimationEnhancer {
    constructor() {
        this.init();
    }
    
    init() {
        // Add floating animation to planets
        this.addPlanetFloating();
        
        // Add hover effects
        this.addHoverEffects();
        
        // Add loading screen
        this.addLoadingScreen();
    }
    
    addPlanetFloating() {
        document.querySelectorAll('.planet').forEach((planet, index) => {
            const delay = index * 0.5;
            planet.style.animation = `floating 4s ease-in-out infinite ${delay}s`;
        });
    }
    
    addHoverEffects() {
        document.querySelectorAll('.planet, .moon').forEach(celestialBody => {
            celestialBody.addEventListener('mouseenter', (e) => {
                e.target.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))';
            });
            
            celestialBody.addEventListener('mouseleave', (e) => {
                e.target.style.filter = '';
            });
        });
    }
    
    addLoadingScreen() {
        // Add a subtle loading effect when transitioning between scenes
        const style = document.createElement('style');
        style.textContent = `
            .scene {
                transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out, transform 0.8s ease-in-out;
            }
            
            .scene:not(.active) {
                transform: scale(0.95);
            }
            
            .loading {
                pointer-events: none;
            }
            
            .loading::after {
                content: '';
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40px;
                height: 40px;
                border: 3px solid rgba(255, 255, 255, 0.3);
                border-top: 3px solid #ffd700;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                z-index: 1000;
            }
            
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Touch and mobile interactions
class MobileEnhancer {
    constructor() {
        this.init();
    }
    
    init() {
        // Add touch-friendly interactions
        this.addTouchSupport();
        
        // Prevent zoom on double tap
        this.preventZoom();
        
        // Add swipe gestures
        this.addSwipeGestures();
    }
    
    addTouchSupport() {
        document.querySelectorAll('.planet, .moon, .nav-item').forEach(element => {
            element.addEventListener('touchstart', (e) => {
                e.preventDefault();
                element.style.transform = 'scale(0.95)';
            });
            
            element.addEventListener('touchend', (e) => {
                e.preventDefault();
                element.style.transform = '';
                element.click();
            });
        });
    }
    
    preventZoom() {
        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
        
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }
    
    addSwipeGestures() {
        let startX, startY;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;
            
            const deltaX = e.touches[0].clientX - startX;
            const deltaY = e.touches[0].clientY - startY;
            
            // Prevent default scrolling behavior
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        document.addEventListener('touchend', (e) => {
            startX = null;
            startY = null;
        });
    }
}

// Performance optimizer
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Optimize animations based on device performance
        this.optimizeAnimations();
        
        // Lazy load non-critical elements
        this.lazyLoadElements();
        
        // Debounce resize events
        this.debounceResize();
    }
    
    optimizeAnimations() {
        // Reduce animations on lower-end devices
        const isLowEndDevice = navigator.hardwareConcurrency <= 4 && 
                              (window.innerWidth < 1024 || window.innerHeight < 768);
        
        if (isLowEndDevice) {
            const style = document.createElement('style');
            style.textContent = `
                * {
                    animation-duration: 0.5s !important;
                    transition-duration: 0.3s !important;
                }
                
                .detail-planet .planet-sphere,
                .detail-moon .moon-sphere {
                    animation: none !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    lazyLoadElements() {
        // Preload critical images and defer others
        const criticalElements = document.querySelectorAll('.sun, .floating-title');
        criticalElements.forEach(element => {
            element.style.willChange = 'transform, opacity';
        });
    }
    
    debounceResize() {
        let resizeTimeout;
        const originalResize = window.onresize;
        
        window.onresize = function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (originalResize) originalResize();
            }, 250);
        };
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all systems
    const sceneManager = new SceneManager();
    const starField = new StarField();
    const animationEnhancer = new AnimationEnhancer();
    const mobileEnhancer = new MobileEnhancer();
    const performanceOptimizer = new PerformanceOptimizer();
    
    // Add some additional visual effects
    const addVisualEffects = () => {
        // Add glow effect to active elements
        const style = document.createElement('style');
        style.textContent = `
            .nav-item.active {
                box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
            }
            
            .planet:hover {
                filter: brightness(1.2) drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
            }
            
            .moon:hover {
                filter: brightness(1.3) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6));
            }
        `;
        document.head.appendChild(style);
    };
    
    addVisualEffects();
    
    // Preload content and show loading state
    document.body.classList.add('loading');
    
    setTimeout(() => {
        document.body.classList.remove('loading');
        console.log('Space Voyage initialized successfully!');
    }, 1000);
});

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { planetData, SceneManager };
}