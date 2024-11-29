## AI-Powered Voice Interface Supporting Individuals with Limb Differences and Tremor Disorders

### Video Mockup : 

https://drive.google.com/file/d/1TDGkdiqyL0cBGwzIZgim_jW_KpiqMtNG/view?usp=sharing 
https://drive.google.com/file/d/11QukZO9iRZO6pIbVIaAvFDnpFrqKk5Ye/view?usp=sharing

### Code Structure
<img width="616" alt="Screenshot 2024-11-25 at 12 43 34 AM" src="https://github.com/user-attachments/assets/df7133c8-877f-4b41-bbb1-0b1822268fed">

### **1\. DOM Elements**

The code interacts with the following HTML elements:

*   zipInput: A text input field where the user's zip code is displayed.
    
*   stationDropdown: A dropdown menu for selecting stations based on the provided zip code.
    
*   nextHourResult: A text box displaying the predicted bike demand at the selected station.
    

### **2\. User Interaction via Speech**

#### **Text-to-Speech Functionality**

*   **Function:** speakText
    
*   Converts text into speech using the SpeechSynthesisUtterance API.
    
*   Accepts a callback to trigger further actions once speech is completed.
    

#### **Speech Recognition**

*   **Function:** startSpeechRecognition
    
*   Leverages the browser's SpeechRecognition (or webkitSpeechRecognition) API.
    
*   Captures and processes spoken input.
    
*   Handles errors gracefully by providing feedback to the user.
    

### **3\. Workflow for Voice Interaction**

*   **Main Function:** startVoiceInteraction
    
*   Orchestrates a step-by-step user interaction:
    
    1.  **Zip Code Input:** Prompts the user to speak a zip code.
        
        *   Validates the spoken input to ensure it is a 5-digit number.
            
        *   Filters stationData to find stations matching the zip code.
            
    2.  **Station Selection:** Reads station names aloud for the user.
        
        *   Prompts the user to speak a choice (by station number).
            
        *   Validates the user's selection and proceeds if valid.
            
    3.  **Bike Demand Calculation:**
        
        *   Estimates the bike demand (random calculation based on available docks).
            
        *   Displays the result in the nextHourResult field.
            
        *   Reads the estimated demand aloud.
            

### **4\. Auxiliary Functionality**

#### **Populating Station Dropdown**

*   **Function:** populateStations
    
*   Dynamically populates the dropdown with station names matching the user's zip code.
    
*   Adds options in the format: 1. Station Name, 2. Station Name, etc.
    

#### **Interaction on Page Load**

*   **Event:** window.onload
    
*   Starts the voice interaction automatically 1 second after the page loads.
