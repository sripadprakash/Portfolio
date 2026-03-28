document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const langBtns = document.querySelectorAll('.lang-btn');
    let typedInstance = null;

    // 2. COMPREHENSIVE TRANSLATIONS DATA
    const translations = {
        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_skills: 'Skills',
            nav_experience: 'Experience',
            nav_education: 'Education',
            nav_awards: 'Awards',
            nav_contact: 'Contact',
            badge_copilot: 'Certified GitHub Copilot Expert',
            home_hello: "Hello, I'm",
            home_desc: 'Highly qualified Automation QA Engineer with 6 years of IT experience, specializing in web testing. A solution-focused professional who adapts quickly and delivers high-quality results.',
            home_cv: 'Download CV',
            typed_strings: ['Automation QA Engineer', 'Test Automation Expert', 'Playwright Specialist', 'AI-Powered QA Professional'],
            about_heading_1: 'About',
            about_heading_2: 'Me',
            about_sub: 'Automation QA Engineer',
            about_desc: 'I specialize in building robust test automation frameworks that ensure high software quality. With 6 years of experience across Mphasis and SAP Labs, I’ve mastered the transition from Selenium/C# to Playwright/TypeScript, leveraging AI-assisted coding to accelerate delivery.',
            about_contact: 'Hire Me',
            skills_heading_1: 'Core',
            skills_heading_2: 'Skills',
            skills_box1_title: 'Automation & API Testing',
            skills_box1_desc: 'Playwright, Selenium WebDriver, Postman, Swagger UI, GitHub Copilot (AI-assisted coding)',
            skills_box2_title: 'Quality Assurance',
            skills_box2_desc: 'Test Case Development, Test Execution, Jira Bug Tracking, Black Box Testing, Performance Testing',
            skills_box3_title: 'Tech Stack',
            skills_box3_desc: 'TypeScript, C#, Java (Basic), Python, Windows, macOS, Linux',
            skills_box4_title: 'Professional',
            skills_box4_desc: 'Adaptability, Time Management, Collaboration, Problem Solving, Continuous Improvement',
            experience_heading_1: 'Work',
            experience_heading_2: 'Experience',
            exp_box1_title: 'Automation Test Engineer',
            exp_box1_li1: 'Transitioned frameworks from Selenium/C# to Playwright/TypeScript.',
            exp_box1_li2: 'Utilized GitHub Copilot to accelerate development by 30%.',
            exp_box1_li3: 'Ensured seamless integration of AI tools into the Dev workflow.',
            exp_box2_title: 'QA Engineer',
            exp_box2_li1: 'Conducted Black Box, Regression, and Performance testing.',
            exp_box2_li2: 'Maintained robust manual and automated test suites.',
            exp_box2_li3: 'Performed API testing via Postman, Swagger, and Pytest.',
            edu_heading_1: 'Academic',
            edu_heading_2: 'Journey',
            awards_heading_1: 'Key',
            awards_heading_2: 'Awards',
            edu_column1_title: 'Academics',
            edu_column2_title: 'Certifications',
            edu_acc1_title: 'GitHub Copilot License Holder',
            contact_heading_1: 'Contact',
            contact_heading_2: 'Me',
            contact_email: 'Email',
            contact_send_email: 'Send Mail',
            contact_connect: 'Connect',
            contact_message: 'Message',
            contact_phone: 'Direct Call',
            contact_call: 'Call Now',
            footer_text: 'Copyright &copy; 2024 by Sripad Prakash | All Rights Reserved.'
        },
        nl: {
            nav_home: 'Home',
            nav_about: 'Over Mij',
            nav_skills: 'Vaardigheden',
            nav_experience: 'Ervaring',
            nav_education: 'Opleiding',
            nav_contact: 'Contact',
            badge_copilot: 'Gecertificeerd GitHub Copilot Expert',
            home_hello: 'Hallo, ik ben',
            home_desc: 'Hooggekwalificeerde Automation QA Engineer met 6 jaar IT-ervaring, gespecialiseerd in webtesten. Een oplossingsgerichte professional die zich snel aanpast en resultaten van hoge kwaliteit levert.',
            home_cv: 'CV Downloaden',
            typed_strings: ['Automation QA Engineer', 'Test Automatisering Expert', 'Playwright Specialist', 'AI-Powered QA Professional'],
            about_heading_1: 'Over',
            about_heading_2: 'Mij',
            about_sub: 'Automation QA Engineer',
            about_desc: 'Ik ben gespecialiseerd in het bouwen van robuuste testautomatiseringsframeworks die een hoge softwarekwaliteit garanderen. Met 6 jaar ervaring bij Mphasis en SAP Labs heb ik de overstap van Selenium/C# naar Playwright/TypeScript onder de knie gekregen, waarbij ik AI-ondersteunde codering gebruik om de levering te versnellen.',
            about_contact: 'Neem contact op',
            skills_heading_1: 'Kern',
            skills_heading_2: 'Vaardigheden',
            skills_box1_title: 'Automation & API Testen',
            skills_box1_desc: 'Playwright, Selenium WebDriver, Postman, Swagger UI, GitHub Copilot (AI-ondersteund coderen)',
            skills_box2_title: 'Kwaliteitsborging',
            skills_box2_desc: 'Testcase-ontwikkeling, Testuitvoering, Jira Bug Tracking, Black Box Testing, Performance Testing',
            skills_box3_title: 'Tech Stack',
            skills_box3_desc: 'TypeScript, C#, Java (Basis), Python, Windows, macOS, Linux',
            skills_box4_title: 'Professioneel',
            skills_box4_desc: 'Aanpassingsvermogen, Time Management, Samenwerking, Probleemoplossing, Continue Verbetering',
            experience_heading_1: 'Werk',
            experience_heading_2: 'Ervaring',
            exp_box1_title: 'Automation Test Engineer',
            exp_box1_li1: 'Frameworks overgezet van Selenium/C# naar Playwright/TypeScript.',
            exp_box1_li2: 'GitHub Copilot gebruikt om de ontwikkeling met 30% te versnellen.',
            exp_box1_li3: 'Naadloze integratie van AI-tools in de Dev-workflow gegarandeerd.',
            exp_box2_title: 'QA Engineer',
            exp_box2_li1: 'Uitvoeren van Black Box, Regressie en Performance testen.',
            exp_box2_li2: 'Onderhouden van robuuste handmatige en geautomatiseerde testsuites.',
            exp_box2_li3: 'API-testen uitgevoerd via Postman, Swagger en Pytest.',
            edu_heading_1: 'Opleiding',
            edu_heading_2: '& Awards',
            edu_column1_title: 'Academici',
            edu_column2_title: 'Certificeringen',
            edu_acc1_title: 'GitHub Copilot Licentiehouder',
            contact_heading_1: 'Neem',
            contact_heading_2: 'Contact Op',
            contact_email: 'E-mail',
            contact_send_email: 'E-mail Sturen',
            contact_connect: 'Verbinden',
            contact_message: 'Bericht',
            contact_phone: 'Telefoon',
            contact_call: 'Bel Nu',
            footer_text: 'Copyright &copy; 2024 door Sripad Prakash | Alle rechten voorbehouden.'
        }
    };

    // 3. LANGUAGE SWITCH LOGIC
    const changeLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Handle innerHTML for elements with icons/HTML, textContent for plain text
                if (element.children.length > 0 && !element.classList.contains('btn')) {
                    const icon = element.querySelector('i');
                    const span = element.querySelector('span');
                    if (span) span.textContent = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update Typed.js with translated strings
        if (typedInstance) typedInstance.destroy();
        initTyped(translations[lang].typed_strings);

        // UI active state
        langBtns.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-lang') === lang));
        localStorage.setItem('preferredLang', lang);
    };

    langBtns.forEach(btn => {
        btn.onclick = () => changeLanguage(btn.getAttribute('data-lang'));
    });

    // 4. NAVBAR & SCROLL LOGIC
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    const targetLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (targetLink) targetLink.classList.add('active');
                });
            }
        });

        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };

    // 5. TYPED.JS INITIALIZATION
    const initTyped = (strings) => {
        if (document.querySelector('.multiple-text')) {
            typedInstance = new Typed('.multiple-text', {
                strings: strings,
                typeSpeed: 70,
                backSpeed: 50,
                backDelay: 2000,
                loop: true
            });
        }
    };

    // Initialize with preferred language
    const preferredLang = localStorage.getItem('preferredLang') || 'en';
    changeLanguage(preferredLang);

    // 6. SCROLL REVEAL ANIMATIONS (Executive Feel)
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200,
        // reset: true // Use true if you want animations to repeat on every scroll
    });

    sr.reveal('.home-content, .heading');
    sr.reveal('.home-img, .skills-box, .contact-card, .timeline-box', { interval: 200, origin: 'bottom' });
    sr.reveal('.about-img', { origin: 'left' });
    sr.reveal('.about-content', { origin: 'right' });
    sr.reveal('.education-column', { interval: 200, origin: 'left' });
});