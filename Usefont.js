import { useFonts } from "expo-font";
import { Text, View } from "react-native"; //usefonts

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf')
  });
  if (!dapatFont) return <Text>Font tidak ditemukan ...</Text>
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'MetroBlack'}}>Muh Darmawan Aryadinata R</Text>
      <Text style={{ fontFamily: 'MetroBold'}}>Muh Darmawan Aryadinata R</Text>
      <Text style={{ fontFamily: 'MetroLight'}}>Muh Darmawan Aryadinata R</Text>
      <Text style={{ fontFamily: 'MetroMedium'}}>Muh Darmawan Aryadinata R</Text>
      <Text style={{ fontFamily: 'MetroSemiBold'}}>Muh Darmawan Aryadinata R</Text>
      <Text>Font Biasa</Text>
    </View>
  );
};