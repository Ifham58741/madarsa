import React, { useState } from 'react';

function TranslateButton() {
  const [language, setLanguage] = useState('english');

  const handleTranslate = () => {
    // Implement translation logic here based on the selected language.
    // You can use a translation library or API to perform translations.
    // For this example, we'll just show a message based on the selected language.

    let translation = '';
    if (language === 'english') {
      translation = 'This is the English text.';
    } else if (language === 'spanish') {
      translation = 'Este es el texto en español.';
    } else if (language === 'french') {
      translation = 'Ceci est le texte en français.';
    }

    // Display the translated text (you can replace the alert with UI display)
    alert(translation);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="translate-button">
      <h2>Translation</h2>
      <div className="language-select">
        <label htmlFor="language">Select Language:</label>
        <select
          id="language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <button onClick={handleTranslate}>Translate</button>
    </div>
  );
}

export default TranslateButton;
