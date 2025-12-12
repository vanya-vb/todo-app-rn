import { createHomeStyles } from "@/hooks/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const { toggleDarkMode, colors } = useTheme();

    const homeStyles = createHomeStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
            {/* <StatusBar barStyle={colors.statusBarStyle}/> */}
            <SafeAreaView style={homeStyles.safeArea}>
                <TouchableOpacity onPress={toggleDarkMode}>
                    <Text>Toggle mode</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    );
}
