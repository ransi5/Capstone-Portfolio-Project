const project = [
  {
    projName: 'Full Stack App with React and Express REST API',
    image: 'images/project-1.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FSJD-Project-10.git',
    details: `<h3 class="highlight">Key Features</h3>
    <p>This app's UI is built with React and the REST API is powered by Express to manage a SQL database.</p>
    <p>The App allows user to view, edit, delete and create courses on a school database.</p>
    <p>The app allows user to register and signin.</p>
    <p>What a user can view and actions one can perform is controlled by user authentication.</p>`
  },
  {
    projName: 'React Gallery App',
    image: 'images/project-2.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FSJD-Project-7.git',
    details: `<h3 class="highlight">Key Features</h3>
    <p>The React powered API allows uses flickr api to render images requested by user.</p>
    <p>The app uses pagination feature and allows user to choose the number of images per page.</p>`
  },
  {
    projName: 'SQL Library Manager',
    image: 'images/project-3.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FSJD-Project-8.git',
    details: `<h3 class="highlight">Key Features</h3>
    <p>This Express and pug powered app allows user to view, update, delete and create books in a SQL library.</p>
    <p>The app provides search and a beautiful pagination feature which allows user to control number of books displayed per page.</p>`
  },
  {
    projName: 'Static Node.js and Express Portfolio Site',
    image: 'images/project-4.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FSJD-Project-6.git',
    details: `<h3 class="highlight">Key Features</h3>
    <p>Used Node.js, Express and Pug template to create a portfolio website to display projects</p>
    <p>Provided user a modal form to set up cookies and display customized messages depending
    on user choice.</p>`
  },
  {
    projName: 'TreeHouse Capstone Portfolio Project',
    image: 'images/project-9.jpg',
    GitHub: 'https://github.com/ransi5/RandeepGill.git',
    ghpages: 'https://ransi5.github.io/RandeepGill/',
    details: `<p>Obtained <span class="highlight">"Exceed Expectations"</span>
    grade for this Project</p><h3 class="highlight">Key Features</h3>
    <p>Developed the site based on the movie "Thor's Arcnet where science and magic are
    one and the same" theme.</p>
    <p>Creatively developed combination of HTML, CSS, JavaScript to make the Arc-Net theme real.</p>
    <p>Develped a design so navigation is easily accessible on all screen sizes and user is not
    confused about where he/she is on the website.</p>
    <p>Developed code so the website is just a littel bit different everytime he/she visits.</p>
    <p>Coded imperfections and corrections to make the site appear alive and aware.</p>`
  },
  {
    projName: '"Pearson Test of English Education" Project',
    image: 'images/project-0.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FEWD-Project-1.git',
    details: `<h3 class="highlight">Key Features</h3>
    <p>I initiated this project in 2016 with absolutely no knowledge of coding.</p>
    <p>I quickly self-taught HTML, CSS, JavaScript, JQuery, Bootstrap, PHP, SQL and
    finished the Project as per schedule working 8 months over a span of 1 year.</p>
    <p>I designed, developed the code and content Single-handedly.</p>
    <p>I designed and developed a module which helped give student key performance metrics at
    macro and micro Language skills level to focus on in dynamic graphs. The
    students could choose target score to generate PTE skills they need to
    work on to meet their goals.</p>
    <p>At the time and may be even today my PTE mock tests most closely simulated
    the actual PTE test.</p>
    <p>The SERP focused design and content development helped the site be No. 1
    for many important keywords in key markets within a year.</p>
    <p class='highlight'>Get in touch for login and sql table to run this website on localhost</p>`
  },
  {
    projName: 'TreeHouse An Interactive Photo Gallery Project',
    image: 'images/project-5.jpg',
    GitHub: 'https://github.com/ransi5/Treehouse-FEWD-Project-5.git',
    ghpages: 'https://ransi5.github.io/Treehouse-FEWD-Project-5/',
    details: `<h3 class="highlight">Key Features</h3>
    <p>The page displays a gallery of images and allows user to search and view photos in a lighthouse.</p>
    <p>Developed custom code for search and lighthouse functionalities from scratch</p>`
  },
];

function createPortfolio(project) {
  const port = document.querySelector('.portfolio');

  project.forEach((item, i) => {

    let card = document.createElement('div');
    card.className = 'card';
    card.id = 'card' + i;
    card.setAttribute('onclick', `cardDisplay('card${i}', event)`);
    port.appendChild(card);

    let img = document.createElement('img');
    img.src = item.image;
    img.alt = item.projName;
    card.appendChild(img);

    let dv1 = document.createElement('div');
    dv1.className = 'info-card hide';
    card.appendChild(dv1);

    let h3 = document.createElement('h3');
    h3.textContent = item.projName;
    dv1.appendChild(h3);

    let para1 = document.createElement('p');
    para1.className = 'git';
    para1.innerHTML = `GitHub: <a href="${item.GitHub}" target="_blank">${item.GitHub}</a>`;
    dv1.appendChild(para1);

    if (item.ghpages) {
      let para2 = document.createElement('p');
      para2.className = 'gpage'
      para2.innerHTML = `gh-pages: <a href="${item.ghpages}" target="_blank">${item.ghpages}</a>`;
      dv1.appendChild(para2);
    }

    let dv2 = document.createElement('div');
    dv2.className = 'hide';
    dv2.id = 'rev-card';
    dv2.innerHTML = item.details;
    card.appendChild(dv2);
  });
}
