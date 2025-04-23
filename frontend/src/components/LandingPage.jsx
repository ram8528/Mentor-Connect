import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {
  FaRobot,
  FaUsers,
  FaRegCommentDots,
  FaRocket,
  FaUserGraduate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="bg-blue-100 py-24 px-6 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-4">
            Welcome to Mentor Connect
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            The AI-powered MERN platform designed to bridge the gap between
            aspiring students and experienced mentors. Learn, grow, and connect
            — smarter and faster.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white">
              Learn More
            </button>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-20 bg-white px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-all">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
              <p>
                Separate dashboards and tools for students and mentors to
                maximize their experience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
              <FaRobot className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Mentor Matching</h3>
              <p>
                Smart matching using AI to connect students with the best mentor
                based on goals and interests.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
              <FaRegCommentDots className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Post & Share</h3>
              <p>
                Both students and mentors can post thoughts, share questions, or
                create discussions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
              <FaRocket className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Tracker</h3>
              <p>
                Set goals, monitor progress, and stay accountable with your
                personalized dashboard.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
              <FaUserGraduate className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student Profiles</h3>
              <p>
                Let mentors view your strengths, learning path, and areas you’re
                passionate about.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg">
              <FaChalkboardTeacher className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mentor Portfolios</h3>
              <p>
                Mentors can showcase their background, subjects, and mentoring
                style to attract the right mentees.
              </p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-20 bg-blue-50 px-4">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6 text-center">
            {[
              {
                title: "1. Sign Up",
                desc: "Choose your role and register securely.",
              },
              {
                title: "2. Build Profile",
                desc: "Add goals, interests, and skills.",
              },
              {
                title: "3. Match & Connect",
                desc: "Our AI suggests top mentor/mentee matches.",
              },
              {
                title: "4. Engage & Grow",
                desc: "Collaborate through posts, calls, and shared resources.",
              },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {idx + 1}
                </div>
                <h4 className="text-xl font-semibold mb-1">{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="py-16 bg-white px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Who Is This Platform For?
          </h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p>
                Whether you're in school or college, Mentor Connect gives you
                access to wisdom, direction, and career advice from those who’ve
                walked the path before you.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">Mentors</h3>
              <p>
                Passionate about guiding others? Share your expertise, give back
                to the community, and grow your own leadership skills.
              </p>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-blue-600 text-white text-center px-4">
          <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <blockquote className="bg-blue-500 p-6 rounded-lg">
              "Mentor Connect helped me find the right guidance at the right
              time. The AI matchmaker is brilliant!"
              <footer className="mt-2 text-sm text-blue-100">
                — Aditi S., Final Year Student
              </footer>
            </blockquote>
            <blockquote className="bg-blue-500 p-6 rounded-lg">
              "Mentoring here is simple, structured, and impactful. I feel like
              I’m truly making a difference."
              <footer className="mt-2 text-sm text-blue-100">
                — Rajeev M., Senior Developer & Mentor
              </footer>
            </blockquote>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-lg mb-6">
            Join our growing community of learners and leaders. Sign up and get
            matched today.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Join Mentor Connect
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
