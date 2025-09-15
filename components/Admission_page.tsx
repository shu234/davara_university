"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  enquiryNo: string;
  enquiryDate: string;
  course: string;
  branch: string;
  medium: string;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dob: string;
  age: string;
  category: string;
  bloodGroup: string;
  studentCategory: string;
  studentEmail: string;
  abcId: string;
  localAddress: string;
  sameAsPermanent: boolean;
  fatherName: string;
  fatherMiddleName: string;
  fatherLastName: string;
  fatherMobile: string;
  fatherOccupation: string;
  motherFirstName: string;
  motherMiddleName: string;
  motherLastName: string;
  motherOccupation: string;
  lastSchool: string;
  aadharNo: string;
  gamesParticipation: string;
  board: string;
  discount: string;
  discountDescription: string;
  result: string;
  studentMobile: string;
  fatherPermanentAddress: string;
  pinCode: string;
  state: string;
  city: string;
  country: string;
  studentPhoto: File | null;
  aadharPhoto: File | null;
  mark10: File | null;
  mark12: File | null;
  graduationMark: File | null;
  otherDocs: File | null;
}

export default function AdmissionForm() {
  const [formData, setFormData] = useState<FormData>({
    enquiryNo: "ENQ000120",
    enquiryDate: "2025-09-13",
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

  // Use proper types for events
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files?.[0] ?? null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // API call can be added here
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
          <li>The form has 5 stages: Academic, Personal, Parent&apos;s, Other & Contact Details + Documents & Payment.</li>
          <li>Upload latest passport-sized colored photos.</li>
          <li>Assessment dates will be notified via E-mail/SMS.</li>
          <li>Payment requires Debit/Credit Card or Net Banking.</li>
          <li>Admission is merit-based. No donations accepted.</li>
          <li>Incorrect info may lead to cancellation even after admission.</li>
        </ul>
      </div>

      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Academic Details</h2>
        {/* Academic Details Fields */}
        {/* ...Your existing input fields with handleChange */}
        
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
