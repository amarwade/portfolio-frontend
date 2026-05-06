/**
 * ContactSection Component
 * 
 * A contact form section that allows visitors to send messages.
 * Features include:
 * - Form validation for all fields (name, email, subject, message)
 * - Visual feedback for valid/invalid inputs
 * - Loading and success/error states
 * - Contact information display (location, email, phone, social links)
 */

import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

// Initial state for form fields (all empty)
const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Initial state for validation errors (all empty strings)
const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSection() {
  // State to track current form field values
  const [formData, setFormData] = useState(initialFormState);
  
  // State to track validation errors for each field
  const [errors, setErrors] = useState(initialErrors);
  
  // State to track which fields have been touched (interacted with)
  // Used to show validation feedback only after user interaction
  const [touched, setTouched] = useState({});
  
  // Form submission status: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState("idle");

  /**
   * Validates a single form field based on its name and value
   * @param {string} name - The field name (name, email, subject, message)
   * @param {string} value - The field value to validate
   * @returns {string} - Error message (empty string if valid)
   */
  const validateField = (name, value) => {
    let error = "";
    
    switch (name) {
      case "name":
        // Name is required and must be at least 2 characters
        if (!value.trim()) {
          error = "Le nom est requis";
        } else if (value.trim().length < 2) {
          error = "Le nom doit contenir au moins 2 caractères";
        }
        break;
      case "email":
        // Email is required and must match email pattern
        if (!value.trim()) {
          error = "L'email est requis";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Veuillez entrer une adresse email valide";
        }
        break;
      case "subject":
        // Subject is required and must be at least 3 characters
        if (!value.trim()) {
          error = "Le sujet est requis";
        } else if (value.trim().length < 3) {
          error = "Le sujet doit contenir au moins 3 caractères";
        }
        break;
      case "message":
        // Message is required and must be at least 10 characters
        if (!value.trim()) {
          error = "Le message est requis";
        } else if (value.trim().length < 10) {
          error = "Le message doit contenir au moins 10 caractères";
        }
        break;
      default:
        break;
    }
    
    return error;
  };

  /**
   * Handles input field changes
   * Updates form data state and validates if field was already touched
   */
  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Only validate if the field has been touched (to avoid showing errors immediately)
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  /**
   * Handles input field blur (when user leaves the field)
   * Marks field as touched and validates it
   */
  const onBlur = (event) => {
    const { name, value } = event.target;
    // Mark the field as touched so validation feedback appears
    setTouched((prev) => ({ ...prev, [name]: true }));
    // Validate the field immediately on blur
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  /**
   * Validates all form fields at once
   * Called when submitting the form
   * @returns {boolean} - True if all fields are valid, false otherwise
   */
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate each field and collect errors
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) isValid = false;
    });

    // Update errors state with all validation results
    setErrors(newErrors);
    // Mark all fields as touched to show all validation feedback
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    return isValid;
  };

  /**
   * Handles form submission
   * Validates form, sends data to backend, and handles success/error states
   */
  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Validate all fields before submitting
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setStatus("loading"); // Show loading state

    try {
      // Send form data to backend API
      await sendContactMessage(formData);
      
      // Reset form on success
      setFormData(initialFormState);
      setErrors(initialErrors);
      setTouched({});
      setStatus("success");
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      // Show error state if submission fails
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section section-cv reveal-on-scroll">
      <h2 className="cv-section-title">Contact</h2>
      <p>Si vous souhaitez échanger davantage sur mon profil ou discuter d'une opportunité, je vous invite à me contacter via le formulaire prévu à cet effet.</p>

      <form id="contact-form" className="contact-form enhanced" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            required
            name="name"
            placeholder="Nom complet"
            value={formData.name}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.name && errors.name ? 'error' : ''} ${touched.name && !errors.name && formData.name ? 'success' : ''}`}
          />
          {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
          {touched.name && !errors.name && formData.name && <span className="success-icon">✓</span>}
        </div>

        <div className="form-group">
          <input
            required
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.email && errors.email ? 'error' : ''} ${touched.email && !errors.email && formData.email ? 'success' : ''}`}
          />
          {touched.email && errors.email && <span className="error-message">{errors.email}</span>}
          {touched.email && !errors.email && formData.email && <span className="success-icon">✓</span>}
        </div>

        <div className="form-group">
          <input
            required
            name="subject"
            placeholder="Sujet du message"
            value={formData.subject}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.subject && errors.subject ? 'error' : ''} ${touched.subject && !errors.subject && formData.subject ? 'success' : ''}`}
          />
          {touched.subject && errors.subject && <span className="error-message">{errors.subject}</span>}
          {touched.subject && !errors.subject && formData.subject && <span className="success-icon">✓</span>}
        </div>

        <div className="form-group">
          <textarea
            required
            name="message"
            placeholder="Votre message..."
            rows={5}
            value={formData.message}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.message && errors.message ? 'error' : ''} ${touched.message && !errors.message && formData.message ? 'success' : ''}`}
          />
          {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
          {touched.message && !errors.message && formData.message && <span className="success-icon">✓</span>}
        </div>

        <button 
          className="submit-button" 
          type="submit" 
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <span className="loading-spinner"></span>
              Envoi en cours...
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
      </form>

      {/* Success message displayed after form submission succeeds */}
      {status === "success" && (
        <div className="form-status success">
          <span className="status-icon">✓</span>
          <p>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</p>
        </div>
      )}
      
      {/* Error message displayed if form submission fails */}
      {status === "error" && (
        <div className="form-status error">
          <span className="status-icon">✗</span>
          <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.</p>
        </div>
      )}

      {/* Contact Information */}
      <div className="contact-info-section">
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <svg className="contact-info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>62100 Calais, France</span>
          </div>
          
          <div className="contact-info-item">
            <svg className="contact-info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 5L2 7"/>
            </svg>
            <a href="mailto:amarwade927@gmail.com">amarwade927@gmail.com</a>
          </div>
          
          <div className="contact-info-item">
            <svg className="contact-info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <a href="tel:+33745651233">+33 7 45 65 12 33</a>
          </div>
        </div>
        
        <div className="contact-languages">
          <span className="languages-label-contact">Langues:</span>
          <span className="languages-text">Français · Anglais · Wolof</span>
        </div>
        
        <div className="contact-social">
          <a href="https://github.com/amarwade" target="_blank" rel="noreferrer" className="social-link-contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/amar-wade" target="_blank" rel="noreferrer" className="social-link-contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
        
        {/* Action buttons */}
        <div className="contact-actions">
          <a 
            href="cv-amar-wade.pdf" 
            download 
            className="button secondary enhanced"
          >
            <span className="button-content">
              <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span className="button-text">Télécharger mon CV</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
