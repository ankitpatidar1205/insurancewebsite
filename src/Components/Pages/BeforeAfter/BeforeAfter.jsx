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
          Before Alan
        </button>
        <button
          className={`switch-btn ${activeTab === "after" ? "active" : ""}`}
          onClick={() => setActiveTab("after")}
        >
          After Alan
        </button>
      </div>

      {/* BEFORE SECTION */}
      {activeTab === "before" && (
        <div className="cards-grid fade-in">
          <div className="card teal">
            <h3>7 out of 10 French people</h3>
            <p>believe mental health is still a taboo topic. (Odoxa, 2023)</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh_91vPdc1huKlPr_video06.png?twic=v1/cover=400x262"
              alt="mother with baby"
            />
            <div className="img-caption">
              “There’s nothing more stressful than having your baby sick on the weekend.”  
              <br />– Laurie, young mother working in tech
            </div>
          </div>

          <div className="card teal">
            <p>
              “We used to manage an Excel file that we had to send every month to our insurer.
              It was time-consuming, and often we sent it with a one-month delay.”
            </p>
            <div className="author">
              <strong>Apolline de la Taille</strong>  
              <br />HR Manager, Groupe Machafer – 250 employees – Hospitality
            </div>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh_3tPPdc1huKlM-_video05.png?twic=v1/cover=400x263"
              alt="office worker"
            />
            <div className="img-caption">
              “My team was overwhelmed with admin work — invoices, receipts, and duplicate reimbursements.”  
              <br />– Cécilia Bonami, HR & CSR Director, Olympique de Marseille
            </div>
          </div>

          <div className="card teal">
            <h3>95 days</h3>
            <p>
              is the average waiting time to see a dermatologist — nearly twice as long as 10 years ago.
              (Ifop, 2023)
            </p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh__BPPdc1huKlQA_video04.png?twic=v1/cover=320x267"
              alt="industrial worker"
            />
            <div className="img-caption">
              “At first, insurance was too complicated for me — so I didn’t bother.”  
              <br />– Nananissa, Industrial employee
            </div>
          </div>
        </div>
      )}

      {/* AFTER SECTION */}
      {activeTab === "after" && (
        <div className="cards-grid fade-in">
          <div className="card white">
            <h3>70%</h3>
            <p>of employees feel better supported thanks to Alan.</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh_3tPPdc1huKlM-_video05.png?twic=v1/cover=400x263"
              alt="smiling team"
            />
            <div className="img-caption light-caption">
              “With Alan, everything is simpler, faster, and more human.”  
              <br />– Camille, HR at a startup
            </div>
          </div>

          <div className="card white">
            <h3>24h</h3>
            <p>is the average time to receive a reimbursement confirmation.</p>
          </div>

          <div className="card img-card">
            <img
              src="https://6vvt7k9n.twic.pics/prismic/Zh__BPPdc1huKlQA_video04.png?twic=v1/cover=320x267"
              alt="employee smiling"
            />
            <div className="img-caption light-caption">
              “No more waiting — it’s instant now. Such a relief!”  
              <br />– Hugo, Administrative employee
            </div>
          </div>

          <div className="card white">
            <h3>5000+</h3>
            <p>companies have already chosen Alan.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfter;
