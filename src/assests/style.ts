import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centerContainer: {
    backgroundColor:"#1F1F1F",
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  inputContainer : {
    // width: "80%",
    justifyContent: 'center',
    // backgroundColor:"red",
  },
  inputStyle: { 
    // backgroundColor: "yellow",
    
    width:"80%",
    color: "#000000",
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    
  },

  placeholderTextColor: {
    color: "#E3E6E8"
  },

  button : {
    borderRadius: 5,
  },

  primary: {
  color: "white",
    backgroundColor: "#0d6efd"
  },
  
  secondary: {
  color: "white",
    backgroundColor: "#6c757d"
  }
});

export default styles;
