"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    enquiryNo: "ENQ000120",
    enquiryDate: "13-09-2025",
    course: "",
    branch: "",
    medium: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    age: "",
    category: "",
    bloodGroup: "",
    studentCategory: "",
    studentEmail: "",
    abcId: "",
    localAddress: "",
    sameAsPermanent: false,
    fatherName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherMobile: "",
    fatherOccupation: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherOccupation: "",
    lastSchool: "",
    aadharNo: "",
    gamesParticipation: "",
    board: "",
    discount: "",
    discountDescription: "",
    result: "",
    studentMobile: "",
    fatherPermanentAddress: "",
    pinCode: "",
    state: "",
    city: "",
    country: "",
    studentPhoto: null,
    aadharPhoto: null,
    mark10: null,
    mark12: null,
    graduationMark: null,
    otherDocs: null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your API call here to save form data
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-10 px-4 md:px-20 font-sans">
      <h1 className="text-3xl font-bold text-[#1B2951] text-center mb-6">
        Shri Davara University Registration Form
      </h1>
      <p className="text-center mb-10 text-gray-700">
        Session 2025-2026 | Davara Educational Campus, NH 30, Atal Nagar-Nava Raipur, Raipur, Chhattisgarh 493661
      </p>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Instructions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Use Chrome or Mozilla Firefox for filling this form.</li>
          <li>The form has 5 stages: Academic, Personal, Parent's, Other & Contact Details + Documents & Payment.</li>
          <li>Upload latest passport-sized colored photos.</li>
          <li>Assessment dates will be notified via E-mail/SMS.</li>
          <li>Payment requires Debit/Credit Card or Net Banking.</li>
          <li>Admission is merit-based. No donations accepted.</li>
          <li>Incorrect info may lead to cancellation even after admission.</li>
        </ul>
      </div>

      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Academic Details</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block font-medium text-gray-700">Enquiry No</label>
            <input type="text" name="enquiryNo" value={formData.enquiryNo} readOnly className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Enquiry Date</label>
            <input type="date" name="enquiryDate" value={formData.enquiryDate} onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Course</label>
            <select name="course" value={formData.course} onChange={handleChange} className="input-field">
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="BSc">BSc</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Branch</label>
            <select name="branch" value={formData.branch} onChange={handleChange} className="input-field">
              <option value="">Select Branch</option>
              <option value="CS">Computer Science</option>
              <option value="IT">Information Technology</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Medium</label>
            <select name="medium" value={formData.medium} onChange={handleChange} className="input-field">
              <option value="">Select Medium</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Personal Details</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block font-medium text-gray-700">First Name *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Middle Name</label>
            <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Last Name *</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Gender *</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="input-field" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block font-medium text-gray-700">Date of Birth *</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Age</label>
            <input type="number" name="age" value={formData.age} onChange={handleChange} className="input-field" />
          </div>
        </div>

        {/* You can continue in the same style for Parent Details, Other Details, Contact Details, and Document Uploads */}

        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Documents Upload</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block font-medium text-gray-700">Student Photo *</label>
            <input type="file" name="studentPhoto" accept="image/*" onChange={handleChange} className="input-field" required />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Aadhar Card Photo</label>
            <input type="file" name="aadharPhoto" accept="image/*" onChange={handleChange} className="input-field" />
          </div>
        </div>

        <button type="submit" className="bg-[#1B2951] text-white px-6 py-3 rounded hover:bg-[#16223e] transition">
          Submit Registration Form
        </button>
      </form>
    </div>
  );
}
