import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [channelName, setChannelName] = useState("");
  const [isIncognito, setIsIncognito] = useState(false);
  const [accounts, setAccounts] = useState([]);
  const [premiumStatus, setPremiumStatus] = useState(false);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [timeWatched, setTimeWatched] = useState(0);
  const [personalData, setPersonalData] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform API call to update user settings
    // Example: axios.post('/api/update-settings', { name, email, password, channelName, isIncognito, accounts, premiumStatus, purchaseHistory, timeWatched, personalData })
    console.log("Settings updated!");
  };

  const handleAddAccount = () => {
    setAccounts([...accounts, { username: "", password: "" }]);
  };

  const handleAccountChange = (index, key, value) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index][key] = value;
    setAccounts(updatedAccounts);
  };

  const handleToggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleToggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>Profile Settings</h1>
      <button type="button" onClick={handleToggleSettings}>
        {showSettings ? "Hide Settings" : "Show Settings"}
      </button>
      {showSettings && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Channel Name:
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={isIncognito}
              onChange={(e) => setIsIncognito(e.target.checked)}
            />
            Turn on Incognito
          </label>
          <br />
          <button type="button" onClick={handleAddAccount}>
            Add Account
          </button>
          {accounts.map((account, index) => (
            <div key={index}>
              <label>
                Account {index + 1} Username:
                <input
                  type="text"
                  value={account.username}
                  onChange={(e) =>
                    handleAccountChange(index, "username", e.target.value)
                  }
                />
              </label>
              <br />
              <label>
                Account {index + 1} Password:
                <input
                  type="password"
                  value={account.password}
                  onChange={(e) =>
                    handleAccountChange(index, "password", e.target.value)
                  }
                />
              </label>
              <br />
            </div>
          ))}
          <br />
          <label>
            Premium Status:
            <input
              type="checkbox"
              checked={premiumStatus}
              onChange={(e) => setPremiumStatus(e.target.checked)}
            />
            Get YouTube Premium
          </label>
          <br />
          {setPurchaseHistory && (
            <div>
              <button
                type="button"
                onClick={() => purchaseHistory("Monthly Membership")}
              >
                Purchase Monthly Membership
              </button>
              <button
                type="button"
                onClick={() => purchaseHistory("Yearly Membership")}
              >
                Purchase Yearly Membership
              </button>
            </div>
          )}
          <br />
          <label>
            Time Watched:
            <input
              type="number"
              value={timeWatched}
              onChange={(e) => setTimeWatched(parseInt(e.target.value))}
            />
          </label>
          <br />
          <label>
            Personal Data:
            <textarea
              value={personalData}
              onChange={(e) => setPersonalData(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Save Settings</button>
        </form>
      )}
      <br />
      <button type="button" onClick={handleToggleHelp}>
        {showHelp ? "Hide Help" : "Show Help"}
      </button>
      {showHelp && (
        <div>
          <h2>Help</h2>
          <p>Need assistance? Contact our support team.</p>
        </div>
      )}
      <br />
      <h2>Feedback</h2>
      <textarea value={feedback} onChange={handleFeedbackChange} />
      <button
        type="button"
        onClick={() => console.log("Submitted feedback:", feedback)}
      >
        Submit Feedback
      </button>
      <br />

      <div className={darkMode ? "dark" : "light"}>
        <button type="button" onClick={handleToggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
