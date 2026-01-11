// ================================
// Navigation & Mobile Menu
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Animate hamburger
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Active navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // ================================
    // Scroll Animations
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ================================
    // Home Page Features
    // ================================
    if (document.getElementById('greeting')) {
        // Dynamic greeting based on time
        const greeting = document.getElementById('greeting');
        const hour = new Date().getHours();
        let greetingText = 'Hello!';

        if (hour < 12) {
            greetingText = 'Good morning!';
        } else if (hour < 18) {
            greetingText = 'Good afternoon!';
        } else {
            greetingText = 'Good evening!';
        }

        greeting.textContent = greetingText;

        // Typing animation
        const typedTextSpan = document.getElementById('typed-text');
        const textArray = ["Hi, I'm Maxfield Ma", "Welcome to my website", "Let's connect!"];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 500);
            }
        }

        // Start typing animation
        setTimeout(type, newTextDelay + 250);
    }

    // ================================
    // Interests Page Features
    // ================================
    if (document.querySelector('.interest-card')) {
        // Flip cards on click
        document.querySelectorAll('.interest-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });

        // Fun facts generator
        const factBtn = document.getElementById('fact-btn');
        const factDisplay = document.getElementById('fact-display');

        const facts = [
            "I main mid lane in League of Legends!",
            "I've built entire cities in Minecraft with redstone contraptions.",
            "I can play both classical and modern pieces on violin and piano.",
            "My favorite programming languages are Python and JavaScript.",
            "I've been playing tennis since I was 10 years old.",
            "I love creating mods for Minecraft in my free time.",
            "My coding projects range from games to web applications.",
            "I enjoy teaching others how to code and play music.",
            "I practice piano for at least an hour every day.",
            "My dream is to develop my own video game someday!"
        ];

        if (factBtn && factDisplay) {
            factBtn.addEventListener('click', () => {
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                factDisplay.textContent = randomFact;
                factDisplay.classList.add('active');

                // Animation effect
                factDisplay.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    factDisplay.style.transform = 'scale(1)';
                }, 100);
            });
        }

        // Quiz functionality
        const quizOptions = document.querySelectorAll('.quiz-option');
        const quizResult = document.getElementById('quiz-result');

        quizOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Disable all options after one is clicked
                quizOptions.forEach(opt => opt.disabled = true);

                const answer = option.getAttribute('data-answer');

                if (answer === 'correct') {
                    option.classList.add('correct');
                    quizResult.textContent = '🎉 Correct! Great guess!';
                    quizResult.classList.add('show', 'correct-answer');
                } else {
                    option.classList.add('wrong');
                    // Highlight the correct answer
                    document.querySelector('[data-answer="correct"]').classList.add('correct');
                    quizResult.textContent = '❌ Not quite! The correct answer is highlighted.';
                    quizResult.classList.add('show', 'wrong-answer');
                }

                // Reset quiz after 3 seconds
                setTimeout(() => {
                    quizOptions.forEach(opt => {
                        opt.disabled = false;
                        opt.classList.remove('correct', 'wrong');
                    });
                    quizResult.classList.remove('show', 'correct-answer', 'wrong-answer');
                }, 3000);
            });
        });
    }

    // ================================
    // Contact Page Features
    // ================================
    if (document.querySelector('.copy-btn')) {
        // Copy to clipboard functionality
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const textToCopy = btn.getAttribute('data-copy');
                const feedback = btn.nextElementSibling;

                // Copy to clipboard
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Show feedback
                    feedback.classList.add('show');
                    btn.textContent = 'Copied!';

                    // Reset after 2 seconds
                    setTimeout(() => {
                        feedback.classList.remove('show');
                        btn.textContent = 'Copy Email';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                    btn.textContent = 'Failed';
                    setTimeout(() => {
                        btn.textContent = 'Copy Email';
                    }, 2000);
                });
            });
        });

        // Social icon hover effects
        document.querySelectorAll('.contact-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.contact-icon');
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            });

            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.contact-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    // ================================
    // Smooth Scrolling
    // ================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ================================
    // Page Transition Effect
    // ================================
    document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
        if (link.hostname === window.location.hostname && !link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');

                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.3s ease';

                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            });
        }
    });

    // Fade in on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});
