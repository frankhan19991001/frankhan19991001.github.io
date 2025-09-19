document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            image: "/assets/img/product3.jpg",
            title: "Snowy Smart Goggle",
            description: "A smart goggle that connects nature and technology with human beings",
            accomplishments: [
                "<b>Tools:</b> Python, GPT-4o, Raspberry Pi 5, PyTorch",
                "Purchase a physical copy.",
                "Install an app and register on your phone.",
                "Go snowboarding/skiing and enjoy the view!"
            ],
            liveLink: "https://galvanic-music.herokuapp.com/",
            sourceLink: "https://github.com/varadbhogayata/music-player"
        },
        {
            image: "/assets/img/pong-game.png",
            title: "Pong Game",
            description: "A video game retro of the classic pong game",
            accomplishments: [
                "<b>Tools:</b> Unity, C#",
                "Download the pong game from Steam.",
                "Install and play!"
            ],
            liveLink: "https://galvanic-music.herokuapp.com/",
            sourceLink: "https://github.com/varadbhogayata/music-player"
        },
        {
            image: "/assets/img/traffic-sign.jpg",
            title: "Traffic Sign Recognition",
            description: "An AI that does traffic sign recognition",
            accomplishments: [
                "<b>Tools:</b> PyTorch, Python, NumPy",
                "Install the model on the car.",
                "Drive around and see the result."
            ],
            liveLink: "https://quiz-up-app.herokuapp.com/",
            sourceLink: "https://github.com/varadbhogayata/QuizUp"
        },
        {
            image: "/assets/img/map-app.jpg",
            title: "Map App",
            description: "A map application",
            accomplishments: [
                "<b>Tools:</b> Unity, C#",
                "Enjoy the map."
            ],
            liveLink: "https://galvanic-music.herokuapp.com/",
            sourceLink: "https://github.com/varadbhogayata/music-player"
        }
    ];

    const projectsContainer = document.getElementById('dynamic-projects-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let projectsLoaded = 0;

    function createProjectCard(project) {
        const accomplishmentsList = project.accomplishments.map(item => `<li>${item}</li>`).join('');

        return `
            <div class="col s12 m6 l4">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img alt="${project.title}" src="${project.image}" style="height: 100%; width: 100%" class="activator" />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                        <p>${project.description}</p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                        <ul>
                            ${accomplishmentsList}
                        </ul>
                        <div class="card-action">
                            <a aria-label="Visit ${project.title} live" href="${project.liveLink}" target="_blank" data-position="top" data-tooltip="View Online" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-external-link"></i></a>
                            <a aria-label="Visit the GitHub repo for ${project.title}" href="${project.sourceLink}" target="_blank" data-position="top" data-tooltip="View Source" class="btn-floating btn-large waves-effect waves-light blue-grey tooltipped"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function loadProjects(count) {
        const projectsToLoad = projects.slice(projectsLoaded, projectsLoaded + count);

        projectsToLoad.forEach(project => {
            projectsContainer.innerHTML += createProjectCard(project);
        });

        projectsLoaded += projectsToLoad.length;

        // Re-initialize tooltips for any new elements
        $('.tooltipped').tooltip({ delay: 50 });

        if (projectsLoaded >= projects.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    // Initial load of the top 3 projects
    loadProjects(3);

    // Set up "Load More" button to load one project at a time
    loadMoreBtn.addEventListener('click', () => {
        loadProjects(1);
    });
});