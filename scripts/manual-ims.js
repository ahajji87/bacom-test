// Manual IMS Parameter Input System
// This script provides a form interface to manually input IMS authentication parameters

class ManualIMS {
  constructor() {
    this.imsParams = {
      client_id: '',
      client_secret: '',
      code: '',
      grant_type: 'authorization_code',
      ims_url: 'https://ims-na1.adobelogin.com/ims/token/v1',
      access_token: '',
      email: '',
      password: ''
    };
    
    this.modal = null;
    this.isAuthRequired = false;
    this.init();
  }

  init() {
    // Override fetch to detect IMS authentication requests
    const originalFetch = window.fetch;
    window.fetch = (url, options) => {
      if (typeof url === 'string' && (url.includes('ims') || url.includes('auth'))) {
        this.handleIMSRequest(url, options);
        return this.processIMSRequest(url, options);
      }
      return originalFetch.call(window, url, options);
    };

    // Override adobeIMS initialization
    this.interceptAdobeIMS();
    
    // Monitor for authentication errors
    this.monitorAuthErrors();
  }

  interceptAdobeIMS() {
    // Check for adobeIMS when it loads
    const checkAdobeIMS = () => {
      if (window.adobeIMS) {
        console.log('Adobe IMS detected, setting up manual override');
        this.setupIMSOverride();
      } else {
        setTimeout(checkAdobeIMS, 100);
      }
    };
    checkAdobeIMS();
  }

  setupIMSOverride() {
    const originalSignIn = window.adobeIMS.signIn;
    window.adobeIMS.signIn = (options) => {
      console.log('IMS Sign In requested with options:', options);
      this.showManualInputForm('signin', options);
      return Promise.resolve();
    };

    const originalGetToken = window.adobeIMS.getAccessToken;
    window.adobeIMS.getAccessToken = () => {
      if (this.imsParams.access_token) {
        return Promise.resolve(this.imsParams.access_token);
      }
      this.showManualInputForm('token');
      return Promise.resolve();
    };
  }

  async handleIMSRequest(url, options) {
    console.log('IMS Request detected:', url, options);
    this.isAuthRequired = true;
    
    // Show form if we don't have the required parameters
    if (!this.hasRequiredParams()) {
      this.showManualInputForm('request', { url, options });
    }
  }

  async processIMSRequest(url, options) {
    if (!this.hasRequiredParams()) {
      return Promise.resolve(new Response('{"error": "Manual IMS parameters required"}', { status: 401 }));
    }

    // If we have an access token, return it
    if (this.imsParams.access_token) {
      return Promise.resolve(new Response(JSON.stringify({
        access_token: this.imsParams.access_token,
        token_type: 'Bearer',
        expires_in: 3600
      }), { status: 200 }));
    }

    // If we have client credentials, simulate token request
    if (this.imsParams.client_id && this.imsParams.client_secret) {
      const params = new URLSearchParams();
      params.append('client_id', this.imsParams.client_id);
      params.append('client_secret', this.imsParams.client_secret);
      params.append('code', this.imsParams.code);
      params.append('grant_type', this.imsParams.grant_type);

      try {
        const response = await fetch(this.imsParams.ims_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params,
        });

        if (response.ok) {
          const data = await response.json();
          this.imsParams.access_token = data.access_token;
          return Promise.resolve(new Response(JSON.stringify(data), { status: 200 }));
        }
      } catch (error) {
        console.error('IMS token request failed:', error);
      }
    }

