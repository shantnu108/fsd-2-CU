export default function Home() {
  return (
    <div style={{ 
      padding: "30px", 
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      backdropFilter: "blur(10px)",
      margin: "20px 0"
    }}>
      <h3 style={{ color: "#fbbf24", marginBottom: "15px" }}>🏠 Welcome Dashboard</h3>
      <p style={{ lineHeight: "1.6" }}>This page loads on-demand to optimize performance. Navigate through different sections to experience dynamic loading.</p>
    </div>
  );
}
