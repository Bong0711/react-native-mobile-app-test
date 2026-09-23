import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-green-600">
                Welcome to Nativewind!
            </Text>

            <Link href="/onboarding" className="mt-4 rounded bg-black px-4 py-2">
                <Text className="text-white">Go to onboarding</Text>
            </Link>

            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-blue-600 px-4 py-2">
                <Text className="text-white">Sign Up</Text>
            </Link>

            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-blue-600 px-4 py-2">
                <Text className="text-white">Sign In</Text>
            </Link>

            <Link href="/subsciptions/spotify">Spotify Subscription</Link>
            <Link
                href={{
                    pathname: "/subsciptions/[id]",
                    params: {id : "claude"},
                }}
            >
            Claude Max Subscription
            </Link>
        </View>
    );
}