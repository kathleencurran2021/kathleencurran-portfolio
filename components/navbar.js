document.write(` 
<nav class="navbar navbar-expand-md pt-5">
<div class="container-fluid flex-column flex-guy">
  <a class="kat-icon" href="index.html">
    <img src="/images/banner.png" alt="Kathleen Curran: UX Research and Design" />
  </a>
  <ul class="navbar-nav justify-content-between navbar-tabs">
    <li class="nav-item">
      <a class="nav-link nav-home " href="index.html">home</a>
    </li>
    <!-- start of dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle nav-projects" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Projects
      </a>
      <ul class="dropdown-menu" aria-label="navbaDropdownMenuLink">
        <li>
          <a class="dropdown-item" href="cutgroup-project.html">Civic User Testing</a>
        </li>
        <li>
          <a class="dropdown-item" href="sahiyo-project.html">Sahiyo</a>
        </li>
        <li>
          <a class="dropdown-item" href="huddle.html">Huddle</a>
        </li>
      </ul>
    </li>
    <!-- End of dropdown -->
    <li class="nav-item">
      <a class="nav-link nav-about" href="about.html">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-resume" href="resume.html">Resume</a>
    </li>
  </ul>
</div>
</nav>

`)
