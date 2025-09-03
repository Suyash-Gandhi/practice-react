import { useState, useEffect } from 'react';

export default function AutoSaveForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferences: {
      newsletter: false,
      notifications: true
    }
  });
  
  const [savedData, setSavedData] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState('');

  // Auto-save effect that runs every 3 seconds
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (formData.name || formData.email || formData.message) {
        // Simulate saving to storage (in a real app, this would be localStorage or API call)
        setSavedData({ ...formData });
        setLastSaved(new Date().toLocaleTimeString());
        setSaveStatus('Auto-saved');
        
        // Clear the status after 2 seconds
        setTimeout(() => setSaveStatus(''), 2000);
      }
    }, 3000);

    return () => clearInterval(autoSaveInterval);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSaveStatus('Typing...');
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: checked
      }
    }));
    setSaveStatus('Typing...');
  };

  const handleManualSave = () => {
    setSavedData({ ...formData });
    setLastSaved(new Date().toLocaleTimeString());
    setSaveStatus('Manually saved');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
      preferences: {
        newsletter: false,
        notifications: true
      }
    });
    setSaveStatus('Form cleared');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const handleLoadSaved = () => {
    if (savedData) {
      setFormData({ ...savedData });
      setSaveStatus('Data loaded');
      setTimeout(() => setSaveStatus(''), 2000);
    }
  };

  return (
    <div>
      <div>
        <h2>Auto-Save Contact Form</h2>
        <div>
          <div>
            <span>
              {saveStatus || 'Ready'}
            </span>
            {lastSaved && (
              <span>Last saved: {lastSaved}</span>
            )}
          </div>
          <span>Auto-saves every 3 seconds</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Enter your message"
          />
        </div>

        <div>
          <label>Preferences</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.preferences.newsletter}
                onChange={handleCheckboxChange}
              />
              <span>Subscribe to newsletter</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="notifications"
                checked={formData.preferences.notifications}
                onChange={handleCheckboxChange}
              />
              <span>Enable notifications</span>
            </label>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={handleManualSave}
          >
            Save Now
          </button>
          <button
            type="button"
            onClick={handleLoadSaved}
            disabled={!savedData}
          >
            Load Saved
          </button>
          <button
            type="button"
            onClick={handleClearForm}
           >
            Clear Form
          </button>
        </div>
      </div>

      {savedData && (
        <div>
          <h3>Saved Data Preview:</h3>
          <pre>
            {JSON.stringify(savedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}