import ProjectCard from '../styles/ProjectCard';

const webDevProjects = [
  {
    title: "Embedded non-Textual PDF Elements Extractor",
    description: "A full-stack Flask + React app that extracts and previews non-textual content (images/diagrams) from large PDF files with selective download.",
    image: "../../../images/ScraPDF.jpg",
    technologies: ["Flask", "React", "Docker", "Vercel", "CORS"],
    github: "https://github.com/CodingWeeb-Gaurav/ScraPDF",
    demo: "https://frontend-gray-xi-17.vercel.app/",
  },
  {
    title: "Responsive Frontend Movie Website",
    description: "A responsive movie listing site with over 15 unique movies, live search, and clean design using vanilla HTML/CSS/JS.",
    image: "../../../images/MovieSite.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/CodingWeeb-Gaurav/GKGmovies.github.io",
    demo: "https://codingweeb-gaurav.github.io/GKGmovies.github.io/",
  }
];

const mlProjects = [
  {
    title: "Emotion Detection from Text (SVM)",
    description: "Detects 5 emotions (anger, happy, sad, love, neutral) from tweets using SVM + TF-IDF, achieving 70% precision. Includes CLI testing tool.",
    image: "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "Scikit-Learn", "TF-IDF", "SVM"],
    github: "https://colab.research.google.com/drive/1o2N3PUWcRqVwpArjegniWKzK2S3WQcsX?usp=sharing",
    demo: "https://colab.research.google.com/drive/1o2N3PUWcRqVwpArjegniWKzK2S3WQcsX?usp=sharing"
  },
  {
    title: "Bitcoin Price Prediction (LSTM)",
    description: "Predicts next 15 days of Bitcoin prices using LSTM on 3 years of historical data. Achieved 0.9873 testing R² score.",
    image: "../../../images/Bitcoin.jpg",
    technologies: ["TensorFlow", "LSTM", "Pandas", "Scikit-Learn"],
    github: "https://github.com/CodingWeeb-Gaurav/Bitcoin-Prediction/tree/main",
    demo: "https://github.com/CodingWeeb-Gaurav/Bitcoin-Prediction/tree/main"
  },
  {
    title: "Seizure Detection using BiLSTM + CNN",
    description: "Trained BiLSTM and CNN models for seizure detection using EEG data, achieving 96–99% validation accuracy.",
    image: "../../../images/SeizureDetection.jpg",
    technologies: ["TensorFlow", "CNN", "BiLSTM", "EEG"],
    github: "https://colab.research.google.com/drive/1fnl6elnTvqoyaHlErpcfFd7gmMROO-G1?usp=sharing",
    demo: "https://colab.research.google.com/drive/1fnl6elnTvqoyaHlErpcfFd7gmMROO-G1?usp=sharing"
  }
];

const coreProjects = [
  {
    title: "Research Publication : BP Regulation using Metaheuristic Algorithm",
    description: "Research paper accepted at RITEEC 2025 (NIT Patna) implementing a FOPI controller using metaheuristics. Reduced steady-state errors by 95%.",
    image: "../../../images/Research.jpg",
    technologies: ["MATLAB", "SIMULINK", "Metaheuristics"],
    github: "https://drive.google.com/file/d/1K7k_Ke1PM_bzOrHLFGuGjn6YnQpMHUOf/view?usp=sharing",
    demo: "https://drive.google.com/file/d/1K7k_Ke1PM_bzOrHLFGuGjn6YnQpMHUOf/view?usp=sharing"
  },
  {
    title: "RFID-Based Attendance System",
    description: "Arduino-based system using RFID cards to auto-mark attendance on scan. Uses MFRC522 module and UNO R3.",
    image: "../../../images/RFID.jpg",
    technologies: ["Arduino", "RFID", "MFRC522", "Electronics"],
    github: "https://github.com/ravinduu/RFID-Based-Attendance-System-using-Arduino/blob/master/RFID_Based_Attendance_System.ino",
    demo: "https://github.com/ravinduu/RFID-Based-Attendance-System-using-Arduino/blob/master/RFID_Based_Attendance_System.ino"
  }
];

export default function RightPage() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1
  style={{
    color: 'white',
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: '3rem',
    marginBottom: '0rem',
    letterSpacing: '2px',
    fontFamily: "'Poppins', sans-serif",
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.6)',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
>
  Featured Projects
</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Highlighting my best work across domains: elegant frontends, powerful ML models, and impactful electronics research.
          </p>
        </div>

        {/* Section: Web Development */}
        <div className="mb-20">
          <div className="relative mb-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 drop-shadow-lg">
              Web Development
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Responsive frontends, backend integrations, and full-stack deployments
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-3 rounded-full"></div>
            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDevProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
          
        </div>


        {/* Section: Machine Learning */}
        <div className="mb-20">
          <div className="relative mb-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 drop-shadow-lg">
              Machine Learning
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              From predictive models to real-time applications, showcasing my Deep Learning ML expertise
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

        {/* Section: Core Electronics */}
        <div className="mb-20">
          <div className="relative mb-10 text-center">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 drop-shadow-lg">
              Core Electronics
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Published research, Arduino projects, and innovative hardware solutions
            </p>
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 mt-3 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreProjects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
