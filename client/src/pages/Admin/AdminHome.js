import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <h3>Dear Blood Donation App Users,</h3>
          <p>🩸 Blood donation is not just an act; it's a lifeline. Every drop of blood you donate has the power to save lives, offering hope and healing to those in need. 💉 
          </p>
          <p>Did you know that blood cannot be manufactured artificially? It can only come from generous donors like you. By donating blood, you're providing an essential resource that is crucial in medical emergencies, surgeries, and treatments for patients battling diseases. 🏥</p>
          <p>As Mahatma Gandhi once said, "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer." 🙏 Your decision to donate blood reflects this sentiment, embodying compassion and selflessness. 
          </p>
          <p>Join us in our mission to save lives and make a lasting impact on our community. Your donation today can bring a brighter tomorrow for someone in need. 💪
          </p>
          <p>Thank you for being a hero, for your kindness, and for your willingness to give the gift of life. Together, we are making a difference! 🌈
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
