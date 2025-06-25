import React from 'react';
import { Chrono } from 'react-chrono';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaUniversity, 
  FaFlask, 
  FaSchool,
  FaAward 
} from 'react-icons/fa';

const timelineItems = [
  {
    // icon: <FaBriefcase size={24} color="#fff" />, // Intern
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>TechGropse</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>Intern - Web Designer</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>May 2024 - Jan 2025</h4>
          </div>
          <img
            src="/logos/TechGropse Logo.png"
            alt="TechGropse Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
          Developed backend from ground up to convert scanned PDFs of offline exam papers to online attemptable format
          using Python, OpenAI API, AWS S3, Google Cloud Vision, MongoDB and deployed on a remote Linux server.
        </p>
      </div>
    ),
    timelineDot: (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: '#0072ff',
        color: 'white'
      }}>
        <FaBriefcase size={16} /></div>)
  },
  {
    // icon: <FaUniversity size={24} color="#fff" />,
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>IIT Patna</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>B.Tech in EEE</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>Oct 2021 - May 2025</h4>
          </div>
          <img
            src="/logos/IITP Logo.png"
            alt="IITP Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
          Relevant Courses : Programming (Data Structures and Algorithms), Data Science, Pattern Recognition, Probability and Random Processes. 
            <br />
          First authored research paper published in RITEEC 2025 international conference.
        </p>
      </div>
    ),
    timelineDot: <FaGraduationCap size={20} color="#0072ff" />
  },
  {
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>JEE Advanced</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>AIR 1957 (OBC)</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>2021</h4>
          </div>
          <img
            src="/logos/IITKGP Logo.png"
            alt="IITKGP Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
          Conducted by IIT Kharagpur with over 160,000 applicants.
        </p>
      </div>
    )
  },
  {
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>JEE Main</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>97.33 Percentile</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>2021</h4>
          </div>
          <img
            src="/logos/NTA Logo.png"
            alt="NTA Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
          Conducted by National Testing Agency (NTA) with over 939,000 applicants.
        </p>
      </div>
    )
  },
  {
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>12th CBSE Board</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>93.4%</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>Apr 2020</h4>
          </div>
          <img
            src="/logos/CBSE Logo.png"
            alt="CBSE Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
            Mathematics - 94, Physics - 95, Chemistry - 95, Computer Science - 95.
        </p>
      </div>
    )
  },
  {
    cardTitle: (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 600 }}>10th CBSE Board</h2>
            <h3 style={{ margin: 0, fontWeight: 600 }}>93.4%</h3>
            <h4 style={{ margin: 0, fontWeight: 400, fontSize: "0.95rem" }}>Apr 2018</h4>
          </div>
          <img
            src="/logos/CBSE Logo.png"
            alt="CBSE Logo"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
              marginLeft: "1rem",
              marginTop: "0.4rem"
            }}
          />
        </div>
        <p style={{
          marginTop: '0.5rem',
          fontSize: "0.9rem",
          color: "black",
          textAlign: "justify"
        }}>
            Mathematics - 93, Science - 89, Foundation of IT - 95.
        </p>
      </div>
    )
  }
];

export default function LeftPage() {
  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: 'auto' }}>
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
  Timeline
</h1>
<div className="text-center mb-8">Professional and academic journey milestones</div>

      <Chrono
        items={timelineItems}
        mode="VERTICAL" // Keeps both title and card on same side
        disableToolbar={true} // Removes top toolbar
        disableClickOnCircle={true}
        theme={{
          primary: 'rgba(87, 146, 214, 0.7)',
          secondary: 'rgba(234, 237, 240, 0.7)',
          cardBgColor: 'rgba(248, 250, 252, 0.7)',
          titleColor: '#1e293b',
          titleColorActive: '#0f172a'
        }}
        cardHeight={null}
        allowDynamicUpdate
      />
    </div>
  );
}
