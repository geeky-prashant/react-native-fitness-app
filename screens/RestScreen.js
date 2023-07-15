import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
SafeAreaView;
import { MaterialIcons } from '@expo/vector-icons';

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(2);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1)
    }, 1000)
  }

  useEffect(() => {
    startTime();

    //Cleanup Function
    return() => clearTimeout(timer);
  },)

  return (
    <SafeAreaView>
      <Image
        // resizeMode="contain"
        source={{
          uri: "https://img.freepik.com/free-photo/full-length-athlete-sipping-water-from-fitness-bottle-exhausted-after-workout_1098-18878.jpg?w=360&t=st=1689099570~exp=1689100170~hmac=a60d176d8a393f59b8b032dd294005ceedbd048a04c01e542bcffa815ecd4428",
        }}
        style={{ width: "100%", height: 420, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
      />

      <Text style={{ fontSize: 30, fontWeight: "900", marginTop: 50, textAlign: "center" }}>TAKE A BREAK!</Text>

      <Text style={{ fontSize: 35, fontWeight: "900", marginTop: 50, textAlign: "center" }}><MaterialIcons name="timer" size={26} color="black" /> {timeLeft}</Text>
    </SafeAreaView>
  )
}

export default RestScreen