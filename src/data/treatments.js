import knee from "../assets/images/Total knee placement.jpeg";
import hip from "../assets/images/Total_hip_replacement.jpeg";
import rhinoplasty from "../assets/images/rhinoplasty.jpeg";
import heart_bypass from "../assets/images/Heart_Bypass.jpeg";
import valve from "../assets/images/valve.jpeg";
import cyberknife from "../assets/images/Cyberknife_Radiosurgery.jpeg";

export const treatmentData = {
  Orthopedic: [  
    { id: 1, name: 'Total Knee Replacement', price: '$4,000', stay: '5 Days', recovery: '4 Weeks', countries: ['🇮🇳', '🇹🇷', '🇦🇪'],     image: knee,
 },
    { id: 2, name: 'Total Hip Replacement', price: '$5,500', stay: '5 Days', recovery: '6 Weeks', countries: ['🇮🇳', '🇩🇪', '🇹🇷'],image:hip},
    { id: 3, name: 'Spinal Fusion Surgery', price: '$6,200', stay: '7 Days', recovery: '3 Months', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-procedures' },
    { id: 4, name: 'ACL Reconstruction', price: '$3,200', stay: '1 Day', recovery: '4 Months', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-running' },
    { id: 5, name: 'Shoulder Arthroscopy', price: '$3,800', stay: '2 Days', recovery: '2 Months', countries: ['🇩🇪', '🇹🇷'], icon: 'fa-joint' },
    { id: 6, name: 'Disc Replacement', price: '$7,500', stay: '4 Days', recovery: '8 Weeks', countries: ['🇮🇳', '🇩🇪'], icon: 'fa-spine' },
    { id: 7, name: 'Carpal Tunnel Release', price: '$1,800', stay: 'OPD', recovery: '2 Weeks', countries: ['🇮🇳', '🇦🇪'], icon: 'fa-hand-dots' },
    { id: 8, name: 'Meniscus Repair', price: '$2,900', stay: '1 Day', recovery: '6 Weeks', countries: ['🇹🇷', '🇩🇪'], icon: 'fa-crutch' },
    { id: 9, name: 'Ankle Arthrodesis', price: '$4,100', stay: '3 Days', recovery: '12 Weeks', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-shoe-prints' },
    { id: 10, name: 'Hip Arthroscopy', price: '$4,800', stay: '2 Days', recovery: '8 Weeks', countries: ['🇩🇪', '🇦🇪'], icon: 'fa-user-nurse' },
  ],
  Cardiac: [
    { id: 11, name: 'Heart Bypass (CABG)', price: '$4,500', stay: '8 Days', recovery: '2 Months', countries: ['🇮🇳', '🇦🇪', '🇬🇧'], image:heart_bypass },
    { id: 12, name: 'Valve Replacement', price: '$7,200', stay: '5 Days', recovery: '6 Weeks', countries: ['🇮🇳', '🇩🇪', '🇹🇷'], image:valve },
    { id: 13, name: 'Angioplasty', price: '$3,100', stay: '2 Days', recovery: '1 Week', countries: ['🇹🇷', '🇮🇳'], icon: 'fa-stretcher' },
    { id: 14, name: 'Pacemaker Surgery', price: '$3,800', stay: '1 Day', recovery: '2 Weeks', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-bolt' },
    { id: 15, name: 'Atrial Septal Defect', price: '$5,900', stay: '4 Days', recovery: '4 Weeks', countries: ['🇮🇳', '🇦🇪'], icon: 'fa-circle-dot' },
    { id: 16, name: 'TAVI (Valve Implant)', price: '$12,000', stay: '3 Days', recovery: '2 Weeks', countries: ['🇩🇪', '🇹🇷'], icon: 'fa-shield-heart' },
    { id: 17, name: 'Bentall Procedure', price: '$9,500', stay: '10 Days', recovery: '3 Months', countries: ['🇮🇳', '🇩🇪'], icon: 'fa-lungs-virus' },
    { id: 18, name: 'Heart Transplant', price: '$65,000', stay: '30 Days', recovery: '6 Months', countries: ['🇮🇳', '🇺🇸'], icon: 'fa-hand-holding-heart' },
    { id: 19, name: 'ICD Implantation', price: '$8,200', stay: '2 Days', recovery: '3 Weeks', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-microchip' },
    { id: 20, name: 'PDA Closure', price: '$3,400', stay: '2 Days', recovery: '10 Days', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-lock' },
  ],
  Cancer: [
    { id: 21, name: 'CyberKnife Radiosurgery', price: '$5,000', stay: 'OPD', recovery: '2 Days', countries: ['🇮🇳', '🇺🇸'], image:cyberknife },
    { id: 22, name: 'Breast Cancer Surgery', price: '$4,200', stay: '3 Days', recovery: '4 Weeks', countries: ['🇮🇳', '🇹🇷', '🇦🇪'], icon: 'fa-ribbon' },
    { id: 23, name: 'Bone Marrow Transplant', price: '$18,000', stay: '30 Days', recovery: '6 Months', countries: ['🇮🇳', '🇩🇪'], icon: 'fa-dna' },
    { id: 24, name: 'Prostatectomy (Robot)', price: '$7,800', stay: '4 Days', recovery: '3 Weeks', countries: ['🇮🇳', '🇹🇷', '🇩🇪'], icon: 'fa-robot' },
    { id: 25, name: 'Chemotherapy (Session)', price: '$600', stay: '1 Day', recovery: '3 Days', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-vial' },
    { id: 26, name: 'Liver Resection', price: '$9,200', stay: '7 Days', recovery: '2 Months', countries: ['🇮🇳', '🇩🇪'], icon: 'fa-organ' },
    { id: 27, name: 'Whipple Procedure', price: '$11,500', stay: '12 Days', recovery: '3 Months', countries: ['🇩🇪', '🇹🇷'], icon: 'fa-capsules' },
    { id: 28, name: 'Immunotherapy', price: '$4,500', stay: '1 Day', recovery: '2 Days', countries: ['🇮🇳', '🇦🇪'], icon: 'fa-shield-virus' },
    { id: 29, name: 'Thyroidectomy', price: '$3,200', stay: '2 Days', recovery: '2 Weeks', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-user-doctor' },
    { id: 30, name: 'Lung Lobectomy', price: '$8,500', stay: '6 Days', recovery: '6 Weeks', countries: ['🇮🇳', '🇩🇪'], icon: 'fa-lungs' },
  ],
  Cosmetic: [
    { id: 31, name: 'Rhinoplasty (Nose Job)', price: '$2,500', stay: '1 Day', recovery: '2 Weeks', countries: ['🇹🇷', '🇦🇪', '🇮🇳'], image:rhinoplasty },
    { id: 32, name: 'FUE Hair Transplant', price: '$1,800', stay: '1 Day', recovery: '1 Week', countries: ['🇹🇷', '🇮🇳'], icon: 'fa-user-tie' },
    { id: 33, name: 'Liposuction', price: '$3,000', stay: '1 Day', recovery: '10 Days', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-person' },
    { id: 34, name: 'Breast Augmentation', price: '$3,500', stay: '1 Day', recovery: '3 Weeks', countries: ['🇹🇷', '🇮🇳', '🇩🇪'], icon: 'fa-circle-plus' },
    { id: 35, name: 'Facelift (Rhytidectomy)', price: '$4,200', stay: '2 Days', recovery: '4 Weeks', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-mask' },
    { id: 36, name: 'Tummy Tuck', price: '$3,800', stay: '2 Days', recovery: '6 Weeks', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-scissors' },
    { id: 37, name: 'Brazilian Butt Lift', price: '$4,500', stay: '2 Days', recovery: '3 Weeks', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-venus' },
    { id: 38, name: 'Dental Veneers', price: '$250', stay: 'OPD', recovery: '1 Day', countries: ['🇹🇷', '🇮🇳'], icon: 'fa-tooth' },
    { id: 39, name: 'Blepharoplasty', price: '$2,100', stay: '1 Day', recovery: '2 Weeks', countries: ['🇹🇷', '🇦🇪'], icon: 'fa-eye' },
    { id: 40, name: 'Chin Augmentation', price: '$2,400', stay: '1 Day', recovery: '1 Week', countries: ['🇮🇳', '🇹🇷'], icon: 'fa-face-smile-wink' },
  ]
};