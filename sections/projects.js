import { createItem } from "../script.js";

export function renderProjects(target) {
    target.innerHTML = `<h1 class="text-center">My Projects</h1><div class="container" id="projects-container"></div>`;

    const container = target.querySelector("#projects-container");

    createItem(
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "Portfolio required for subject PF101",
        "This was a project that's required for the subject PF101. It was a simple portfolio using Visual Basic. <br><a href='https://github.com/JJonasB/PF101-Rework/tree/master/PF101%20Rework%20VB' target='_blank'>View on GitHub</a>",
        "PF101 Portfolio",
        [
            { name: "Visual Basic", percent: 100, color: "#945db7" }
        ],
        container
    );

    createItem(
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "KOW 2.0 (Contributor)",
        "A project I contributed to, though currently incomplete. <br><a href='https://github.com/Jemz-h/KOW-2.0' target='_blank'>View on GitHub</a>",
        "KOW 2.0",
        [
            { name: "Dart",   percent: 56.4, color: "#00B4AB" },
            { name: "C++",    percent: 22.0, color: "#f34b7d" },
            { name: "CMake",  percent: 17.5, color: "#DA3434" },
            { name: "Swift",  percent: 1.6,  color: "#ffac45" },
            { name: "C",      percent: 1.3,  color: "#555555" },
            { name: "HTML",   percent: 1.1,  color: "#e34c26" },
            { name: "Other",  percent: 0.1,  color: "#cccccc" }
        ],
        container
    );

    createItem(
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "Todo List CRUD",
        "A simple Todo List application that allows users to create, read, update, and delete tasks, which I built in less than an hour. <br><a href='https://github.com/JJB-AR/TodoListCRUD1' target='_blank'>View on GitHub</a>",
        "Todo List Application",
        [
            { name: "Visual Basic", percent: 100, color: "#945db7" }
        ],
        container
    );
}
