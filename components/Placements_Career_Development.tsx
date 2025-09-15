'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// CountUp Component for animated stats
function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const interval = setInterval(() => {
      start += 1;
      if (start >= end) {
        clearInterval(interval);
        start = end;
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(interval);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function PlacementsSection() {
  const placementStats = [
    { label: "Average Salary", value: 12, suffix: " LPA" },
    { label: "Placement Rate", value: 95, suffix: "%" },
    { label: "Companies Participated", value: 200, suffix: "+" },
    { label: "Internship Opportunities", value: 100, suffix: "%" },
  ];

  const topRecruiters = [
    "/images/recruiters/google.png",
    "/images/recruiters/microsoft.png",
    "/images/recruiters/amazon.png",
    "/images/recruiters/facebook.png",
    "/images/recruiters/infosys.png",
  ];

  const successStories = [
    {
      name: "Rohan Sharma",
      company: "Google",
      image: "/images/students/rohan.jpg",
      testimonial: "Shri Davara University shaped my career and prepared me for Google interviews.",
    },
    {
      name: "Priya Verma",
      company: "Microsoft",
      image: "/images/students/priya.jpg",
      testimonial: "The training and placement guidance here is top-notch.",
    },
    {
      name: "Amit Singh",
      company: "Amazon",
      image: "/images/students/amit.jpg",
      testimonial: "Thanks to the university, I secured my dream job in Amazon.",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2951] mb-4">
            Placements & Career Development
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students achieve outstanding success, thanks to dedicated placement guidance and industry partnerships.
          </p>
        </div>

        {/* Placement Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {placementStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-[#C9A96E]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#1B2951]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-[#1B2951] mb-6 text-center">Top Recruiters</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 ">
            {topRecruiters.map((logo, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center w-32 h-20"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact University Name - Get in touch with our admissions, student services, and academic departments">
    <meta name="keywords" content="university contact, admissions, student services, campus information">
    <title>Contact Us - University Name</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Add Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <!-- Navigation (Optional - Add your existing nav here) -->
    
    <main class="container">
        <header class="page-header">
            <h1>Contact Us</h1>
            <p>We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
        </header>

        <section class="contact-grid">
            <!-- Contact Information Section -->
            <div class="contact-info">
                <h2 class="section-title">
                    <i class="fas fa-info-circle"></i>
                    Get in Touch
                </h2>
                
                <div class="info-item">
                    <h3><i class="fas fa-map-marker-alt"></i> Main Campus</h3>
                    <p>123 University Avenue</p>
                    <p>College City, State 12345</p>
                    <p>United States</p>
                </div>

                <div class="info-item">
                    <h3><i class="fas fa-phone"></i> Phone Numbers</h3>
                    <p>Main Office: <a href="tel:+1234567890">(123) 456-7890</a></p>
                    <p>Admissions: <a href="tel:+1234567891">(123) 456-7891</a></p>
                    <p>Student Services: <a href="tel:+1234567892">(123) 456-7892</a></p>
                </div>

                <div class="info-item">
                    <h3><i class="fas fa-envelope"></i> Email Addresses</h3>
                    <p>General: <a href="mailto:info@university.edu">info@university.edu</a></p>
                    <p>Admissions: <a href="mailto:admissions@university.edu">admissions@university.edu</a></p>
                    <p>Support: <a href="mailto:support@university.edu">support@university.edu</a></p>
                </div>

                <div class="info-item">
                    <h3><i class="fas fa-clock"></i> Office Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                </div>

                <!-- Social Media Links -->
                <div class="social-links">
                    <h3><i class="fas fa-share-alt"></i> Follow Us</h3>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>

            <!-- Contact Form Section -->
            <div class="contact-form">
                <h2 class="section-title">
                    <i class="fas fa-paper-plane"></i>
                    Send us a Message
                </h2>
                
                <div class="alert success-message" id="successMessage" role="alert">
                    <i class="fas fa-check-circle"></i>
                    Thank you for your message! We'll get back to you within 24 hours.
                </div>

                <div class="alert error-message" id="errorMessage" role="alert">
                    <i class="fas fa-exclamation-circle"></i>
                    Please fill in all required fields correctly.
                </div>

                <form id="contactForm" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="firstName">First Name *</label>
                            <input type="text" id="firstName" name="firstName" required>
                            <div class="error-text">Please enter your first name</div>
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" required>
                            <div class="error-text">Please enter your last name</div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                        <div class="error-text">Please enter a valid email address</div>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9\-\(\)\+\s]+">
                        <div class="error-text">Please enter a valid phone number</div>
                    </div>

                    <div class="form-group">
                        <label for="inquiryType">Inquiry Type *</label>
                        <select id="inquiryType" name="inquiryType" required>
                            <option value="">Select an option</option>
                            <option value="admissions">Admissions</option>
                            <option value="academics">Academics</option>
                            <option value="student-services">Student Services</option>
                            <option value="financial-aid">Financial Aid</option>
                            <option value="campus-life">Campus Life</option>
                            <option value="alumni">Alumni Services</option>
                            <option value="research">Research Opportunities</option>
                            <option value="partnerships">Partnerships</option>
                            <option value="other">Other</option>
                        </select>
                        <div class="error-text">Please select an inquiry type</div>
                    </div>

                    <div class="form-group">
                        <label for="subject">Subject *</label>
                        <input type="text" id="subject" name="subject" required>
                        <div class="error-text">Please enter a subject</div>
                    </div>

                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" placeholder="Please provide details about your inquiry..." required minlength="10"></textarea>
                        <div class="error-text">Please enter a message (minimum 10 characters)</div>
                    </div>

                    <div class="form-group checkbox-group">
                        <label class="checkbox-label">
                            <input type="checkbox" id="newsletter" name="newsletter">
                            <span class="checkmark"></span>
                            Subscribe to our newsletter for updates and news
                        </label>
                    </div>

                    <button type="submit" class="submit-btn">
                        <i class="fas fa-paper-plane"></i>
                        Send Message
                    </button>
                </form>
            </div>
        </section>

        <!-- Department Contacts Section -->
        <section class="departments">
            <h2 class="section-title">
                <i class="fas fa-building"></i>
                Department Contacts
            </h2>
            <div class="dept-grid">
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-graduation-cap"></i></div>
                    <h4>Admissions Office</h4>
                    <p><i class="fas fa-envelope"></i> admissions@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7891</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 101, Administration Building</p>
                </div>
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-user-friends"></i></div>
                    <h4>Student Services</h4>
                    <p><i class="fas fa-envelope"></i> studentservices@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7892</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 205, Student Center</p>
                </div>
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-dollar-sign"></i></div>
                    <h4>Financial Aid</h4>
                    <p><i class="fas fa-envelope"></i> finaid@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7893</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 150, Administration Building</p>
                </div>
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-book"></i></div>
                    <h4>Academic Affairs</h4>
                    <p><i class="fas fa-envelope"></i> academics@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7894</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 300, Academic Building</p>
                </div>
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-laptop"></i></div>
                    <h4>IT Support</h4>
                    <p><i class="fas fa-envelope"></i> itsupport@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7895</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 25, Library Building</p>
                </div>
                <div class="dept-card">
                    <div class="dept-icon"><i class="fas fa-users"></i></div>
                    <h4>Alumni Relations</h4>
                    <p><i class="fas fa-envelope"></i> alumni@university.edu</p>
                    <p><i class="fas fa-phone"></i> (123) 456-7896</p>
                    <p><i class="fas fa-map-marker-alt"></i> Room 400, Alumni Center</p>
                </div>
            </div>
        </section>

        <!-- Emergency Contacts Section -->
        <section class="emergency-contacts">
            <h2 class="section-title">
                <i class="fas fa-exclamation-triangle"></i>
                Emergency Contacts
            </h2>
            <div class="emergency-grid">
                <div class="emergency-item urgent">
                    <h4><i class="fas fa-phone-alt"></i> Campus Security</h4>
                    <p class="emergency-number">(123) 456-911</p>
                    <p>24/7 Emergency Response</p>
                </div>
                <div class="emergency-item">
                    <h4><i class="fas fa-heartbeat"></i> Health Center</h4>
                    <p class="emergency-number">(123) 456-7799</p>
                    <p>Medical Emergencies & Health Services</p>
                </div>
                <div class="emergency-item">
                    <h4><i class="fas fa-comments"></i> Crisis Hotline</h4>
                    <p class="emergency-number">(123) 456-HELP</p>
                    <p>Mental Health Support - 24/7</p>
                </div>
            </div>
        </section>

        <!-- Campus Map Section -->
        <section class="map-section">
            <h2 class="section-title">
                <i class="fas fa-map"></i>
                Find Us
            </h2>
            <p>Our campus is conveniently located in the heart of College City, easily accessible by public transportation and major highways.</p>
            
            <!-- Replace this with actual Google Maps embed -->
            <div class="map-container">
                <div class="map-placeholder">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Interactive Campus Map</h3>
                    <p>Replace this section with Google Maps embed or your preferred mapping solution</p>
                    <button class="map-btn">Get Directions</button>
                </div>
            </div>

            <!-- Directions and Transportation -->
            <div class="directions-info">
                <div class="direction-item">
                    <h4><i class="fas fa-car"></i> By Car</h4>
                    <p>Take Highway 101 to Exit 15. Follow University Avenue for 2 miles. Parking available in Lots A-F.</p>
                </div>
                <div class="direction-item">
                    <h4><i class="fas fa-bus"></i> Public Transit</h4>
                    <p>City Bus Routes 12, 15, and 23 stop directly at campus. Metro Line Blue stops at University Station.</p>
                </div>
                <div class="direction-item">
                    <h4><i class="fas fa-plane"></i> From Airport</h4>
                    <p>20 minutes by car, or take Airport Express to Downtown then Bus Route 15 to campus.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer (Optional - Add your existing footer here) -->
    
    <script src="script.js"></script>
    
    <!-- Optional: Add Google Maps API -->
    <!-- <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script> -->
</body>
</html>
                <Image src={logo} alt="Recruiter Logo" width={120} height={60} className="object-contain" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-[#1B2951] mb-6 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {successStories.map((student, idx) => (
              <motion.div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-[#C9A96E]">
                  <Image src={student.image} alt={student.name} width={96} height={96} className="object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-[#1B2951]">{student.name}</h4>
                <p className="text-[#C9A96E] mb-2">{student.company}</p>
                <p className="text-gray-600 text-sm">{student.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.a
            href="/placements"
            className="inline-block bg-[#1B2951] hover:bg-[#0F1A35] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 border-2 border-[#C9A96E]"
            whileHover={{ scale: 1.05 }}
            aria-label="See all placement details at Shri Davara University"
          >
            See All Placements →
          </motion.a>
        </div>

      </div>
    </section>
  );
}
