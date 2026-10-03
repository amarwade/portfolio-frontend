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
import SectionHeading from "./SectionHeading";

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
      <SectionHeading
        eyebrow="Parlons de votre projet"
        title="Contacts"
        description="Si vous souhaitez échanger davantage sur mon profil ou discuter d’une opportunité, je vous invite à me contacter."
        className="contact-heading"
      />

      <form id="contact-form" className="contact-form enhanced" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="field-label" htmlFor="contact-name">
            Nom complet <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            required
            name="name"
            autoComplete="name"
            placeholder="Ex. Amar Wade"
            value={formData.name}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.name && errors.name ? 'error' : ''} ${touched.name && !errors.name && formData.name ? 'success' : ''}`}
            aria-invalid={Boolean(touched.name && errors.name)}
            aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
          />
          {touched.name && errors.name && <span id="contact-name-error" className="error-message">{errors.name}</span>}
          {touched.name && !errors.name && formData.name && <span className="success-icon" aria-hidden="true">✓</span>}
        </div>

        <div className="form-group">
          <label className="field-label" htmlFor="contact-email">
            Adresse e-mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            required
            type="email"
            name="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            value={formData.email}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.email && errors.email ? 'error' : ''} ${touched.email && !errors.email && formData.email ? 'success' : ''}`}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
          />
          {touched.email && errors.email && <span id="contact-email-error" className="error-message">{errors.email}</span>}
          {touched.email && !errors.email && formData.email && <span className="success-icon" aria-hidden="true">✓</span>}
        </div>

        <div className="form-group form-group--full">
          <label className="field-label" htmlFor="contact-subject">
            Sujet <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-subject"
            required
            name="subject"
            placeholder="Objet de votre message"
            value={formData.subject}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.subject && errors.subject ? 'error' : ''} ${touched.subject && !errors.subject && formData.subject ? 'success' : ''}`}
            aria-invalid={Boolean(touched.subject && errors.subject)}
            aria-describedby={touched.subject && errors.subject ? "contact-subject-error" : undefined}
          />
          {touched.subject && errors.subject && <span id="contact-subject-error" className="error-message">{errors.subject}</span>}
          {touched.subject && !errors.subject && formData.subject && <span className="success-icon" aria-hidden="true">✓</span>}
        </div>

        <div className="form-group form-group--full">
          <label className="field-label" htmlFor="contact-message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            name="message"
            placeholder="Décrivez votre demande ou votre proposition…"
            rows={5}
            value={formData.message}
            onChange={onChange}
            onBlur={onBlur}
            className={`form-input ${touched.message && errors.message ? 'error' : ''} ${touched.message && !errors.message && formData.message ? 'success' : ''}`}
            aria-invalid={Boolean(touched.message && errors.message)}
            aria-describedby={touched.message && errors.message ? "contact-message-error" : undefined}
          />
          {touched.message && errors.message && <span id="contact-message-error" className="error-message">{errors.message}</span>}
          {touched.message && !errors.message && formData.message && <span className="success-icon" aria-hidden="true">✓</span>}
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
        <div className="form-status success" role="status" aria-live="polite">
          <span className="status-icon">✓</span>
          <p>Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</p>
        </div>
      )}

      {/* Error message displayed if form submission fails */}
      {status === "error" && (
        <div className="form-status error" role="alert">
          <span className="status-icon">✗</span>
          <p>Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.</p>
        </div>
      )}

    </section>
  );
}

export default ContactSection;
