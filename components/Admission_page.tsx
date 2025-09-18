"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface AdmissionFormData {
  // Academic
  enquiryNo: string;
  enquiryDate: string;
  course: string;
  branch: string;
  medium: string;

  // Personal
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

  // Address
  localAddress: string;
  sameAsPermanent: boolean;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  fatherPermanentAddress: string;

  // Parents
  fatherFirstName: string;
  fatherMiddleName: string;
  fatherLastName: string;
  fatherMobile: string;
  fatherOccupation: string;

  motherFirstName: string;
  motherMiddleName: string;
  motherLastName: string;
  motherOccupation: string;

  // Education & Other
  lastSchool: string;
  board: string;
  result: string;
  gamesParticipation: string;
  discount: string;
  discountDescription: string;
  studentMobile: string;

  // Documents
  studentPhoto: File | null;
  aadharPhoto: File | null;
  mark10: File | null;
  mark12: File | null;
  graduationMark: File | null;
  otherDocs: File | null;
}

export default function AdmissionForm() {
  const [formData, setFormData] = useState<AdmissionFormData>({
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
    city: "",
    state: "",
    country: "",
    pinCode: "",
    fatherPermanentAddress: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherMobile: "",
    fatherOccupation: "",
    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherOccupation: "",
    lastSchool: "",
    board: "",
    result: "",
    gamesParticipation: "",
    discount: "",
    discountDescription: "",
    studentMobile: "",
    studentPhoto: null,
    aadharPhoto: null,
    mark10: null,
    mark12: null,
    graduationMark: null,
    otherDocs: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] ?? null;
      setFormData(prev => ({ ...prev, [name]: file }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new AdmissionFormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        data.append(key, value);
      } else {
        data.append(key, value as string);
      }
    });

    // Replace with actual API endpoint
    fetch("/api/admission", { method: "POST", body: data })
      .then(() => alert("Form submitted successfully!"))
      .catch(() => alert("Submission failed."));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-10 px-4 md:px-20 font-sans">
      <h1 className="text-3xl font-bold text-[#1B2951] text-center mb-6">
        Shri Davara University Registration Form
      </h1>
      <p className="text-center mb-10 text-gray-700">
        Session 2025-2026 | Davara Educational Campus, NH 30, Atal Nagar-Nava Raipur, Raipur, Chhattisgarh 493661
      </p>

      {/* Instructions */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold text-[#1B2951] mb-4">Instructions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Use Chrome or Mozilla Firefox for filling this form.</li>
          <li>The form has multiple stages: Academic, Personal, Parent&apos;s, Other & Contact, Documents & Payment.</li>
          <li>Upload latest passport-sized colored photos.</li>
          <li>Assessment dates will be notified via E-mail/SMS.</li>
          <li>Payment requires Debit/Credit Card or Net Banking.</li>
          <li>Admission is merit-based. No donations accepted.</li>
          <li>Incorrect info may lead to cancellation even after admission.</li>
        </ul>
      </div>

      <form className="bg-white p-6 rounded-lg shadow-md space-y-6" onSubmit={handleSubmit}>
        {/* Academic Details */}
        <h2 className="text-xl font-semibold text-[#1B2951]">Academic Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="course" placeholder="Course" value={formData.course} onChange={handleChange} required className="input-field" />
          <input type="text" name="branch" placeholder="Branch" value={formData.branch} onChange={handleChange} className="input-field" />
          <input type="text" name="medium" placeholder="Medium" value={formData.medium} onChange={handleChange} className="input-field" />
        </div>

        {/* Personal Details */}
        <h2 className="text-xl font-semibold text-[#1B2951]">Personal Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required className="input-field" />
          <input type="text" name="middleName" placeholder="Middle Name" value={formData.middleName} onChange={handleChange} className="input-field" />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required className="input-field" />
          <input type="date" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required className="input-field" />
          <select name="gender" value={formData.gender} onChange={handleChange} required className="input-field">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="input-field" />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="input-field" />
          <input type="email" name="studentEmail" placeholder="Email" value={formData.studentEmail} onChange={handleChange} className="input-field" />
          <input type="text" name="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleChange} className="input-field" />
        </div>

        {/* Parent Details */}
        <h2 className="text-xl font-semibold text-[#1B2951]">Parent Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="fatherFirstName" placeholder="Father First Name" value={formData.fatherFirstName} onChange={handleChange} className="input-field" />
          <input type="text" name="fatherLastName" placeholder="Father Last Name" value={formData.fatherLastName} onChange={handleChange} className="input-field" />
          <input type="text" name="fatherMobile" placeholder="Father Mobile" value={formData.fatherMobile} onChange={handleChange} className="input-field" />
          <input type="text" name="fatherOccupation" placeholder="Father Occupation" value={formData.fatherOccupation} onChange={handleChange} className="input-field" />

          <input type="text" name="motherFirstName" placeholder="Mother First Name" value={formData.motherFirstName} onChange={handleChange} className="input-field" />
          <input type="text" name="motherLastName" placeholder="Mother Last Name" value={formData.motherLastName} onChange={handleChange} className="input-field" />
          <input type="text" name="motherOccupation" placeholder="Mother Occupation" value={formData.motherOccupation} onChange={handleChange} className="input-field" />
        </div>

        {/* Other Details */}
        <h2 className="text-xl font-semibold text-[#1B2951]">Other & Contact Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="lastSchool" placeholder="Last School" value={formData.lastSchool} onChange={handleChange} className="input-field" />
          <input type="text" name="board" placeholder="Board" value={formData.board} onChange={handleChange} className="input-field" />
          <input type="text" name="result" placeholder="Result" value={formData.result} onChange={handleChange} className="input-field" />
          <input type="text" name="gamesParticipation" placeholder="Games Participation" value={formData.gamesParticipation} onChange={handleChange} className="input-field" />
          <input type="text" name="discount" placeholder="Discount" value={formData.discount} onChange={handleChange} className="input-field" />
          <input type="text" name="discountDescription" placeholder="Discount Description" value={formData.discountDescription} onChange={handleChange} className="input-field" />
          <input type="text" name="studentMobile" placeholder="Student Mobile" value={formData.studentMobile} onChange={handleChange} className="input-field" />
        </div>

        {/* Document Uploads */}
        <h2 className="text-xl font-semibold text-[#1B2951]">Documents Upload</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Student Photo *</label>
            <input type="file" name="studentPhoto" accept="image/*" onChange={handleChange} required className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Aadhar Card Photo</label>
            <input type="file" name="aadharPhoto" accept="image/*" onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">10th Marksheet</label>
            <input type="file" name="mark10" accept="application/pdf,image/*" onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">12th Marksheet</label>
            <input type="file" name="mark12" accept="application/pdf,image/*" onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Graduation Marksheet</label>
            <input type="file" name="graduationMark" accept="application/pdf,image/*" onChange={handleChange} className="input-field" />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Other Documents</label>
            <input type="file" name="otherDocs" accept="application/pdf,image/*" onChange={handleChange} className="input-field" />
          </div>
        </div>

        <button type="submit" className="bg-[#1B2951] text-white px-6 py-3 rounded hover:bg-[#16223e] transition">
          Submit Registration Form
        </button>
      </form>
    </div>
  );
}
