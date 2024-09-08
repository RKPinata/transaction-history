import * as LocalAuthentication from "expo-local-authentication";

async function authenticateUser(
  promptMessage?: string
): Promise<{ success: boolean }> {
  try {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      console.warn("No biometric hardware available on this device.");
      return { success: false };
    }

    const supportedTypes =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    const biometricTypes = supportedTypes.map((type) => {
      switch (type) {
        case LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION:
          return "Face ID";
        case LocalAuthentication.AuthenticationType.FINGERPRINT:
          return "Touch ID";
        case LocalAuthentication.AuthenticationType.IRIS:
          return "Iris Recognition";
        default:
          return "Unknown";
      }
    });

    const defaultPromptMessage =
      biometricTypes.length > 1
        ? `Authenticate using one of the following: ${biometricTypes.join(
            ", "
          )}`
        : "Authenticate to proceed";

    const { success } = await LocalAuthentication.authenticateAsync({
      promptMessage: promptMessage || defaultPromptMessage,
      fallbackLabel: "Enter device passcode",
    });

    return { success };
  } catch (error) {
    console.error("Authentication error:", error);
    return { success: false };
  }
}

export { authenticateUser };
