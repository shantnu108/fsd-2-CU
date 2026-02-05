export default function About() {
  return (
    <div style={{ 
      padding: "30px", 
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      margin: "20px 0"
    }}>
      <h3 style={{ color: "#34d399", marginBottom: "15px" }}>📖 Project Overview</h3>
      <p style={{ lineHeight: "1.6" }}>Learn about our dynamic loading implementation and how it improves application performance through code splitting.</p>
    </div>
  );
}
