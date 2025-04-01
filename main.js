// Type Effect
const roles = ['Data Analyst', 'BI Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1200;

function typeText() {
    const currentRole = roles[roleIndex];
    const roleElement = document.getElementById('roles'); // Corrected to match HTML id

    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1) + '|'; // Adding the pipe operator
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeText, newTextDelay); // Change delay here
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length; // Cycling through roles
    }

    setTimeout(typeText, isDeleting ? erasingDelay : typingDelay);
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, newTextDelay); // Add a delay before starting the typing
});




// Project data
const projects = [
    {
        title: "Crime Analysis",
        description: "This project analyzes crime patterns in Washington, D.C., visualizing trends, hotspots, and crime severity to aid law enforcement and policymakers.",
        image: "images\\Thumbnails\\crime_analysis.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Crime-Analysis-03-25/blob/main/docs/project_documentation.md"
    },
    {
        title: "Logistics Analysis",
        description: "This project analyzes logistics data to optimize shipments, reduce delays, improve transportation efficiency, and enhance supply chain operations.",
        image: "images/Thumbnails/logistics_analysis.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Logistics-Analysis-03-25/blob/main/docs/project_documentation.md"
    },
    {
        title: "Merchandise Analysis",
        description: "This project examines sales trends for Lee Chatmen’s merchandise, exploring product performance, customer demographics, pricing impact, and shipping influences.",
        image: "images\\Thumbnails\\merchandise_sales.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Merchandise-Sales-Analysis-01-25/blob/main/docs/project_documentation.md"
    },
    {
        title: "Christmas Sales Analysis",
        description: "This project analyzes Christmas shopping trends, exploring sales patterns, customer demographics, and promotional impact to optimize holiday sales strategies.",
        image: "images\\Thumbnails\\xmas_sales_image.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Christmas-Sales-Analysis-01-25/blob/main/docs/project_documentation.md"
    },
    {
        title: "Supply Chain Analysis",
        description: "This project analyzes supply chain data to optimize inventory, assess supplier performance, and enhance logistics operations for better decision-making.",
        image: "images\\Thumbnails\\supply_chain_image.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Supply-Chain-Analysis-11-24/blob/main/docs/project_documentation.md"
    },
    {
        title: "Airline Delays Analysis",
        description: "This project examines flight delays, their causes, and impact on airlines, airports, and businesses. It uses data to identify patterns and improve efficiency.",
        image: "images\\Thumbnails\\airline_delays.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Airline-Delays-Analysis-02-25/blob/main/docs/project_documentation.md"
    },
    {
        title: "Email Marketing Analysis",
        description: "This project analyzes email campaign performance for a DIY content platform, tracking engagement, conversions, trends, and audience insights.",
        image: "images\\Thumbnails\\email_campaign.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Email-Campaign-Analysis-11-24/blob/main/docs/project_documentation.md"
    },
    {
        title: "Candy Market Analysis",
        description: "This Power BI report explores confectionery market trends, sales volumes, manufacturer performance, and packaging insights to aid decision-making.",
        image: "images\\Thumbnails\\confectionery_image.png",
        tools: ["Power BI"],
        link: "https://github.com/Chakradhar-M/Confectionery-Market-Analysis-12-24/blob/main/docs/project_documentation.md"
    }
];

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const body = document.body;

function toggleMenu() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menu-open');
}

hamburger.addEventListener('click', toggleMenu);

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !hamburger.contains(e.target)) {
        toggleMenu();
    }
});

// Populate projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tools">
                    ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-button">View Project</a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}


// Form handling


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Email validation using regex
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return; // Stop form submission if the email is invalid
    }

    // Get form data
    var formData = new FormData();
    formData.append('entry.353658494', name); // Name
    formData.append('entry.1359563634', email); // Email
    formData.append('entry.1512889585', subject); // Subject
    formData.append('entry.2089113007', message); // Message

    // Submit to Google Form
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfx2pKxYZ6eTP2jI-6u8aGtUGw9vVa-z2-jT6oOn8qOKkM2bA/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Ensures the form submits without redirect
    })
    .then(() => {
        // After submitting, show friendly success message with emoji and reset form
        alert('Message sent successfully! 😊 Have a good day!');
        document.getElementById('contact-form').reset(); // Reset form after submission
    })
    .catch(() => {
        // Show error if the submission fails (though it's less likely with no-cors)
        alert('There was an error sending your message. 😔');
    });
});








// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    populateProjects();
});