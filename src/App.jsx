import "./App.css";

const EMAIL = "mailto:chris@transparencylabs.co.uk";

export default function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          <img src="/logo_new.png" alt="Transparency Labs logo" />
          <div>
            <strong>Transparency Labs</strong>
            <span>Reimagining decisions. Led by experts, backed by AI.</span>
          </div>
        </a>

        <div className="navLinks">
          <a href="#research">Technology</a>
          <a href="#platform">Platform</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a className="navButton" href={EMAIL}>Get in touch</a>
        </div>
      </nav>

      <section className="hero sectionBackground" id="home">
        <div className="network"></div>

        <div className="heroText">
          <p className="eyebrow">Transparency Labs</p>
          <h1>Transparent AI for high-consequence clinical decisions.</h1>
          <p className="subhead">
            We build interpretable, uncertainty-aware AI systems that help clinical teams
            prepare complex data, review evidence and make better-informed decisions in
            multidisciplinary cancer care.
          </p>

          <div className="buttons">
            <a className="primary" href={EMAIL}>Request demo</a>
            <a className="secondary" href="#research">Explore the technology</a>
          </div>
        </div>
      </section>

      <section className="highlights sectionBackground">
        <div>
          <h3>Unlocking healthcare data value</h3>
          <p>Structuring, labelling and surfacing clinical data so teams can use it with confidence.</p>
        </div>
        <div>
          <h3>Essential report elements</h3>
          <p>Identifying decision-relevant information that directly informs patient management.</p>
        </div>
        <div>
          <h3>Case load prioritisation</h3>
          <p>Helping clinical teams focus attention on cases where timely review matters most.</p>
        </div>
        <div>
          <h3>Rapid auditing</h3>
          <p>Supporting scalable quality assurance across large, complex clinical datasets.</p>
        </div>
      </section>

      <section className="platform" id="platform">
        <div>
          <p className="eyebrow">Platform</p>
          <h2>A platform to support clinical data preparation and cancer decision-making.</h2>
          <p>
            Transparency Labs is starting with skin cancer, helping teams prepare
            multidisciplinary team meetings by structuring clinical information,
            highlighting decision-critical evidence and supporting consistent, auditable review.
          </p>
        </div>

        <div className="demoPanel">
          <h3>Platform capabilities</h3>
          <ul>
            <li>Guideline-aligned data preparation for multidisciplinary team discussion</li>
            <li>Extraction of essential report elements that inform management</li>
            <li>Case prioritisation to support efficient meeting preparation</li>
            <li>Rapid audit and quality assurance across cancer datasets</li>
            <li>Transparent reasoning and uncertainty communication</li>
          </ul>
        </div>
      </section>

      <section className="section research sectionBackground" id="research">
        <p className="eyebrow">Technology and research foundation</p>
        <h2>Interpretable reasoning grounded in clinical AI research and real-world collaboration.</h2>

        <div className="cards researchCards">
          <a className="card linkCard" href="https://www.nature.com/articles/d41586-025-00618-x" target="_blank">
            <h3>Interactive, interpretable clinical AI</h3>
            <p>
              Building clinically aligned, human-in-the-loop AI that exposes reasoning,
              supports review and helps teams act on evidence with confidence.
            </p>
            <strong>Banerji et al., Nature, 2025</strong>
          </a>

          <a className="card linkCard" href="https://www.nature.com/articles/s41591-023-02562-7" target="_blank">
            <h3>Patient-level uncertainty quantification</h3>
            <p>
              Communicating uncertainty at the level of individual patients to support
              safer decisions, appropriate oversight and better calibrated trust.
            </p>
            <strong>Banerji et al., Nature Medicine, 2023</strong>
          </a>

          <a className="card linkCard" href="https://www.thelancet.com/journals/eclinm/article/PIIS2589-5370(25)00184-1/fulltext" target="_blank">
            <h3>Built with Clinicians and Patients</h3>
            <p>
              Co-designing clinical AI tools with the people who will use them and be
              affected by them, so systems fit real decisions and real care pathways.
            </p>
            <strong>Banerji et al., Lancet eClinMed, 2025</strong>
          </a>
        </div>
      </section>

      <section className="section about sectionBackground" id="about">
        <div className="aboutCompany">
          <p className="eyebrow">About</p>
          <h2>Built at the intersection of medicine and AI research.</h2>
          <p>
            Transparency Labs Ltd is a UK-based clinical AI company focused on
            interpretable, uncertainty-aware systems for oncology and other
            high-consequence decision environments.
          </p>
          <img className="presentationPhoto" src="/TLabs_pres.JPG" alt="Dr Chris Banerji presenting Transparency Labs" />
        </div>

        <div className="founder">
          <img className="founderPhoto" src="/chris_banerji.png" alt="Dr Chris Banerji" />
          <h3>Founder and CEO: Dr Chris Banerji</h3>
          <p>
            Dr Chris Banerji is a mathematician, clinician-scientist, NHS histopathologist and AI
            researcher working across digital pathology, interpretable machine learning
            and safe human-AI interaction.
          </p>

          <a href="https://www.kcl.ac.uk/people/christopher-banerji" target="_blank">
            King's College London profile
          </a>
          <a href="https://www.turing.ac.uk/people/researchers/chris-banerji" target="_blank">
            Alan Turing Institute profile
          </a>
          <a href="https://www.linkedin.com/in/dr-christopher-banerji-mbbs-phd-7667b2241?originalSubdomain=uk" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      <section className="contact sectionBackground">
        <h2>Interested in collaboration, pilots or early access?</h2>
        <p>For clinical partnerships, demonstrations or investment enquiries.</p>
        <a className="primary" href={EMAIL}>chris@transparencylabs.co.uk</a>
      </section>

      <footer className="sectionBackground">
        <span>Copyright 2026 Transparency Labs Ltd. All rights reserved.</span>
        <span>Interpretable clinical AI for transparent decision support.</span>
      </footer>
    </main>
  );
}
