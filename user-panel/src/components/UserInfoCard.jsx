import React from "react";

const UserInfoCard = ({ user, navigate }) => (
    <div className="page-card">
    <header className="detail-header">
      <button className="back-btn" onClick={() => navigate(`/users`)}>← Listeye Dön</button>
      <button className="posts-btn" onClick={() => navigate(`/users/posts?userId=${user.id}`)}>Yazıları Gör →</button>
    </header>

      <div className="detail-content-layout">
        {/* Sol Taraf: Profil Özeti */}
        <aside className="profile-summary">
          <h2>{user.name}</h2>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <span className="badge">{user.company.name}</span>
        </aside>

        {/* Sağ Taraf: Detaylar */}
        <section className="detailed-info">
          <div className="info-group">
            <h3>✨ İletişim Bilgileri</h3>
            <div className="info-row"><strong>E-posta:</strong> <span>{user.email}</span></div>
            <div className="info-row"><strong>Telefon:</strong> <span>{user.phone}</span></div>
            <div className="info-row"><strong>Web Sitesi:</strong> <span>{user.website}</span></div>
          </div>

          <div className="info-group">
            <h3>📍 Adres Bilgileri</h3>
            <div className="info-row"><strong>Şehir:</strong> <span>{user.address.city}</span></div>
            <div className="info-row"><strong>Sokak:</strong> <span>{user.address.street}</span></div>
            <div className="info-row"><strong>Zip:</strong> <span>{user.address.zipcode}</span></div>
          </div>
        </section>
      </div>
    </div>
)

export default UserInfoCard;