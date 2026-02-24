import knee from "../assets/images/Total knee placement.jpeg";
import hip from "../assets/images/Total_hip_replacement.jpeg";
import rhinoplasty from "../assets/images/rhinoplasty.jpeg";
import heart_bypass from "../assets/images/Heart_Bypass.jpeg";
import valve from "../assets/images/valve.jpeg";
import cyberknife from "../assets/images/Cyberknife_Radiosurgery.jpeg";

export const treatmentData = {

  Orthopedic: [
    { id: 1, name: 'Total Knee Replacement', price: '₹3.3L', stay: '5 Days', recovery: '4 Weeks', image: knee },
    { id: 2, name: 'Total Hip Replacement', price: '₹4.6L', stay: '5 Days', recovery: '6 Weeks', image: hip },
    { id: 3, name: 'Spinal Fusion Surgery', price: '₹5.1L', stay: '7 Days', recovery: '3 Months', icon: 'fa-procedures' },
    { id: 4, name: 'ACL Reconstruction', price: '₹2.7L', stay: '1 Day', recovery: '4 Months', icon: 'fa-running' },
    { id: 5, name: 'Shoulder Arthroscopy', price: '₹3.2L', stay: '2 Days', recovery: '2 Months', icon: 'fa-joint' },
    { id: 6, name: 'Disc Replacement', price: '₹6.2L', stay: '4 Days', recovery: '8 Weeks', icon: 'fa-spine' },
    { id: 7, name: 'Carpal Tunnel Release', price: '₹1.5L', stay: 'OPD', recovery: '2 Weeks', icon: 'fa-hand-dots' },
    { id: 8, name: 'Meniscus Repair', price: '₹2.4L', stay: '1 Day', recovery: '6 Weeks', icon: 'fa-crutch' },
    { id: 9, name: 'Ankle Arthrodesis', price: '₹3.4L', stay: '3 Days', recovery: '12 Weeks', icon: 'fa-shoe-prints' },
    { id: 10, name: 'Hip Arthroscopy', price: '₹4.0L', stay: '2 Days', recovery: '8 Weeks', icon: 'fa-user-nurse' },
  ],

  Cardiac: [
    { id: 11, name: 'Heart Bypass (CABG)', price: '₹3.7L', stay: '8 Days', recovery: '2 Months', image: heart_bypass },
    { id: 12, name: 'Valve Replacement', price: '₹6.0L', stay: '5 Days', recovery: '6 Weeks', image: valve },
    { id: 13, name: 'Angioplasty', price: '₹2.6L', stay: '2 Days', recovery: '1 Week', icon: 'fa-stretcher' },
    { id: 14, name: 'Pacemaker Surgery', price: '₹3.2L', stay: '1 Day', recovery: '2 Weeks', icon: 'fa-bolt' },
    { id: 15, name: 'Atrial Septal Defect', price: '₹4.9L', stay: '4 Days', recovery: '4 Weeks', icon: 'fa-circle-dot' },
    { id: 16, name: 'TAVI (Valve Implant)', price: '₹10.0L', stay: '3 Days', recovery: '2 Weeks', icon: 'fa-shield-heart' },
    { id: 17, name: 'Bentall Procedure', price: '₹7.9L', stay: '10 Days', recovery: '3 Months', icon: 'fa-lungs-virus' },
    { id: 18, name: 'Heart Transplant', price: '₹54.0L', stay: '30 Days', recovery: '6 Months', icon: 'fa-hand-holding-heart' },
    { id: 19, name: 'ICD Implantation', price: '₹6.8L', stay: '2 Days', recovery: '3 Weeks', icon: 'fa-microchip' },
    { id: 20, name: 'PDA Closure', price: '₹2.8L', stay: '2 Days', recovery: '10 Days', icon: 'fa-lock' },
  ],

  Cancer: [
    { id: 21, name: 'CyberKnife Radiosurgery', price: '₹4.2L', stay: 'OPD', recovery: '2 Days', image: cyberknife },
    { id: 22, name: 'Breast Cancer Surgery', price: '₹3.5L', stay: '3 Days', recovery: '4 Weeks', icon: 'fa-ribbon' },
    { id: 23, name: 'Bone Marrow Transplant', price: '₹14.9L', stay: '30 Days', recovery: '6 Months', icon: 'fa-dna' },
    { id: 24, name: 'Prostatectomy (Robot)', price: '₹6.5L', stay: '4 Days', recovery: '3 Weeks', icon: 'fa-robot' },
    { id: 25, name: 'Chemotherapy (Session)', price: '₹0.5L', stay: '1 Day', recovery: '3 Days', icon: 'fa-vial' },
    { id: 26, name: 'Liver Resection', price: '₹7.6L', stay: '7 Days', recovery: '2 Months', icon: 'fa-organ' },
    { id: 27, name: 'Whipple Procedure', price: '₹9.5L', stay: '12 Days', recovery: '3 Months', icon: 'fa-capsules' },
    { id: 28, name: 'Immunotherapy', price: '₹3.7L', stay: '1 Day', recovery: '2 Days', icon: 'fa-shield-virus' },
    { id: 29, name: 'Thyroidectomy', price: '₹2.7L', stay: '2 Days', recovery: '2 Weeks', icon: 'fa-user-doctor' },
    { id: 30, name: 'Lung Lobectomy', price: '₹7.1L', stay: '6 Days', recovery: '6 Weeks', icon: 'fa-lungs' },
  ],

  Cosmetic: [
    { id: 31, name: 'Rhinoplasty (Nose Job)', price: '₹2.1L', stay: '1 Day', recovery: '2 Weeks', image: rhinoplasty },
    { id: 32, name: 'FUE Hair Transplant', price: '₹1.5L', stay: '1 Day', recovery: '1 Week', icon: 'fa-user-tie' },
    { id: 33, name: 'Liposuction', price: '₹2.5L', stay: '1 Day', recovery: '10 Days', icon: 'fa-person' },
    { id: 34, name: 'Breast Augmentation', price: '₹2.9L', stay: '1 Day', recovery: '3 Weeks', icon: 'fa-circle-plus' },
    { id: 35, name: 'Facelift (Rhytidectomy)', price: '₹3.5L', stay: '2 Days', recovery: '4 Weeks', icon: 'fa-mask' },
    { id: 36, name: 'Tummy Tuck', price: '₹3.2L', stay: '2 Days', recovery: '6 Weeks', icon: 'fa-scissors' },
    { id: 37, name: 'Brazilian Butt Lift', price: '₹3.7L', stay: '2 Days', recovery: '3 Weeks', icon: 'fa-venus' },
    { id: 38, name: 'Dental Veneers', price: '₹0.2L', stay: 'OPD', recovery: '1 Day', icon: 'fa-tooth' },
    { id: 39, name: 'Blepharoplasty', price: '₹1.7L', stay: '1 Day', recovery: '2 Weeks', icon: 'fa-eye' },
    { id: 40, name: 'Chin Augmentation', price: '₹2.0L', stay: '1 Day', recovery: '1 Week', icon: 'fa-face-smile-wink' },
  ]

};