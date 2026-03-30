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
            about_desc: 'Automation-focused QA Engineer with 6+ years of experience delivering high-quality, reliable, and scalable software solutions.<br><br>I specialize in designing and building robust test automation frameworks for web applications. I have transitioned from Selenium/C# to Playwright/TypeScript, improving test reliability, execution speed, and maintainability. I leverage AI-assisted coding tools to accelerate development and enhance productivity.<br><br>Experienced in UI and API testing, I focus on creating efficient, maintainable, and scalable automation solutions aligned with modern development practices.',
            about_languages_label: 'Languages:',
            about_languages: 'English, Malayalam, Hindi',
            about_location_label: 'Location:',
            about_location_value: 'Emmen, Netherlands',
            about_status_label: 'Status:',
            about_status: 'Looking For The Right Opportunity',
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
            exp_box1_company: 'Mphasis Limited | Bangalore | Karnataka | India',
            exp_box1_date: 'August 2022 – December 2025',
            exp_box1_li1: 'Transitioned automation frameworks from Selenium/C# to Playwright/TypeScript, improving test reliability and execution speed',
            exp_box1_li2: 'Leveraged GitHub Copilot to accelerate development and enhance productivity',
            exp_box1_li3: 'Integrated AI-assisted tools into the development workflow for efficient delivery',
            exp_box2_title: 'QA Engineer',
            exp_box2_company: 'SAP Labs India | Bangalore | Karnataka | India',
            exp_box2_date: 'September 2019 – August 2022',
            exp_box2_li1: 'Performed Black Box, Regression, and Performance testing across web applications',
            exp_box2_li2: 'Developed and maintained manual and automated test suites',
            exp_box2_li3: 'Conducted API testing using Postman, Swagger, and Pytest',
            exp_box2_li4: 'Tracked defects and managed test cycles using Jira',
            edu_heading_1: 'Academic',
            edu_heading_2: 'Journey',
            edu_box1_title: 'B.Tech – Computer Science & Engineering',
            edu_box1_company: 'Kalasalingam Academy of Research & Education | Krishnankoil | Tamil Nadu | India',
            edu_box1_date: 'July 2015 – May 2019',
            edu_box1_desc: 'Focused on core computer science concepts, software testing, and development principles',
            edu_box2_title: 'Vocational Higher Secondary School – Computer Science',
            edu_box2_company: 'Rahmaniya VHSS | Kozhikode | Kerala | India',
            edu_box2_date: 'July 2013 – March 2015',
            edu_box2_desc: 'Focused on computer science fundamentals and practical applications',
            edu_box3_title: 'SSLC – 10th Standard',
            edu_box3_company: 'Azhikode High School | Kannur | Kerala | India',
            edu_box3_date: 'June 2011 – March 2013',
            edu_box3_desc: 'Built a strong academic foundation across core subjects',
            awards_heading_1: 'Key',
            awards_heading_2: 'Awards',
            awards_box1_title: 'GitHub Copilot License Holder',
            awards_box1_date: 'Oct 2024',
            awards_box1_li1: 'Certified by Mphasis with a 90% proficiency score in AI-assisted development.',
            awards_box2_title: 'NPTEL Certifications',
            awards_box2_company: 'Professional Training',
            awards_box2_date: 'Sep 2018',
            awards_box2_li1: 'Completed "Software Testing" and awarded "ELITE" in "Joy of Computing in Python."',
            contact_heading_1: 'Contact',
            contact_heading_2: 'Me',
            contact_email: 'Email',
            contact_send_email: 'Send Mail',
            contact_linkedin: 'LinkedIn',
            contact_connect: 'Connect',
            contact_whatsapp: 'WhatsApp',
            contact_message: 'Message',
            contact_phone: 'Direct Call',
            contact_call: 'Call Now',
            footer_text: 'Copyright &copy; 2026 by Sripad Prakash | All Rights Reserved.'
        },
        nl: {
            nav_home: 'Home',
            nav_about: 'Over Mij',
            nav_skills: 'Vaardigheden',
            nav_experience: 'Ervaring',
            nav_education: 'Opleiding',
            nav_awards: 'Onderscheidingen',
            nav_contact: 'Contact',
            badge_copilot: 'Gecertificeerd GitHub Copilot Expert',
            home_hello: 'Hallo, ik ben',
            home_desc: 'Hooggekwalificeerde Automation QA Engineer met 6 jaar IT-ervaring, gespecialiseerd in webtesten. Een oplossingsgerichte professional die zich snel aanpast en resultaten van hoge kwaliteit levert.',
            home_cv: 'CV Downloaden',
            typed_strings: ['Automation QA Engineer', 'Test Automatisering Expert', 'Playwright Specialist', 'AI-Powered QA Professional'],
            about_heading_1: 'Over',
            about_heading_2: 'Mij',
            about_sub: 'Automatiseringstestingenieur',
            about_desc: 'Automatiseringsgerichte QA Engineer met meer dan 6 jaar ervaring in het leveren van hoogwaardige, betrouwbare en schaalbare softwareoplossingen.<br><br>Ik ben gespecialiseerd in het ontwerpen en bouwen van robuuste testautomatiseringsframeworks voor webapplicaties. Ik ben overgestapt van Selenium/C# naar Playwright/TypeScript, waardoor de betrouwbaarheid, uitvoeringssnelheid en onderhoudbaarheid van tests zijn verbeterd. Ik maak gebruik van AI-ondersteunde codering om de ontwikkeling te versnellen en de productiviteit te verhogen.<br><br>Ervaren in UI- en API-testen, richt ik mij op het creëren van efficiënte, onderhoudbare en schaalbare automatiseringsoplossingen die aansluiten bij moderne ontwikkelpraktijken.',
            about_languages_label: 'Talen:',
            about_languages: 'Engels, Malayalam, Hindi',
            about_location_label: 'Locatie:',
            about_location_value: 'Emmen, Nederland',
            about_status_label: 'Status:',
            about_status: 'Op zoek naar de juiste kans',
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
            exp_box1_title: 'Automatiseringstestingenieur',
            exp_box1_company: 'Mphasis Limited | Bangalore | Karnataka | India',
            exp_box1_date: 'Augustus 2022 – December 2025',
            exp_box1_li1: 'Overgestapt van Selenium/C# naar Playwright/TypeScript, waardoor de betrouwbaarheid en snelheid van tests zijn verbeterd',
            exp_box1_li2: 'GitHub Copilot gebruikt om de ontwikkelsnelheid te verhogen en productiviteit te verbeteren',
            exp_box1_li3: 'AI-ondersteunde tools geïntegreerd in de ontwikkelworkflow voor efficiënte levering',
            exp_box2_title: 'QA Engineer',
            exp_box2_company: 'SAP Labs India | Bangalore | Karnataka | India',
            exp_box2_date: 'September 2019 – Augustus 2022',
            exp_box2_li1: 'Black box-, regressie- en performancetests uitgevoerd voor webapplicaties',
            exp_box2_li2: 'Handmatige en geautomatiseerde testsuites ontwikkeld en onderhouden',
            exp_box2_li3: 'API-tests uitgevoerd met Postman, Swagger en Pytest',
            exp_box2_li4: 'Bugs bijgehouden en testcycli beheerd met Jira',
            edu_heading_1: 'Opleiding',
            edu_heading_2: 'Traject',
            edu_box1_title: 'B.Tech – Computer Science & Engineering',
            edu_box1_company: 'Kalasalingam Academy of Research & Education | Krishnankoil | Tamil Nadu | India',
            edu_box1_date: 'Juli 2015 – Mei 2019',
            edu_box1_desc: 'Gericht op kernconcepten van informatica, softwaretesten en ontwikkelingsprincipes',
            edu_box2_title: 'Beroepsgerichte Hogere Middelbare School – Informatica',
            edu_box2_company: 'Rahmaniya VHSS | Kozhikode | Kerala | India',
            edu_box2_date: 'Juli 2013 – Maart 2015',
            edu_box2_desc: 'Gericht op basisprincipes van informatica en praktische toepassingen',
            edu_box3_title: 'SSLC – 10e klas',
            edu_box3_company: 'Azhikode High School | Kannur | Kerala | India',
            edu_box3_date: 'Juni 2011 – Maart 2013',
            edu_box3_desc: 'Sterke academische basis opgebouwd in kernvakken',
            awards_heading_1: 'Belangrijkste',
            awards_heading_2: 'Onderscheidingen',
            awards_box1_title: 'GitHub Copilot Licentiehouder',
            awards_box1_date: 'Okt 2024',
            awards_box1_li1: 'Gecertificeerd door Mphasis met een vaardigheidsscore van 90% in AI-ondersteunde ontwikkeling.',
            awards_box2_title: 'NPTEL Certificeringen',
            awards_box2_company: 'Professionele Training',
            awards_box2_date: 'Sep 2018',
            awards_box2_li1: 'Voltooide "Software Testing" en bekroond met "ELITE" in "Joy of Computing in Python."',
            contact_heading_1: 'Neem',
            contact_heading_2: 'Contact Op',
            contact_email: 'E-mail',
            contact_send_email: 'E-mail Sturen',
            contact_linkedin: 'LinkedIn',
            contact_connect: 'Verbinden',
            contact_whatsapp: 'WhatsApp',
            contact_message: 'Bericht',
            contact_phone: 'Telefoon',
            contact_call: 'Bel Nu',
            footer_text: 'Copyright &copy; 2026 door Sripad Prakash | Alle rechten voorbehouden.'
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
                    if (span) {
                        span.textContent = translations[lang][key];
                    } else {
                        // If no span found but has children (like <br>), update innerHTML
                        element.innerHTML = translations[lang][key];
                    }
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