    return Promise.resolve(new Response('{"error": "IMS authentication failed"}', { status: 401 }));
  }

  hasRequiredParams() {
    return this.imsParams.access_token || 
           (this.imsParams.client_id && this.imsParams.client_secret);
  }

  showManualInputForm(type, context = {}) {
    if (this.modal) {
      return; // Form already showing
    }

    this.modal = document.createElement('div');
    this.modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      font-family: Arial, sans-serif;
    `;

    const form = document.createElement('div');
    form.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 10px;
      width: 500px;
      max-width: 90%;
      max-height: 80%;
      overflow-y: auto;
    `;

    form.innerHTML = `
      <h2>Manual IMS Authentication Required</h2>
      <p><strong>Context:</strong> ${type}</p>
      <p>Please provide the IMS authentication parameters:</p>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Access Token (if available):</strong></label><br>
        <input type="text" id="access_token" placeholder="Bearer token" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Client ID:</strong></label><br>
        <input type="text" id="client_id" placeholder="IMS Client ID" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Client Secret:</strong></label><br>
        <input type="password" id="client_secret" placeholder="IMS Client Secret" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Authorization Code:</strong></label><br>
        <input type="text" id="code" placeholder="Authorization code" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Grant Type:</strong></label><br>
        <select id="grant_type" style="width: 100%; padding: 8px; margin-top: 5px;">
          <option value="authorization_code">authorization_code</option>
          <option value="client_credentials">client_credentials</option>
          <option value="refresh_token">refresh_token</option>
        </select>
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>IMS URL:</strong></label><br>
        <input type="text" id="ims_url" value="https://ims-na1.adobelogin.com/ims/token/v1" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 15px;">
        <label><strong>Email (optional):</strong></label><br>
        <input type="email" id="email" placeholder="user@example.com" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="margin-bottom: 20px;">
        <label><strong>Password (optional):</strong></label><br>
        <input type="password" id="password" placeholder="Password" style="width: 100%; padding: 8px; margin-top: 5px;">
      </div>
      
      <div style="text-align: right;">
        <button id="cancel-btn" style="padding: 10px 20px; margin-right: 10px; background: #ccc; border: none; border-radius: 5px; cursor: pointer;">Cancel</button>
        <button id="submit-btn" style="padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
      </div>
      
      <div style="margin-top: 15px; padding: 10px; background: #f0f0f0; border-radius: 5px; font-size: 12px;">
        <strong>Note:</strong> Provide either an access token OR client credentials (client_id + client_secret + code).
        This form allows manual input of IMS parameters when automatic authentication fails.
      </div>
    `;

    // Pre-fill with existing values
    Object.keys(this.imsParams).forEach(key => {
      const input = form.querySelector(`#${key}`);
      if (input && this.imsParams[key]) {
        input.value = this.imsParams[key];
      }
    });

    // Add event listeners
    const submitBtn = form.querySelector('#submit-btn');
    const cancelBtn = form.querySelector('#cancel-btn');

    submitBtn.addEventListener('click', () => {
      this.handleFormSubmit(form);
    });

    cancelBtn.addEventListener('click', () => {
      this.closeModal();
    });

    this.modal.appendChild(form);
    document.body.appendChild(this.modal);
  }

  handleFormSubmit(form) {
    // Collect values from form
    Object.keys(this.imsParams).forEach(key => {
      const input = form.querySelector(`#${key}`);
      if (input) {
        this.imsParams[key] = input.value;
      }
    });

    console.log('Manual IMS parameters updated:', this.imsParams);
    
    // Store in localStorage for persistence
    localStorage.setItem('manual-ims-params', JSON.stringify(this.imsParams));
    
    this.closeModal();
    
    // Trigger a page reload to apply the new parameters
    alert('IMS parameters updated! The page will reload to apply the changes.');
    window.location.reload();
  }

  closeModal() {
    if (this.modal) {
      document.body.removeChild(this.modal);
      this.modal = null;
    }
  }

  monitorAuthErrors() {
    // Monitor for authentication errors
    window.addEventListener('error', (event) => {
      if (event.error && event.error.message && 
          (event.error.message.includes('auth') || event.error.message.includes('IMS'))) {
        console.log('Authentication error detected:', event.error);
        this.showManualInputForm('error', { error: event.error });
      }
    });

    // Monitor for failed fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (url, options) => {
      try {
        const response = await originalFetch.call(window, url, options);
        if (!response.ok && (response.status === 401 || response.status === 403)) {
          console.log('Authentication failure detected:', response.status, url);
          this.showManualInputForm('auth-failure', { url, status: response.status });
        }
        return response;
      } catch (error) {
        if (error.message.includes('auth') || error.message.includes('IMS')) {
          console.log('Authentication error in fetch:', error);
          this.showManualInputForm('fetch-error', { error });
        }
        throw error;
      }
    };
  }

  // Load stored parameters on initialization
  loadStoredParams() {
    const stored = localStorage.getItem('manual-ims-params');
    if (stored) {
      try {
        this.imsParams = { ...this.imsParams, ...JSON.parse(stored) };
        console.log('Loaded stored IMS parameters');
      } catch (e) {
        console.error('Error loading stored IMS parameters:', e);
      }
    }
  }
}

// Initialize the manual IMS system
window.addEventListener('DOMContentLoaded', () => {
  const manualIMS = new ManualIMS();
  manualIMS.loadStoredParams();
  
  // Make it globally available for debugging
  window.manualIMS = manualIMS;
  
  console.log('Manual IMS system initialized. Use window.manualIMS to access.');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ManualIMS;
} 