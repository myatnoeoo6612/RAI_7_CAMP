// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
// import Slider from '@react-native-community/slider';
// import { Header } from 'react-native-elements';

// const App = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [esp32Ip, setEsp32Ip] = useState('');
//   const [P, setP] = useState(0);
//   const [I, setI] = useState(0);
//   const [D, setD] = useState(0);
//   const [speed, setSpeed] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Display the loading screen for 2 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   const sendData = () => {
//     if (esp32Ip.trim() === '') {
//       alert('Please enter the ESP32 IP address.');
//       return;
//     }
//     fetch(`http://${esp32Ip}/setPID?P=${P}&I=${I}&D=${D}&Speed=${speed}`)
//       .then(response => response.text())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   if (isLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <Image source={require('./assets/rai_log.png')} style={styles.logo} />
//         <ActivityIndicator size="large" color="#00796B" />
//         <Text style={styles.loadingText}>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <React.Fragment>
//       <SafeAreaView style={{ flex: 0, backgroundColor: '#00796B' }} />
//       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={styles.container}>
//           <Header
//             centerComponent={{ text: 'RAI PID Tuner', style: styles.header }}
//             backgroundColor="#00796B"
//           />
//           <View style={styles.content}>
//             <Text style={styles.label}>ESP32 IP Address</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter ESP32 IP Address"
//               placeholderTextColor="#B2DFDB"
//               value={esp32Ip}
//               onChangeText={text => setEsp32Ip(text)}
//             />
//             <Text style={styles.label}>P Value</Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0}
//               maximumValue={255}
//               step={1}
//               value={P}
//               onValueChange={value => setP(value)}
//               minimumTrackTintColor="#00796B"
//               maximumTrackTintColor="#B2DFDB"
//               thumbTintColor="#00796B"
//             />
//             <Text style={styles.value}>{P}</Text>

//             <Text style={styles.label}>I Value</Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0}
//               maximumValue={255}
//               step={1}
//               value={I}
//               onValueChange={value => setI(value)}
//               minimumTrackTintColor="#00796B"
//               maximumTrackTintColor="#B2DFDB"
//               thumbTintColor="#00796B"
//             />
//             <Text style={styles.value}>{I}</Text>

//             <Text style={styles.label}>D Value</Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0}
//               maximumValue={255}
//               step={1}
//               value={D}
//               onValueChange={value => setD(value)}
//               minimumTrackTintColor="#00796B"
//               maximumTrackTintColor="#B2DFDB"
//               thumbTintColor="#00796B"
//             />
//             <Text style={styles.value}>{D}</Text>

//             <Text style={styles.label}>Speed Value</Text>
//             <Slider
//               style={styles.slider}
//               minimumValue={0}
//               maximumValue={255}
//               step={1}
//               value={speed}
//               onValueChange={value => setSpeed(value)}
//               minimumTrackTintColor="#00796B"
//               maximumTrackTintColor="#B2DFDB"
//               thumbTintColor="#00796B"
//             />
//             <Text style={styles.value}>{speed}</Text>

//             <TouchableOpacity style={styles.button} onPress={sendData}>
//               <Text style={styles.buttonText}>Send Data</Text>
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.footer}>Developed by Myat</Text>
//         </View>
//       </SafeAreaView>
//     </React.Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 0,
//     backgroundColor: '#00796B',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   header: {
//     color: '#fff',
//     fontSize: 20,
//   },
//   content: {
//     flex: 1,
//     padding: 30,
//   },
//   label: {
//     fontSize: 18,
//     marginVertical: 10,
//     color: '#004D40',
//   },
//   input: {
//     height: 40,
//     borderColor: '#004D40',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     color: '#004D40',
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   value: {
//     fontSize: 18,
//     color: '#004D40',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#00796B',
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#004D40',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   footer: {
//     textAlign: 'center',
//     padding: 10,
//     color: '#004D40',
//     backgroundColor: '#ffffff',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   loadingText: {
//     marginTop: 10,
//     fontSize: 18,
//     color: '#00796B',
//   },
//   logo: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
// });

// export default App;

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import CustomHeader from './CustomHeader';  // Adjust the import path as necessary

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [esp32Ip, setEsp32Ip] = useState('');
  const [P, setP] = useState(0);
  const [I, setI] = useState(0);
  const [D, setD] = useState(0);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Display the loading screen for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const sendData = () => {
    if (esp32Ip.trim() === '') {
      alert('Please enter the ESP32 IP address.');
      return;
    }
    fetch(`http://${esp32Ip}/setPID?P=${P}&I=${I}&D=${D}&Speed=${speed}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Image source={require('./assets/rai_log.png')} style={styles.logo} />
        <ActivityIndicator size="large" color="#00796B" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '#00796B' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.container}>
          <CustomHeader title="RAI PID Tuner" />
          <View style={styles.content}>
            <Text style={styles.label}>ESP32 IP Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter ESP32 IP Address"
              placeholderTextColor="#B2DFDB"
              value={esp32Ip}
              onChangeText={text => setEsp32Ip(text)}
            />
            <Text style={styles.label}>P Value</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={P}
              onValueChange={value => setP(value)}
              minimumTrackTintColor="#00796B"
              maximumTrackTintColor="#B2DFDB"
              thumbTintColor="#00796B"
            />
            <Text style={styles.value}>{P}</Text>

            <Text style={styles.label}>I Value</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={I}
              onValueChange={value => setI(value)}
              minimumTrackTintColor="#00796B"
              maximumTrackTintColor="#B2DFDB"
              thumbTintColor="#00796B"
            />
            <Text style={styles.value}>{I}</Text>

            <Text style={styles.label}>D Value</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={D}
              onValueChange={value => setD(value)}
              minimumTrackTintColor="#00796B"
              maximumTrackTintColor="#B2DFDB"
              thumbTintColor="#00796B"
            />
            <Text style={styles.value}>{D}</Text>

            <Text style={styles.label}>Speed Value</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={255}
              step={1}
              value={speed}
              onValueChange={value => setSpeed(value)}
              minimumTrackTintColor="#00796B"
              maximumTrackTintColor="#B2DFDB"
              thumbTintColor="#00796B"
            />
            <Text style={styles.value}>{speed}</Text>

            <TouchableOpacity style={styles.button} onPress={sendData}>
              <Text style={styles.buttonText}>Send Data</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.footer}>Developed by Myat</Text>
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: '#00796B',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    color: '#fff',
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#004D40',
  },
  input: {
    height: 40,
    borderColor: '#004D40',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#004D40',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  value: {
    fontSize: 18,
    color: '#004D40',
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00796B',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#004D40',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    padding: 10,
    color: '#004D40',
    backgroundColor: '#ffffff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#00796B',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default App;
