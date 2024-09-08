# Transaction History App

![Screenshot 2024-09-08 at 11 28 28 AM](https://github.com/user-attachments/assets/3205bbe8-1613-475c-83ce-fd5552f5379f)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v20 or later)
- **Expo CLI** (v5 or later)
- **Expo Go App** installed on your mobile device (iOS or Android)

### Optional:

- **iOS Simulator**: Available via Xcode on macOS.
- **Android Emulator**: Available via Android Studio on any platform.

## Getting Started

Follow these steps to set up and run the app on your local machine:

### 1. Clone the Repository

Clone the repository from GitHub and navigate into the project directory.
```bash
git clone https://github.com/RKPinata/transaction-history
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies.
```bash
cd transaction-history
npm install 
```

### 3. Start the Expo Development Server

After installing the dependencies, start the Expo development server
```bash
npm run start
```
### 4. Run the App on Expo Go

1. **Open Expo Go** on your mobile device.
   - Download the Expo Go app from the App Store (iOS) or Google Play (Android).

2. **Scan the QR Code or Copy the `exp://` Link**:
   - On the terminal, you will see a QR code and an `exp://` link.
   - You can either:
     - **Scan the QR code** using the Expo Go app on your device, or
     - **Copy the `exp://` link** and paste it directly into the Expo Go app under the "Enter URL manually" option.

3. **Run the App**:
   - After scanning the QR code or entering the `exp://` link, the app will automatically open in the Expo Go app on your device.

### 5. Optional: Run on Simulator/Emulator

If you prefer to run the app on a simulator or emulator instead of a physical device:

- **iOS Simulator**: If you're on macOS, you can open the iOS Simulator via Xcode. After starting the Expo server, you can press "i" to "open iOS simulator".
- **Android Emulator**: If you're using Android Studio, make sure the emulator is running, then press a tp "open on Android device/emulator".

## Additional Notes

- **Face ID issue on iOS**: Please note that Face ID authentication does not work in Expo Go. It will only function correctly when the app is built for production. You can refer to the following issues for more details:
  - [Expo Issue #25055](https://github.com/expo/expo/issues/25055)
  - [Expo Issue #21694](https://github.com/expo/expo/issues/21694)


