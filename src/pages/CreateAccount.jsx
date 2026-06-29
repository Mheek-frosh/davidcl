import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const CreateAccount = () => {
  const { createAccount, error, setError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = e => {
    setError('');
    setFieldErrors(prev => ({ ...prev, [e.target.name]: '' }));
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.includes('@')) errs.email = 'Enter a valid email';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match';
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setFieldErrors(errs); return; }
    setLoading(true);
    await new Promise(r => setTimeout(r, 700));
    const result = createAccount(form.name.trim(), form.email, form.password);
    setLoading(false);
    if (result.success) navigate('/');
  };

  const strength = pw => {
    if (!pw) return 0;
    let score = 0;
    if (pw.length >= 6) score++;
    if (pw.length >= 10) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };
  const pwStrength = strength(form.password);
  const strengthLabel = ['', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'][pwStrength] || '';
  const strengthClass = ['', 'very-weak', 'weak', 'fair', 'strong', 'very-strong'][pwStrength] || '';

  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-bg-circle auth-bg-circle-1"></div>
        <div className="auth-bg-circle auth-bg-circle-2"></div>
      </div>

      <div className="auth-card auth-card-wide">
        <Link to="/" className="auth-brand">DAVID CLOTHINGS</Link>
        <h1 className="auth-heading">Create your account</h1>
        <p className="auth-sub">Join the David Clothings community</p>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="auth-field">
            <label htmlFor="name" className="auth-label">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className={`auth-input ${fieldErrors.name ? 'has-error' : ''}`}
              placeholder="John Doe"
              autoComplete="name"
            />
            {fieldErrors.name && <span className="auth-field-error">{fieldErrors.name}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="email" className="auth-label">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`auth-input ${fieldErrors.email || error ? 'has-error' : ''}`}
              placeholder="you@example.com"
              autoComplete="email"
            />
            {fieldErrors.email && <span className="auth-field-error">{fieldErrors.email}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="password" className="auth-label">Password</label>
            <div className="auth-input-wrap">
              <input
                id="password"
                name="password"
                type={showPass ? 'text' : 'password'}
                value={form.password}
                onChange={handleChange}
                className={`auth-input ${fieldErrors.password ? 'has-error' : ''}`}
                placeholder="Min. 6 characters"
                autoComplete="new-password"
              />
              <button type="button" className="auth-eye-btn" onClick={() => setShowPass(s => !s)}>
                {showPass ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                )}
              </button>
            </div>
            {form.password && (
              <div className="pw-strength">
                <div className="pw-strength-bars">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className={`pw-bar ${pwStrength >= i ? strengthClass : ''}`}></div>
                  ))}
                </div>
                <span className={`pw-strength-label ${strengthClass}`}>{strengthLabel}</span>
              </div>
            )}
            {fieldErrors.password && <span className="auth-field-error">{fieldErrors.password}</span>}
          </div>

          <div className="auth-field">
            <label htmlFor="confirm" className="auth-label">Confirm password</label>
            <input
              id="confirm"
              name="confirm"
              type={showPass ? 'text' : 'password'}
              value={form.confirm}
              onChange={handleChange}
              className={`auth-input ${fieldErrors.confirm ? 'has-error' : ''}`}
              placeholder="Re-enter password"
              autoComplete="new-password"
            />
            {fieldErrors.confirm && <span className="auth-field-error">{fieldErrors.confirm}</span>}
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit-btn" disabled={loading}>
            {loading ? <span className="auth-spinner"></span> : 'CREATE ACCOUNT'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{' '}
          <Link to="/signin" className="auth-link">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
