import React, { useState } from "react";
import "./BeforeAfter.css";

const BeforeAfter = () => {
  const [activeTab, setActiveTab] = useState("before");

  return (
    <div className={`before-after-section ${activeTab === "before" ? "dark-mode" : "light-mode"}`}>
      <div className="tab-switcher">
        <button
          className={`switch-btn ${activeTab === "before" ? "active" : ""}`}
          onClick={() => setActiveTab("before")}
        >
          Before Lifesecure
        </button>
        <button
          className={`switch-btn ${activeTab === "after" ? "active" : ""}`}
          onClick={() => setActiveTab("after")}
        >
          With Lifesecure
        </button>
      </div>

      {/* BEFORE SECTION */}
      {activeTab === "before" && (
        <div className="cards-grid fade-in">
          <div className="card teal">
            <h3>7 out of 10<br/>French people</h3>
            <p>believe that mental health is still a taboo subject<br/>(Odoxa, 2023)</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/ZiDYTPPdc1huKmIt_video7.png?twic=v1/cover=560x367"
              alt="mother with baby"
            />
            <div className="img-caption">
              <p>"There's nothing more stressful than having your baby sick on the weekend."</p>
              <p className="caption-author">Laurie, a young mother working in tech</p>
            </div>
          </div>

          <div className="card teal">
            <p className="quote-text">
              "We were working on an Excel file, which we had to send to our health insurance company every month. It took time and very often, we sent this list a month late."
            </p>
            <div className="author">
              <div className="author-image"></div>
              <div className="author-info">
                <strong>Apolline de la Taille</strong><br/>
                HR Manager @ Machaffert Group<br/>
                (250 employees) - Hospitality
              </div>
            </div>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/ZiDXkvPdc1huKmIf_video4.png?twic=v1/cover=560x368"
              alt="office worker"
            />
            <div className="img-caption">
              <p>"My team was drowning in administrative work: invoices and quotes to receive and send back... Meanwhile, the Works Council kept reporting problems with expense reimbursements."</p>
              <p className="caption-author">Cécilia Barontini, HR and CSR Director of Olympique de Marseille</p>
            </div>
          </div>

          <div className="card teal">
            <h3>95 days</h3>
            <p>This is the average wait time for a dermatologist appointment, almost twice as long as it was 10 years ago.<br/>(Ifop, 2023)</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/ZiDW-vPdc1huKmH8_video03.png?twic=v1/cover=440x367"
              alt="industrial worker"
            />
            <div className="img-caption">
              <p>"At first, health insurance was too complicated for me, so I didn't deal with it."</p>
              <p className="caption-author">Nananissa, an employee in the industry</p>
            </div>
          </div>
        </div>
      )}

      {/* AFTER SECTION */}
      {activeTab === "after" && (
        <div className="cards-grid fade-in">
          <div className="card cream">
            <h3>70%</h3>
            <p>Members who had worked on their mental health with Lifesecure had never done so before</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh_91vPdc1huKlPr_video06.png?twic=v1/cover=400x262"
              alt="smiling team"
            />
            <div className="img-caption light-caption">
              <p>"With Lifesecure, it's a bit like having a doctor in the family."</p>
              <p className="caption-author">Laurie, a young mother working in tech</p>
            </div>
          </div>

          <div className="card cream">
            <p className="quote-text">
              "When there is a transfer of an employee to another site or an employee leaves, all the data is transferred with a single click!"
            </p>
            <div className="author dark-author">
              <div className="author-image"></div>
              <div className="author-info">
                <strong>Apolline de la Taille</strong><br/>
                HR Manager @ Machaffert Group<br/>
                (250 employees) - Hospitality
              </div>
            </div>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh_3tPPdc1huKlM-_video05.png?twic=v1/cover=400x263"
              alt="office worker"
            />
            <div className="img-caption light-caption">
              <p>"The fact that the dialogue takes place directly between Lifesecure and the employee means that HR is no longer caught in the middle. This frees up invaluable time for us."</p>
              <p className="caption-author">Cécilia Barontini, HR and CSR Director of Olympique de Marseille</p>
            </div>
          </div>

          <div className="card cream">
            <h3>24 hours</h3>
            <p>This is the average wait time to get a response from a dermatologist at Clinique Lifesecure via chat.</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh__BPPdc1huKlQA_video04.png?twic=v1/cover=320x267"
              alt="employee smiling"
            />
            <div className="img-caption light-caption">
              <p>"It's like night and day compared to my old health insurance company."</p>
              <p className="caption-author">Nananissa, an employee in the industry</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfter;